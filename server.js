// const express = require('express');

// const server1 = express();

// server1.get('/',(req,res)=>{
//     res.send('welcome to Express');
//     res.end();
// })

// server1.get('/login',(req,res)=>{
//     res.send({msg:"welcome to Login Page"});
//     res.end();
// })

// server1.listen(2609,()=>{
//     console.log('server start at http://localhost:2609'); 
// })

const express = require('express');
const app = express();

// Set some application-level settings
app.set('name', 'My Express App');

// Middleware to print app settings
app.use((req, res, next) => {
  console.log(`App name is: ${req.app.get('name')}`);
  next();
});

// Route handler
app.get('/', (req, res) => {
  res.send('Welcome to ' + req.app.get('name'));
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
