const express=require("express")
const app=express.Router()
const signup=require("./signup")

app.use("/signup",signup)


module.exports=app;