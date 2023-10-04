const express = require("express");
const app = express.Router();
const fb = require("./creator/fb");
const creator=require("./creator/creator")


app.use("/creator",creator)
app.use("/fb", fb);



module.exports = app;
