const express = require('express')
const app = express()
require('dotenv').config()
require('./models/config');
const userRoutes = require('./routes/userRoutes')
app.use(express.json())

app.use('/',userRoutes)
// app.listen(6000,(req,res)=>{
// console.log("server is run");
// })
app.listen(process.env.port,()=>{
    console.log(`server is run ${process.env.port}`);
})