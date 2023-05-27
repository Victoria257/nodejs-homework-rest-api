const Joi = require("joi");

const { emailRegexp } = require("./user");

const registerSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().pattern(emailRegexp).required(),
  password: Joi.string().min(6).required(),
});

module.exports = registerSchema;
