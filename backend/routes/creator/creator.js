const express = require("express");
const app = express.Router();
const fb = require("./fb");
const login = require("./login");
const signup = require("./signup");
const info=require("./info")
const list=require("./list")


app.use("/fb", fb);
app.use("/login", login);
app.use("/signup", signup);
app.use("/info",info)
app.use("/list",list)

module.exports = app;
