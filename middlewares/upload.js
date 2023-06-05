const multer = require("multer");
const path = require("path");

const tempDir = path.join(__dirname, "../", "temp");

const multerConfig = multer.diskStorage({
  destination: tempDir,
  //   filename: (req, file, cb) => {
  //     cb(null, file.originalname);
  //   },
  //filename пишемо коли потрібно перейменувати отриманий файл, нову назву пишемо замість file.originalname
});

const upload = multer({
  storage: multerConfig,
});

module.exports = upload;
