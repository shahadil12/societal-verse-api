const validationMiddleware = require("./validationMiddleware");
const Joi = require("joi");

const updatePostValidator = () => {
  return validationMiddleware(
    Joi.object({
      picture: Joi.string().trim().base64(),
      caption: Joi.string().trim(),
    })
  );
};

module.exports = updatePostValidator;
