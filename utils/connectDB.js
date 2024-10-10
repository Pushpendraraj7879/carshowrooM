const mongoose=require("mongoose");
const User=require("../modules/User");



async function connectDB(){
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log("database is successful connected")
    }catch(error){
        console.log("error in database",error);
    }
}

module.exports=connectDB;
