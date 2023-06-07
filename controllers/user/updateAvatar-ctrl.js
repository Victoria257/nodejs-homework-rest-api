const path = require("path");
const fs = require("fs/promises");
const { ctrWrapper } = require("../../helpers");
const { User } = require("../../models/user");
const { jimpImage } = require("../../middlewares");

const avatarsDir = path.join(__dirname, "../", "../", "public", "avatars");
// console.log(avatarsDir);
const updateAvatar = async (req, res) => {
  const { _id } = req.user;
  const { path: tempUpload, originalname } = req.file;
  await jimpImage(tempUpload);

  const filename = `${_id}_${originalname}`;
  const resultUpload = path.join(avatarsDir, filename);
  await fs.rename(tempUpload, resultUpload);
  const avatarURL = path.join("avatars", filename);
  await User.findByIdAndUpdate(_id, { avatarURL });

  res.json({
    avatarURL,
  });
};

module.exports = {
  updateAvatar: ctrWrapper(updateAvatar),
};
