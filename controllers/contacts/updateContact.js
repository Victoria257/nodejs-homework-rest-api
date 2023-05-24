const { Contact } = require("../../models/contact/schemas");

const { ctrWrapper, HttpError } = require("../../helpers");

const updateContact = async (req, res) => {
  const { id } = req.params;
  const result = await Contact.findByIdAndUpdate(id, req.body, { new: true });
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json({ message: "Remove success", data: result });
};

module.exports = {
  updateContact: ctrWrapper(updateContact),
};
