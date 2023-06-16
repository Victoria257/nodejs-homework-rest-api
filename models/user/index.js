const loginSchema = require("./loginSchema");
const registerSchema = require("./registerSchema");
const { User } = require("./user");
const updateSubscriptionSchema = require("./updateSubscriptionSchema");
const verifySchema = require("./verifySchema");

module.exports = {
  loginSchema,
  registerSchema,
  User,
  updateSubscriptionSchema,
  verifySchema,
};
