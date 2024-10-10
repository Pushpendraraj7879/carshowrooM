const express=require("express");
const app=express();
require("dotenv").config();
const path=require("path");
const mongoose=require("mongoose");
const User=require("./modules/User");
const Contact=require("./modules/Contact");
const jwt=require("jsonwebtoken");
const cookieParser=require("cookie-parser");
const {setUser,getUser}=require("./utils/auth");
const checkAuthentication=require("./middlewares/authentication");
const connectDB=require("./utils/connectDB");


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.set('view engine','ejs');
app.set('views',path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));


// async function connectDB(){
//     try{
//         await mongoose.connect(process.env.MONGO_URL);
//         console.log("database is successful connected")
//     }catch(error){
//         console.log("error in database",error);
//     }
// }

connectDB();

// app.use(checkAuthentication);






app.get('/signup',checkAuthentication,(req,res)=>{
    res.render("signup");
})

app.get('/login',checkAuthentication,(req,res)=>{
    res.render("login");
})

app.get('/home',(req,res)=>{
    const uid=req.cookies?.uid;
    
    
    
    if(!uid)return res.redirect('/login');
    
    
    const user=getUser(uid);
    
    

    if(!user)return res.redirect('/login');
    res.render("home");
    // console.log(req.user);
})

app.post("/signup-data",async(req,res)=>{
     const {firstName,lastName,email,password}=req.body;
     console.log(req.body);

     
     try{
        // const user= await User.findOne({"email":email});

        // if(user) return res.redirect("/signup");

        await User.create({firstName,lastName,email,password});
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
       if(!user) return res.redirect("/login");
         console.log("successfully data is submitted to database");
         const token=setUser(user.firstName,process.env.SECRET_KEY);
         res.cookie("uid",token);
       res.redirect('/home');
    }catch(error){
       console.log("there is  error ",error);
    }

})

app.get("/logout",(req,res)=>{
    res.clearCookie("uid");
    res.redirect('/login');
})

app.get("/contact",(req,res)=>{
   
    res.render('contact');
    
})





app.post("/contact-data",async(req,res)=>{
   
    const {name,mobile,email,message}=req.body;

    try{
             
        await Contact.create({name,mobile,email,message});
        console.log("contact is successfully submitted");
        res.redirect('contact');
    }catch(error){
        console.log("contact is not submitted ",error);
    }
})










app.listen(process.env.PORT,(req,res)=>{
    console.log("app is runing properly");
})

