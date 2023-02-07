const Joi = require("joi");
const validationMiddleware = require("./validationMiddleware");

const updateProfileValidator = () => {
  return validationMiddleware(
    Joi.object({
      first_name: Joi.string()
        .trim()
        .pattern(/^[a-zA-Z]*$/)
        .max(20),
      last_name: Joi.string()
        .trim()
        .pattern(/^[a-zA-Z]*$/)
        .max(20),
      user_name: Joi.string().trim().max(20),
      gender: Joi.string().valid("MALE", "FEMALE"),
      dob: Joi.date().iso(),
      bio: Joi.string().trim().max(500),
      profile_picture: Joi.string().trim().base64(),
    })
  );
};

module.exports = updateProfileValidator;
