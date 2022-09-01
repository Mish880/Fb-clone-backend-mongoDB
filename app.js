const express = require('express')
const mongoose = require('mongoose')
const account = require('./Routes/account')
const app = express()
const port = 4000



app.use('/account',account)

app.listen(port,()=>{
    console.log(`example listen on port ${port}`)
});

const url = 'mongodb://localhost/fbdbase'
mongoose.connect(uel,{useNewUrlPasser:true})
const con = mongoose.connection

con.on("open",() =>{
   console.log("mongodb connected");
});