const express = require("express");
const app = express.Router();
const fb = require("./fb");
const jwtChecker = require("../../middleware/jwtChecker");
const { Creator } = require("../../database");
const validateFacebookAccessToken = require("../../helper/validateFacebookAccessToken");

app.use("/fb", fb);

app.get("/auto", jwtChecker, async (req, res) => {
  try {
    const data = await Creator.findOne({ _id: req.user.id });
    const newData = { role: "creator", ...data["_doc"] };
    if (data.accessToken) {
      const isValid = await validateFacebookAccessToken(newData.accessToken);
      if (isValid) res.status(200).json(newData);
      else res.status(401).send("Access Token Expired");
    } else res.status(200).json(newData);
  } catch (err) {
    console.log(err.message);
    res.status(401).send("Invalid id!");
  }
});

module.exports = app;
