const Joi = require("joi");
const validationMiddleware = require("./validationMiddleware");

const passwordRegex = /^.{8,16}$/;

const loginUserValidator = () => {
  return validationMiddleware(
    Joi.object({
      email: Joi.string().trim().email().required(),
      password: Joi.string().regex(passwordRegex).required(),
    })
  );
};

module.exports = loginUserValidator;
