const mongoose = require('mongoose')
// require('dotenv').config()
// //console.log(proces.env);

// mongoose.connect(process.env.url,{useNewUrlParser:true});
// mongoose.connection.on('connected',(err,res)=>{
//     console.log(`mongoose is connected to node3_review`);
// })
// mongoose.connection.on('error',(err,res)=>{
//     console.log('mongoose connection error'+err);
// })

mongoose.connect(process.env.url,{useNewUrlParser:true});
const con = mongoose.connection;

con.once('open',function(){
    console.log("Data connection is succssefully");
})