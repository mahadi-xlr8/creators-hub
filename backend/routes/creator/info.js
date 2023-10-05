const express = require("express");
const app = express.Router();
const _ = require("lodash");
const { Creator } = require("../../database");
const jwtChecker = require("../../middleware/jwtChecker");

app.get("/", jwtChecker, async (req, res) => {
  try {
    console.log(req.query.id)
    const creator = await Creator.findById(req.query.id);
    const temp = _.omit(creator._doc, ["password", "accessToken"]);
    if (req.user.id == temp._id) temp.profile = true;
    else temp.profile = false;
    console.log(temp)
    res.status(200).send(temp);
  } catch (err) {
    res.status(404).send("404 Creator not found!");
  }
});

module.exports = app;
