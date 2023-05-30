const { Contact } = require("../../models/contact");

const { ctrWrapper } = require("../../helpers");

const getAll = async (req, res) => {
  const { _id: owner } = req.user;
  const { page = 1, limit = 10, favorite } = req.query;

  const skip = (page - 1) * limit;
  //skip-це скільки позицій нам потрібно пропустити
  const searchConditions = { owner };
  if (favorite) {
    searchConditions.favorite = favorite;
  }
  const result = await Contact.find(searchConditions, "-createdAt", {
    skip,
    limit,
  }).populate("owner", "name email");

  // "-createAt" вказує на те , яке поле не птрібно повертати, можна указати яке поле повертати додатково.
  // populate-повертає  масив зі всією інформацією, без нього прийде тільки id, якщо другим аргументом передаємо "name email" , то отримаємо id, name, email
  res.json(result);
};

module.exports = {
  getAll: ctrWrapper(getAll),
};
