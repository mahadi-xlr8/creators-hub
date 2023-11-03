const express = require("express");
const { Brand } = require("../../database");
const app = express.Router();
const signup = require("./signup");
const login = require("./login");
const fb = require("./fb");
const profileComplete = require("./profileComplete");
const job = require("./job/job");

app.use("/signup", signup);
app.use("/login", login);
app.use("/fb", fb);
app.use("/profileComplete", profileComplete);
app.use("/job", job);

app.get("/names", async (req, res) => {
  try {
    const names = await Brand.find().select("name");
    res.status(200).send(names);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

module.exports = app;
