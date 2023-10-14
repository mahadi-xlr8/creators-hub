const express = require("express");
const app = express.Router();
const { Job, Brand } = require("../../../database");
const jwtChecker = require("../../../middleware/jwtChecker");

app.post("/", jwtChecker, async (req, res) => {
    let brandName=''
  try {
    const brand = await Brand.findById(req.user.id);
    brandName=brand.name;
    if (req.body.brandDescription && req.body.brandSocial) {
      brand.description = req.body.brandDescription;
      brand.contactLink = req.body.brandSocial;
      brand.profileComplete = true;
      await brand.save();
    }
  } catch (err) {
    console.log(err.message)
    return res.status(400).send(err.message);
  }

  const data = req.body;
  try {
    const job = new Job({
      brandId: req.user.id,
      brand:brandName,
      title: data.title,
      description: data.description,
      followers: data.follower.name,
      country: data.country.name,
      age: data.age.name,
      gender: data.gender.name,
      paid: data.paid,
      benefit: data.benefit,
      images: data.images,
      platform: data.platform.name,
      content: data.content.name,
    });
    await job.save()
    res.status(200).send("New job posted successfully!")
  } catch (err) {
    res.status(400).send(err.message)
    console.log(err.message);
  }

});

module.exports = app;
