const express=require("express")
const app=express.Router()
const signup=require("./signup")
const login=require("./login")

app.use("/signup",signup)
app.use("/login",login)


module.exports=app;