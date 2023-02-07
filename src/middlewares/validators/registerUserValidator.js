const Joi = require("joi");
const validationMiddleware = require("./validationMiddleware");

const passwordRegex = /^[a-zA-Z0-9]{8,16}$/;

function registerUserValidator() {
  return validationMiddleware(
    Joi.object({
      full_name: Joi.string()
        .trim()
        .pattern(/^[a-zA-Z ]*$/)
        .required(),
      email: Joi.string().email().trim().required(),
      password: Joi.string().trim().regex(passwordRegex).required(),
    })
  );
}

module.exports = registerUserValidator;
