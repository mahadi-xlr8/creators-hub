const express = require("express");
const bcrypt = require("bcrypt");
const jwtChecker = require("../../middleware/jwtChecker");
const passwordValidation = require("../../middleware/newPasswordValidate");
const app = express.Router();
const { Creator } = require("../../database");
app.post("/", jwtChecker, passwordValidation, async (req, res) => {
  try {
    const data = await Creator.findById(req.user.id);
    const match =  await bcrypt.compare(req.body.currentPassword, data.password);
    if (match) {
      data.password = req.body.newPassword;
      await data.save();
      res.status(200).send("Password changed successfully!");
    } else res.status(400).send("Current password is wrong!");
  } catch (err) {
    res.status(400).send(err.message);
  }
});

module.exports = app;
