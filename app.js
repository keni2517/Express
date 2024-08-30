// const express = require('express');
// const app = express();
// const morgan = require('morgan');
// const productRoutes = require('./routes/product.routes')

// app.use(express.json());
// app.use(express.urlencoded({extended:true}));
// app.use(morgan('dev'))

// app.get("/",(req,res)=>{
//     res.send("Welcome To Express Server");
// });

// app.post("/product",(req,res)=>{
//     product.push(req.body)
//     res.json({product:req.body,message:"Product Added Successs"});
// });

// app.get("/product",(req,res)=>{
//     res.json(product);
// })

// app.get("/product/:id",(req,res)=>{
//     let id = +req.params.id;
//     let item= product.find((product)=>product.id===id);
//     res.json(item);
// })

// //repalce-data

// app.put("/product/:id",(req,res)=>{
//     let id = +req.params.id;
//     let productIndex= product.findIndex((product)=>product.id===id);
//     product.splice(productIndex,1,{...req.body});
//     res.json({message:"Product Replace Success"});
// })


// //update data 

// app.patch("/product/:id",(req,res)=>{
//     let id = +req.params.id;
//     let productIndex= product.findIndex((product)=>product.id===id);
//     const product1=product[productIndex];
//     product.splice(productIndex,1,{...product1,...req.body});
//     res.json({message:"Product Update Success"});
// });


// //delete

// app.delete("/product/:id",(req,res)=>{
//     let id = +req.params.id;
//     let productIndex= product.findIndex((product)=>product.id===id);
//     const product1=product[productIndex];
//     product.splice(productIndex,1);
//     res.json({message:"Product Delete Success"});
// });







// const express = require('express');

// const app = express();

// const morgan = require('morgan');

// const user = require('./user.json');

// app.use(express.json());
// app.use(express.urlencoded({extended:true}));
// app.use(morgan('dev'))

// app.get("/",(req,res)=>{
//     res.send("Welcome To Express Server");
// })

// app.post("/user",(req,res)=>{
//     user.push(req.body)
//     res.json({user:req.body,message:"Product Added Successs"});
// });

// app.get("/user",(req,res)=>{
//     res.json(user);
// })

// app.get("/user/:id",(req,res)=>{
//     let id = +req.params.id;
//     let item= user.find((user)=>user.id===id);
//     res.json(item);
// })


// app.put("/user/:id",(req,res)=>{
//     let id = +req.params.id;
//     let userIndex= user.findIndex((user)=>user.id===id);
//     user.splice(userIndex,1,{...req.body});
//     res.json({message:"User Replace Success"});
// })


// //update data 

// app.patch("/user/:id",(req,res)=>{
//     let id = +req.params.id;
//     let userIndex= user.findIndex((user)=>user.id===id);
//     const product1=user[userIndex];
//     user.splice(userIndex,1,{...product1,...req.body});
//     res.json({message:"Product Update Success"});
// });


// //delete

// app.patch("/user/:id",(req,res)=>{
//     let id = +req.params.id;
//     let userIndex= user.findIndex((user)=>user.id===id);
//     const product1=user[userIndex];
//     user.splice(userIndex,1);
//     res.json({message:"Product Update Success"});
// });



// app.listen(3000, () => {
//     console.log('Server is running on port 3000');
//   });

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