
const {getUser}=require("../utils/auth");


const checkAuthentication=(req,res,next)=>{
    const uid=req.cookies?.uid;
    
    
    if(!uid)return next();
    
    
    const user=getUser(uid);
    
    
    if(!user)return next();

    
    req.user=user;
    

    res.redirect('/home')
    // next();
}

module.exports=checkAuthentication;


