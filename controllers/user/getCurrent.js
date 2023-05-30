const { ctrWrapper } = require("../../helpers");

const getCurrent = async (req, res) => {
  const { subscription, email } = req.user;
  res.json({
    email,
    subscription,
  });
};

module.exports = {
  getCurrent: ctrWrapper(getCurrent),
};
// в ctrWrapper огортати не обов'язково, просто робимо по аналогіїї з іншими для універсальності
