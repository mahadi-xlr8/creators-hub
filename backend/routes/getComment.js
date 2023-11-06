const express = require("express");
const { Comment } = require("../database");
const app = express.Router();

app.get("/", async (req, res) => {
  const jobId = req.query.jobId;
  try {
    const comments = await Comment.find({ jobId: jobId });
    res.status(200).json(comments);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

module.exports = app;
