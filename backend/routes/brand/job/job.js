const express=require("express")
const app=express.Router()
const newJob = require("./new");
const jobList = require("./jobList");
const jobById = require("./findById");
const deleteJob=require("./delete")

app.use('/new',newJob)
app.use("/list",jobList)
app.use("/findById",jobById)
app.use("/delete",deleteJob)


module.exports=app;