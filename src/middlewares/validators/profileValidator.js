const Joi = require("joi");
const validationMiddleware = require("./validationMiddleware");

const profileValidator = () => {
  return validationMiddleware(
    Joi.object({
      first_name: Joi.string()
        .trim()
        .pattern(/^[a-zA-Z]*$/)
        .max(20)
        .required(),
      last_name: Joi.string()
        .trim()
        .pattern(/^[a-zA-Z]*$/)
        .max(20)
        .required(),
      user_name: Joi.string().trim().max(20).required(),
      gender: Joi.string().valid("MALE", "FEMALE", "OTHER").required(),
      dob: Joi.date().iso().required(),
      bio: Joi.string().trim().max(500),
      profile_picture: Joi.string().trim().base64(),
    })
  );
};

module.exports = profileValidator;
