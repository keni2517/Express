const express = require('express');

const server1 = express();

server1.get('/',(req,res)=>{
    res.send('welcome to Express');
    res.end();
})

server1.get('/login',(req,res)=>{
    res.send({msg:"welcome to Login Page"});
    res.end();
})

server1.listen(2609,()=>{
    console.log('server start at http://localhost:2609'); 
})

require("dotenv").config()
const express = require('express');
const server = express();
const morgan = require('morgan');
const mongoose = require('mongoose');
const port = process.env.PORT;
server.use(express.json());
server.use(express.urlencoded({extended: true}));
server.use(morgan("dev"));


server.get("/",(req,res)=>{
    res.send("Welcome to the Express server");
});

// Product routes
const productRoutes = require("./routes/product.routes");
server.use("/api/product",productRoutes);

// User routes
const userRoutes = require("./routes/user.routes");
server.use("/api/users",userRoutes);


server.listen(3000, () => {
    console.log('Server is running on port 3000');
  });