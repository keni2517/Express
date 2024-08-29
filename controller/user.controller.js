const User = require("../model/user.model");

const bcrypt = require('bcrypt');

// exports.addNewUser = async(req,res)=>{
//     try {
//         const {firstName,lastName,email,age,hobbies,address} = req.body;
//         let user = await User.findOne({email: email});
//         if(user)
//             return res.status(400).json({message:"User Already exist...."});
//         user = await User.create({firstName,lastName,email,age,hobbies,address})
//         user.save();
//         res.status(201).json({message:"User Added"})
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({message:"Internal Server Error"})
//     }
// };
// exports.getAllUser = async(req,res)=>{
//     try {
//         let user = await User.find();
//         res.status(200).json(user)
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({message:"Internal Server Error"})
//     }
// };
// exports.getUser = async(req,res)=>{
//     try {
//         let user = await User.findById(req.query.userId);
//         if(!user)
//             return res.status(404).json({message:"User not Found"})
//         res.status(200).json(user);
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({message:"Internal Server Error"})
//     }
// };

// exports.updateUser = async(req,res)=>{
//     try {
//         let user = await User.findById(req.query.userId);
//         if(!user){
//             return res.status(404).json({message:"User not Found....."})
//         }
//         user = await User.findByIdAndUpdate(req.query.userId,{$set:req.body},{new:true});
//         user.save();
//         res.status(202).json({user,message:'User Update Success'});
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({message:"Internal Server Error"})
//     }
// }

// exports.updateUser = async(req,res)=>{
//     try {
//         let user = await User.findById(req.query.userId);
//         if(!user){
//             return res.status(404).json({message:"User not Found....."})
//         }
//         user = await User.findByIdAndUpdate(req.query.userId,{$set:req.body},{new:true});
//         user.save();
//         res.status(202).json({user,message:'User Update Success'});
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({message:"Internal Server Error"})
//     }
// }


exports.registerUser = async(req,res)=>{
    try {
        let user = await User.findOne({email:req.body.email,isDelete:false});
    } catch (error) {
        
    }
}