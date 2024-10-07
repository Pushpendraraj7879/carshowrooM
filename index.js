const express=require("express");
const app=express();
require("dotenv").config();
const path=require("path");

app.use(express.json());



app.use(express.urlencoded({ extended: true }));
app.set('view engine','ejs');
app.set('views',path.join(__dirname,"src","views"));
app.use(express.static(path.join(__dirname,"public")));

app.get('/signup',(req,res)=>{
    res.render("");
})





app.listen(process.env.PORT,(req,res)=>{
    console.log("app is runing properly");
})

