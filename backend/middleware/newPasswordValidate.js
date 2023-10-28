const Joi = require("joi");
const bcrypt = require("bcrypt");
module.exports = async (req, res, next) => {
  const validationSchema = Joi.object({
    current_password: Joi.string().min(6).max(10).required(),
    new_password: Joi.string().min(6).max(10).required(),
    confirm_password: Joi.ref("new_password"),
  });
  const { error } = validationSchema.validate({
    current_password: req.body.currentPassword,
    new_password: req.body.newPassword,
    confirm_password: req.body.confirmPassword,
  });
  if (error) {
    return res.status(400).send(error.details[0].message);
  }
  const SALT_ROUNDS = 10;
  const hash = await bcrypt.hash(req.body.newPassword, SALT_ROUNDS);
  req.body.newPassword = hash;
  next();
};
