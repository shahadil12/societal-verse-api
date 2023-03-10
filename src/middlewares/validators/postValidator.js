const validationMiddleware = require("./validationMiddleware");
const Joi = require("joi");

const postValidator = () => {
  return validationMiddleware(
    Joi.object({
      picture: Joi.string().trim().base64().required(),
      caption: Joi.string().trim(),
    })
  );
};

module.exports = postValidator;
