const { login } = require("./login-ctrl");
const { register } = require("./register-ctrl");
const { getCurrent } = require("./getCurrent");
const { logout } = require("./logout-ctrl");
const { updateSubscription } = require("./updateSubscription-ctrl");
const { updateAvatar } = require("./updateAvatar-ctrl");

module.exports = {
  login,
  register,
  getCurrent,
  logout,
  updateSubscription,
  updateAvatar,
};
