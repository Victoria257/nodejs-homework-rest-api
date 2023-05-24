const { Contact } = require("../../models/contact/schemas");

const { ctrWrapper, HttpError } = require("../../helpers");

const updateStatusContact = async (req, res) => {
  if (Object.keys(req.body).length === 0) {
    throw HttpError(400, "missing field favorite");
  }
  const { id } = req.params;
  const result = await Contact.findByIdAndUpdate(id, req.body, { new: true });
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json({ message: "Remove success", data: result });
};

module.exports = {
  updateStatusContact: ctrWrapper(updateStatusContact),
};
