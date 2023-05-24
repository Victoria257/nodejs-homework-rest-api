const { Contact } = require("../../models/contact/schemas");

const { ctrWrapper, HttpError } = require("../../helpers");

const getById = async (req, res) => {
  const { id } = req.params;
  const result = await Contact.findById(id);
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};

module.exports = {
  getById: ctrWrapper(getById),
};