const express=require("express")
const app=express.Router()
const signup=require("./signup")
const login=require("./login")
const fb=require("./fb")


app.use("/signup",signup)
app.use("/login",login)
app.use("/fb",fb)


module.exports=app;