const express = require("express");
const app = express.Router();
const fb = require("./fb");
const login = require("./login");
const signup = require("./signup");

app.use("/fb", fb);
app.use("/login", login);
app.use("/signup", signup);

module.exports = app;
