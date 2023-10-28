const express = require("express");
const jwtChecker = require("../../middleware/jwtChecker");
const app = express.Router();
const { Creator } = require("../../database");

app.post("/", jwtChecker, async (req, res) => {
  console.log(req.body.creator);
  try {
    const creator = await Creator.findByIdAndUpdate(
      req.user.id,
      req.body.creator,
      { new: true }
    );
    console.log(creator)
    res.status(200).send("Profile updated successfully!");
  } catch (err) {
    res.status(400).send(err.message);
  }
});

module.exports = app;
