const express = require("express");
const app = express.Router();
const jwtChecker = require("../../middleware/jwtChecker");
const { Creator } = require("../../database");

app.get("/", jwtChecker, async (req, res) => {
  if (req.user.id == req.query.id) {
    try {
      const creator = await Creator.findById(req.user.id).select(
        "-accessToken"
      );
      
      res.status(200).json(creator);
    } catch (err) {
      res.status(400).send(err.message);
    }
  } else res.status(401).send("This is not your account to edit!");
});

module.exports = app;
