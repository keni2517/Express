const express = require("express")

const cartRoute = express.Router();

const{
    addtoCart,
    getAllCarts,
    updatecart
} = require("../controller/cart.controller");

const{verifyToken}=require('../helpers/verifytoken');

cartRoute.post("/",verifyToken,addtoCart)
cartRoute.get("/",verifyToken,getAllCarts)
cartRoute.put("/",verifyToken,updatecart)

module.exports = cartRoute;