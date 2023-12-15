const { Review } = require("../database");
const express = require("express");
const app = express.Router();
const jwtChecker = require("../middleware/jwtChecker");
const today = require("../helper/getToday");
app.post("/", jwtChecker, async (req, res) => {
  try {
    const review = new Review({
      name: req.body.name,
      img: req.body.img,
      role: req.body.role,
      rating: req.body.rating,
      message: req.body.message,
      date: today(),
      profile:
        req.body.role === "creator" ? `/creator/${req.user.id}` : undefined,
    });
    await review.save();
    res.send("review submitted successfully!");
  } catch (err) {
    res.status(400).send(err.message);
  }
});

app.get("/", async (req, res) => {
  try {
    const role = req.query.role;
    const data = await Review.find({
      role,
      message: { $exists: true, $gt: "" },
    })
      .sort({ rating: 1 })
      .limit(5);

    res.status(200).json(data);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

module.exports = app;
