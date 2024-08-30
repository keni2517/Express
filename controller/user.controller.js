const users = require("../user.json");

exports.addNewUser = (req,res)=>{
        console.log(req.body);
        users.push(req.body);
        res.json({user:req.body,message:"User Add successfully"});
    }

exports.getAllUser = (req,res)=>{
        res.json(users);
}

exports.getUser = (req,res)=>{
        let id = +req.params.id;
        let item = users.find((user) => user.id === id);
        res.json(item);
    }

exports.replaceUser = (req,res)=>{
        let id = +req.params.id;
        let userIndex = users.findIndex((user) => user.id === id);
        // console.log(productIndex);
        users.splice(userIndex, 1,{...req.body});
        res.json({message:"User Replace Success"})
    }

exports.updateUser = (req,res)=>{
        let id = +req.params.id;
        let userIndex = users.findIndex((user) => user.id === id);
        // console.log(productIndex);
        const user = users[userIndex];
        users.splice(userIndex, 1,{...user,...req.body});
        res.json({message:"User Update Success"})
    }

exports.deleteUser = (req,res)=>{
        let id = +req.params.id;
        let userIndex = users.findIndex((user) => user.id === id);
        const user = users[userIndex];
        users.splice(userIndex, 1);
        res.json({user,message:"Product Delete Success"})
    }