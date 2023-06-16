const Joi = require("joi");
const { emailRegexp } = require("./user");

const verifySchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required(),
});

module.exports = verifySchema;
