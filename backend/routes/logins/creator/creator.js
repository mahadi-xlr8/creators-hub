const express = require("express");
const signup = require("./signup");
const fb=require("./fb")
const app = express.Router();

app.use("/signup", signup);
app.use("/fb",fb)

module.exports = app;
