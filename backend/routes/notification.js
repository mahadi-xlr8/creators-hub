const express = require("express");
const app = express.Router();
const jwtChecker = require("../middleware/jwtChecker");
const { Notification } = require("../database");

app.get("/", jwtChecker, async (req, res) => {
  try {
    const notifications = await Notification.find({
      reciever: req.user.id,
    })
      .sort({ createdAt: -1 })
      .limit(10);
    res.status(200).json(notifications);
  } catch (err) {
    res.status(200).send(err.message);
  }
});
app.post("/seen", async (req, res) => {
  try {
    await Notification.findByIdAndUpdate(req.body.id, { seen: true });
    res.status(200).send("Notification updated!");
  } catch (err) {
    res.status(500).send("something went wrong!");
  }
});
module.exports = app;
