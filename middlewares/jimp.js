const Jimp = require("jimp");

async function jimpImage(tempUpload) {
  try {
    const image = await Jimp.read(tempUpload);
    await image.cover(
      250,
      250,
      Jimp.HORIZONTAL_ALIGN_CENTER | Jimp.VERTICAL_ALIGN_MIDDLE
    );
    await image.writeAsync(tempUpload);
  } catch (err) {
    console.error(err);
  }
}

module.exports = jimpImage;
