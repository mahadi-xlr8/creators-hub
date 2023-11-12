const express = require("express");
const app = express.Router();
const jwtChecker = require("../../../middleware/jwtChecker");
const { Notification } = require("../../../database");
app.get("/", jwtChecker, async (req, res) => {
  try {
    const creators = await Notification.find({
      reciever: req.user.id,
      jobId: req.query.jobId,
      message: "is interested on your job post.",
    }).select("senderName senderImg _id");
    res.status(200).json(creators);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

module.exports = app;
