const express = require("express");
const app = express.Router();
const jwtCheker = require("../../middleware/jwtChecker");
const { Brand } = require("../../database");

app.get("/", jwtCheker, async (req, res) => {
  try {
    const result = await Brand.findOne({
      _id: req.user.id,
      profileComplete: true,
    });

    res.status(200).json({ profileComplete: result ? true : false });
  } catch (err) {
    res.status(400).send(err.message);
  }
});

module.exports = app;
