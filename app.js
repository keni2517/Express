// const express = require('express');

// const app = express();

// const morgan = require('morgan');

// const product = require('./product.json');

// app.use(express.json());
// app.use(express.urlencoded({extended:true}));
// app.use(morgan('dev'))

// app.get("/",(req,res)=>{
//     res.send("Welcome To Express Server");
// })

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







const express = require('express');

const app = express();

const morgan = require('morgan');

const user = require('./user.json');

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(morgan('dev'))

app.get("/",(req,res)=>{
    res.send("Welcome To Express Server");
})

app.post("/user",(req,res)=>{
    product.push(req.body)
    res.json({product:req.body,message:"Product Added Successs"});
});

app.get("/user",(req,res)=>{
    res.json(product);
})

app.get("/product/:id",(req,res)=>{
    let id = +req.params.id;
    let item= product.find((product)=>product.id===id);
    res.json(item);
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });