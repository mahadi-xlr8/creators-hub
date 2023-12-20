const express = require("express");
const app = express.Router();
const { Creator } = require("../../database");

app.get("/", async (req, res) => {
  const page = req.query.page;
  const pageSize = 9;
  const skip = (page - 1) * pageSize;
  try {
    const total = await Creator.find({ profileComplete: true }).count();
    const data = await Creator.find({ profileComplete: true })
      .skip(skip)
      .limit(pageSize);
    res.status(200).json({ data: data, total: total.toString() });
  } catch (err) {
    res.status(400).send(err.message);
  }
});

module.exports = app;
