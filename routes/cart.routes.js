const express = require("express")

const cartRoute = express.Router();

const{
    addtoCart,
    getAllCarts
} = require("../controller/cart.controller");

const{verifyToken}=require('../helpers/verifytoken');

cartRoute.post("/",verifyToken,addtoCart)
cartRoute.get("/",verifyToken,getAllCarts)

module.exports = cartRoute;