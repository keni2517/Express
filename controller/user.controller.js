const User = require("../model/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Registration
exports.registerUser = async (req, res) => {
    try {
        let user = await User.findOne({email:req.body.email,isDelete:false});
        if(user){
            return res.status(400).json({message:"User already exists"});
        }
        let hashPassword = await bcrypt.hash(req.body.password,10);
        // console.log(hashPassword);
        user = await User.create({...req.body,password:hashPassword});
        user.save();
        res.status(201).json({user,message:"User Registration successful"});
    } catch(error) {
        console.log(error);
        res.status(500).json({message:"Internal Server Error"});
    }
};

// Login
exports.loginUser = async (req, res) => {
    try {
        let user = await User.findOne({email:req.body.email,isDelete:false});
        if(!user){
            return res.status(404).json({message:"User not found"});
        }
        let matchPassword = await bcrypt.compare(req.body.password,user.password);
        // console.log(matchPassword);  
        if(!matchPassword){
            return res.status(400).json({message:"Email or Password not match"})
        }
        let token = await jwt.sign({userId:user._id},process.env.JWT_SECRET);
        res.status(201).json({user,message:"Login successful",token});
    } catch(error) {
        console.log(error);
        res.status(500).json({message:"Internal Server Error"});
    }
};

exports.userProfile = async(req,res)=>{
    try {
        res.status(200).json(req.user);
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Internal Server Error"});
    }
}

exports.updateProfile= async (req,res) => {
    try {
        let user = req.user;
        user = await User.findByIdAndUpdate(
            user._id,
            {$set:req.body},
            {new:true}
        );
        res.status(202).json({user,message:"User update success"});
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Internal Server Error"});
    }
}

exports.changePassword = async (req, res) => {
    try {
        const { currentPassword, newPassword, confirmPassword } = req.body;
        const user = await User.findById(req.user._id);
        const isMatch = await bcrypt.compare(currentPassword, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Current password is incorrect" });
        }
        if (newPassword !== confirmPassword) {
            return res.status(400).json({ message: "New password and confirm password is not match" });
        }
        const newHashedPassword = await bcrypt.hash(newPassword, 10);
        user.password = newHashedPassword;
        user.save();
        res.status(200).json({ message: "Password updated successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};


exports.deleteUser= async (req,res) => {
    try {
        let user = req.user;
        user = await User.findByIdAndUpdate(
            user._id,
            {isDelete: true},
            {new:true}
        );
        res.status(202).json({user,message:"User update success"});
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Internal Server Error"});
    }
}