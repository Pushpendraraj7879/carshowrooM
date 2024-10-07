const express=require("express");
const app=express();
require("dotenv").config();
const path=require("path");
const mongoose=require("mongoose");
const User=require("./modules/User");
const jwt=require("jsonwebtoken");
const cookieParser=require("cookie-parser");
const {setUser,getUser}=require("./utils/auth");
const checkAuthentication=require("./middlewares/authentication");

app.use(checkAuthentication);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine','ejs');
app.set('views',path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));


async function connectDB(){
    try{
       await mongoose.connect(process.env.MONGO_URL);
       console.log("database is successful connected")
    }catch(error){
        console.log("error in database",error);
    }
}

connectDB();







app.get('/signup',(req,res)=>{
    res.render("login");
})

app.get('/login',(req,res)=>{
    res.render("login");
})

app.post("/signup-data",async(req,res)=>{
     const {firstName,lastName,email,passoword}=req.body;

     
     try{
        const user= await User.findOne({"email":email});

        if(user) return res.render("/signup",{message:"you are already registered"});

        await User.create({firstName,lastName,email,passoword});
        console.log("successfully data is submitted to database");
        const token=setUser(firstName,process.env.SECRET_KEY);
        res.cookie("uid",token);
        res.redirect('/home');
     }catch(error){
        console.log("there is some error ",error);
     }

})


app.post("/login-data",async(req,res)=>{
    const {email,password}=req.body;

    try{
       const user= await User.findOne({"email":email,"password":password});
       if(!user) return res.render("/login",{message:"you are not registered"});
         console.log("successfully data is submitted to database");
      
       res.redirect('/home');
    }catch(error){
       console.log("there is some error ",error);
    }

})








app.listen(process.env.PORT,(req,res)=>{
    console.log("app is runing properly");
})

