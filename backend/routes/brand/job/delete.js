const express = require("express");
const jwtChecker = require("../../../middleware/jwtChecker");
const app = express.Router();
const { Job } = require("../../../database");
const axios = require("axios");
app.delete("/", jwtChecker, async (req, res) => {
  const job = req.query.job;
  const brand = req.query.brand;
  const byteScaleAppId = "12a1ydQ";
  const byteScaleAppKey = "secret_12a1ydQAiemVmYtuBYYxsTwDJE87";
  if (req.user.id === brand) {
    try {
      const images = req.body.images;
      const imgPath = [];
      images.map((e) => {
        const parts = e.split("/uploads/");
        imgPath.push("/uploads/" + parts[1]);
      });

      await axios.delete(
        `https://api.bytescale.com/v2/accounts/${byteScaleAppId}/files/batch`,
        {
          headers: {
            Authorization: `Bearer ${byteScaleAppKey}`,
            "Content-Type": "application/json",
          },
          data: {
            files: imgPath,
          },
        }
      );
      await Job.findByIdAndDelete(job);
      res.status(200).send("job has been deleted!");
    } catch (err) {
      res.status(400).send(err.message);
    }
  } else {
    res.status(400).send("You can't delete the job!");
  }
});

module.exports = app;
