const Joi = require("joi");
const validationMiddleware = require("./validationMiddleware");

const passwordRegex = /^[a-zA-Z0-9]{8,16}$/;

const loginUserValidator = () => {
  return validationMiddleware(
    Joi.object({
      email: Joi.string().trim().email().required(),
      password: Joi.string().regex(passwordRegex).required(),
    })
  );
};

module.exports = loginUserValidator;
