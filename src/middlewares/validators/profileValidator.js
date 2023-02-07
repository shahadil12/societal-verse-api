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
      gender: Joi.string().valid("MALE", "FEMALE").required(),
      dob: Joi.date().iso().required(),
      bio: Joi.string().trim().max(500).required(),
      profile_picture: Joi.string().trim().base64().required(),
    })
  );
};

module.exports = profileValidator;
