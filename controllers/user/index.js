const { login } = require("./login-ctrl");
const { register } = require("./user");
const { getCurrent } = require("./getCurrent");
const { logout } = require("./logout-ctrl");

module.exports = {
  login,
  register,
  getCurrent,
  logout,
};
