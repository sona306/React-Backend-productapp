const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const products=require("./Models/products")

const app = express()
app.use(cors())

app.post("/view",(req,res)=>{
res.send("hello")
})

app.post("/add",(req,res)=>{
    res.send("hello")
    })

app.post("/search",(req,res)=>{
    res.send("hello")
    })

app.post("/delete",(req,res)=>{
    res.send("hello")
    })

app.listen(8085,()=>{
    console.log("server started")
})