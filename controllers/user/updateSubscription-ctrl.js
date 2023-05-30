const { ctrWrapper } = require("../../helpers");
const { User } = require("../../models/user");

const updateSubscription = async (req, res) => {
  const { subscription } = req.body;
  const updatedUser = await User.findByIdAndUpdate(
    req.user._id,
    { subscription },
    { new: true }
  );
  res.status(201).json({
    email: updatedUser.email,
    subscription,
  });
};

module.exports = {
  updateSubscription: ctrWrapper(updateSubscription),
};
