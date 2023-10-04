const Joi = require("joi");
const bcrypt = require("bcrypt");
module.exports = async function (req, res, next) {
  const dataSchema = Joi.object({
    name: Joi.string().min(3).max(100).required(),
    email: Joi.string()
      .email({ tlds: { allow: false } })
      .required()
      .max(100),
    password: Joi.string().min(6).max(10).required(),
    profile_photo: Joi.string().required(),
  });
  const { error } = dataSchema.validate({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    profile_photo: req.body.profile_photo,
  });
  if (error) {
    return res.status(400).send(error.details[0].message);
  } else {
    const SALT_ROUNDS = 10;
    const hash = await bcrypt.hash(req.body.password, SALT_ROUNDS);
    req.body.password = hash;
    next();
  }
};
