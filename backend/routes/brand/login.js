const express = require("express");
const app = express.Router();
const { Brand } = require("../../database");
const bcrypt = require("bcrypt");

app.post("/", async (req, res) => {
  try {
    const data = await Brand.findOne({ email: req.body.email });
    const match = await bcrypt.compare(req.body.password, data.password);
    if (match) {
      res
        .header("x-access-token", data.genToken())
        .status(200)
        .send("Logged in successfully!");
    } else {
      res.status(400).send("Incorrent password!");
    }
  } catch (err) {
    res.status(400).send("Incorrect email or password!");
  }
});

module.exports = app;
