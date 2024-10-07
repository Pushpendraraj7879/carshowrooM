
const jwt =require("jsonwebtoken");

const setUser=(data,secret)=>{
        return jwt.sign(data,secret);
}

const getUser=(token,secret)=>{
    if(!token)return null;
    try{
   return jwt.verify(token,secret)
    }catch(error){
        return null;
    }

}

module.exports={setUser,getUser};

