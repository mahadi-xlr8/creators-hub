import Joi from "joi";
const SignupDataValidation = (data) => {

    const validationSchema = Joi.object({
        name: Joi.string().min(3).max(100).required(),
        email: Joi.string()
          .email({ tlds: { allow: false } })
          .required()
          .max(100),
        password: Joi.string().min(6).max(10).required(),
        confirm_password: Joi.ref("password"),
        profile_photo: Joi.string().required(),
      });
      return validationSchema.validate(data);

}
 
export default SignupDataValidation;