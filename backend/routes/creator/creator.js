const express = require("express");
const app = express.Router();
const fb = require("./fb");
const login = require("./login");
const signup = require("./signup");
const info = require("./info");
const list = require("./list");
const byId = require("./byId");
const changePassword = require("./changePassword");
const updateProfile=require("./updateProfile");

app.use("/fb", fb);
app.use("/login", login);
app.use("/signup", signup);
app.use("/info", info);
app.use("/list", list);
app.use("/byId", byId);
app.use("/change-password", changePassword);
app.use("/update-profile",updateProfile)

module.exports = app;
