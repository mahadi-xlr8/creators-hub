import Joi from "joi";
const NewPasswordValidation = (data) => {
  const validationSchema = Joi.object({
    current_password: Joi.string().min(6).max(10).required(),
    new_password: Joi.string().min(6).max(10).required(),
    confirm_password: Joi.ref("new_password"),
  });
  return validationSchema.validate(data);
};

export default NewPasswordValidation;
