const Joi = require("joi");
const validationMiddleware = require("./validationMiddleware");

const profileValidator = () => {
  return validationMiddleware(
    Joi.object({
      first_name: Joi.string().required(),
      last_name: Joi.string().required(),
      user_name: Joi.string().required(),
      gender: Joi.string().required(),
      dob: Joi.string().required(),
      profile_picture: Joi.string().required(),
    })
  );
};

module.exports = profileValidator;
