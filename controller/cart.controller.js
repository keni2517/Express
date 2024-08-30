const Cart = require('../model/cart.model');

exports.addtoCart = async (req , res) => {
    try {
        let userId = req.user._id;
        let cart = await Cart.findOne({
            user:userId,
            productId:req.body.productId,
            isDelete:false,
        });
        if(cart){
            return res.json({message:'Already Exists.....'})
        }

        cart = await Cart.create({user:userId,...req.body});
        res.status(201).json({message:'Cart Added',cart})
    } catch (err) {
        console.log(err);
        res.status(500).json({message:"server Error"});
    }
};


exports.getAllCarts = async (req , res) => {
    let carts = await Cart.find({user:req.user._id , isDelete:false});  
    res.json(carts);
}