const express = require("express");
const app = express.Router();
const newJob = require("./new");
const jobList = require("./jobList");
const jobById = require("./findById");
const deleteJob = require("./delete");
const interestedCreator = require("./interestedCreator");
const complete = require("./complete");

app.use("/new", newJob);
app.use("/list", jobList);
app.use("/findById", jobById);
app.use("/delete", deleteJob);
app.use("/interested-creator", interestedCreator);
app.use("/complete", complete);

module.exports = app;
