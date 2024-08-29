const express = require('express');

const {addNewUser}=require('../controller/user.controller');

const userRoute = express.Router();

userRoute.post("/",addNewUser);

module.exports = userRoute;