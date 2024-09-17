const express = require("express");

const app = express()
app.use("/test",(req,res)=>{
res.send("this is test route")
})
app.use("/test",(req,res)=>{
    res.send("this is test route")
    })
    app.use("/hello",(req,res)=>{
        res.send("this is hello route")
        })
app.listen(3000,()=>{
    console.log("server is listening at 3000")
})