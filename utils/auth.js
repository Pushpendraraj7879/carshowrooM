
const jwt =require("jsonwebtoken");

const setUser=(data,secret)=>{
        return jwt.sign(data,secret);
}

const getUser=(token)=>{
    if(!token)return null;
    // console.log(token);
    try{
   return jwt.verify(token,process.env.SECRET_KEY)
    }catch(error){
        return null;
    }

}

module.exports={setUser,getUser};

