const express = require("express");
const app = express.Router();
const { Job } = require("../../../database");

app.get("/", async (req, res) => {
  try {
    const result = await Job.findById(req.query.id).select(
      "title platform benefit paid content"
    );
    res.status(200).json(result);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

module.exports = app;
