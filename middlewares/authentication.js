
const {getUser}=require("../utils/auth");


const checkAuthentication=(req,res,next)=>{
    const uid=req.cookies?.uid;
    

    if(!uid)return next();

    const user=getUser(uid);
    

    if(!user)return next();

    // res.send("you are already logged in");
    req.user=user;

    res.redirect('/home')

    next();
}

module.exports=checkAuthentication;


// const checkAuthentication = (req, res, next) => {
//     const uid = req.cookies?.uid;

//     if (!uid) {
//         return next(); // Pass control if no uid is found
//     }

//     try {
//         const user = getUser(uid);

//         if (!user) {
//             return next(); // User not found, pass control
//         }

//         req.user = user; // Attach user to request
//         res.locals.isAuthenticated = true; // Optional: set flag for views
//     } catch (error) {
//         console.error('Error retrieving user:', error);
//         return res.status(500).send('Internal Server Error'); // Handle error
//     }

//     return next(); // Pass control to the next middleware or route handler
// };

// // Export the middleware
// module.exports = checkAuthentication;
