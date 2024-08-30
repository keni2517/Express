const jwt = require("jsonwebtoken");
const User = require("../model/user.model");

exports.verifyToken = async (req, res, next) => {
    try {
        let authorization = req.headers["authorization"];
        if(!authorization){
            return res.json({message:"Not Authorized"});
        }
        let token = authorization.split(" ")[1];
       let payload = await jwt.verify(token,process.env.JWT_SECRET);
       if(!payload){
        return res.status(401).json({message:"Unauthorized"});
       } 
       let user = await User.findOne({_id: payload.userId,isDelete:false});
    //    console.log(user);
    if(!user){
        return res.status(404).json({message:"User not found"});
    }
     req.user=user;
     next();  
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Server Error"});
    }
}