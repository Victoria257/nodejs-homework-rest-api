const { Contact } = require("../../models/contact");

const { ctrWrapper, HttpError } = require("../../helpers");

const delContact = async (req, res) => {
  const { id } = req.params;
  const result = await Contact.findByIdAndDelete(id);
  if (!result) {
    throw HttpError(404, "Not found!!!");
  }
  res.json({ message: "Delete success", data: result });
};

module.exports = {
  delContact: ctrWrapper(delContact),
};
