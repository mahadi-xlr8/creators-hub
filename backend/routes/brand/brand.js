const express = require("express");
const {Brand}=require("../../database")
const app = express.Router();
const signup = require("./signup");
const login = require("./login");
const fb = require("./fb");
const profileComplete = require("./profileComplete");
const newJob=require("./newJob")
const jobList=require("./jobList")
app.use("/signup", signup);
app.use("/login", login);
app.use("/fb", fb);
app.use("/profileComplete", profileComplete);
app.use("/newJob",newJob)
app.use("/job-list",jobList)

app.get('/names',async(req,res)=>{
    try{
        const names=await Brand.find().select("name")
        res.status(200).send(names)
    }
    catch(err){
        res.status(400).send(err.message)
    }
})

module.exports = app;
