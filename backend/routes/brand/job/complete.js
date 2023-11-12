const express = require("express");
const app = express.Router();
const { Collaboration, Job } = require("../../../database");
const jwtChecker = require("../../../middleware/jwtChecker");
app.post("/", jwtChecker, async (req, res) => {
  try {
    const collaboration = new Collaboration(req.body);
    await collaboration.save();
    await Job.findByIdAndUpdate(req.body.jobId, { completed: true });
    res.status(200).send("Job Completed!");
  } catch (err) {
    res.status(400).send(err.message);
  }
});

module.exports = app;
