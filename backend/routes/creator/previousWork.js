const express = require("express");
const app = express.Router();
const { Collaboration } = require("../../database");
app.get("/", async (req, res) => {
  try {
    const data = await Collaboration.find({ creatorId: req.query.id }).sort({
      star: 1,
    });
    res.status(200).send(data);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

module.exports = app;
