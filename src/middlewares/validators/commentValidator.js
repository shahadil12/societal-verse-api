const Joi = require("joi");
const validationMiddleware = require("./validationMiddleware");

const commentValidator = () => {
  return validationMiddleware(
    Joi.object({
      comment: Joi.string().required(),
    })
  );
};

module.exports = commentValidator;
