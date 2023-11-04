const express = require("express");
const app = express.Router();
const { Job, Notification } = require("../../../database");

function isEmptyObject(obj) {
  return Object.keys(obj).length === 1;
}

app.get("/", async (req, res) => {
  const userId = req.query.userId;
  delete req.query.userId;
  const page = req.query.page;
  const pageSize = 10;
  const skip = (page - 1) * pageSize;
  if (isEmptyObject(req.query)) {
    try {
      const total = await Job.find().count();
      const data = await Job.find().skip(skip).limit(pageSize);
      // adding the intarest option explicitly for logged in users

      if (userId) {
        const interestedJobs = await Notification.find({
          sender: userId,
        }).select("jobId");
        for (let interested of interestedJobs) {
          for (let job = 0; job < data.length; job++) {
            if (interested.jobId.toString() == data[job]._id.toString()) {
              data[job] = { ...data[job]._doc, interested: true };
            } else data[job] = { ...data[job]._doc, interested: false };
          }
        }
        return res.status(200).json({ data: data, total: total.toString() });
      }
      // if the user is not logged in sending the data as it is.

      res.status(200).json({ data: data, total: total.toString() });
    } catch (err) {
      res.status(400).send(err.message);
    }
  } 
  // if client give filter data
  else {
    const filter = req.query;
    filter.paid = filter.paid === "false" ? false : true;
    delete filter.page;

    let validFilter = {};
    let sort = false;
    let sortValue = -1;
    for (let i in filter) {
      if (filter[i]) {
        if (i == "age") {
          validFilter.age = { $gte: parseInt(filter[i]) };
        } else if (i == "order") {
          if (filter[i] == "Latest") {
            sort = true;
          } else if (filter[i] == "Oldest") {
            sort = true;
            sortValue = 1;
          } else {
            validFilter["completed"] = true;
          }
        } else {
          validFilter[i] = filter[i];
        }
      }
    }
    try {
      if (!sort) {
        const result = await Job.find(validFilter).skip(skip).limit(pageSize);
        res
          .status(200)
          .json({ data: result, total: Object.keys(result).length });
      } else {
        const result = await Job.find()
          .sort({
            createdAt: sortValue,
          })
          .skip(skip)
          .limit(pageSize);
        res
          .status(200)
          .json({ data: result, total: Object.keys(result).length });
      }
    } catch (err) {
      res.status(400).send(err.message);
    }
  }
});

module.exports = app;
