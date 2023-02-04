const validationMiddleware = require("./validationMiddleware");
const Joi = require("joi");

const postValidator = () => {
  return validationMiddleware(
    Joi.object({
      picture: Joi.string().required(),
      caption: Joi.string(),
    })
  );
};

module.exports = postValidator;
