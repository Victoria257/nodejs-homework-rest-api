const { Contact } = require("../../models/contact/schemas");

const { ctrWrapper } = require("../../helpers");

const getAll = async (req, res) => {
  const result = await Contact.find();
  res.json(result);
};

module.exports = {
  getAll: ctrWrapper(getAll),
};