const express = require("express");
const app = express.Router();
const { Job } = require("../../database");

function isEmptyObject(obj) {
  return Object.keys(obj).length === 1;
}

app.get("/", async (req, res) => {
  const page = req.query.page;
  const pageSize = 10;
  const skip = (page - 1) * pageSize;
  if (isEmptyObject(req.query)) {
    try {
      const total = await Job.find().count();
      const data = await Job.find().skip(skip).limit(pageSize);
      res.status(200).json({ data: data, total: total.toString() });
    } catch (err) {
      res.status(400).send(err.message);
    }
  } else {
    const filter = req.query;
    filter.paid = filter.paid === "false" ? false : true;
    delete filter.page;

    console.log(filter);
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
        console.log("sorted block");
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
