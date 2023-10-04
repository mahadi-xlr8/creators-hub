const express=require("express")
const app=express.Router()
const fb=require("./fb")


app.use("/fb",fb)


module.exports=app;