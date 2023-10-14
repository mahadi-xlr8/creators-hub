const express = require("express");
const app = express.Router();
const jwtChecker = require("../../../middleware/jwtChecker");
const { Job } = require("../../../database");
app.get("/", jwtChecker, async (req, res) => {
  const id = req.query.id;
  try {
    const job = await Job.findById(id).populate("brandId");
    job.brandId.accessToken = null;

    res.status(200).json(job);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

module.exports = app;
