const express = require("express");
const app = express.Router();
const { Creator } = require("../../database");

app.get("/", async (req, res) => {
  try {
    const data = req.query;
    const creator = await Creator.find({ name: new RegExp(data.value, "i") });

    res.json(creator);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

module.exports = app;
