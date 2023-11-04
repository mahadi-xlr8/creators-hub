const express = require("express");
const app = express.Router();
const jwtChecker = require("../middleware/jwtChecker");
const { Notification } = require("../database");

app.get("/", jwtChecker, async (req, res) => {
  try {
    const notifications = await Notification.find({ reciever: req.user.id });
    res.status(200).json(notifications);
  } catch (err) {
    res.status(200).send(err.message);
  }
});

module.exports = app;
