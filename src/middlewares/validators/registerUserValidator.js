const Joi = require("joi");
const validationMiddleware = require("./validationMiddleware");

const passwordRegex = /^[a-zA-Z0-9]{8,16}$/;

function registerUserValidator() {
  return validationMiddleware(
    Joi.object({
      full_name: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().regex(passwordRegex).required(),
    })
  );
}

module.exports = registerUserValidator;
