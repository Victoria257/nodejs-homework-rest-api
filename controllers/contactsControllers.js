const { Contact } = require("../models/contact");

const { HttpError, ctrWrapper } = require("../helpers");

const getAll = async (req, res) => {
  const result = await Contact.find();
  res.json(result);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const result = await Contact.findById(id);
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};

const addContact = async (req, res) => {
  const newContact = await Contact.create(req.body);
  res.status(201).json(newContact);
};

const updateContact = async (req, res) => {
  const { id } = req.params;
  const result = await Contact.findByIdAndUpdate(id, req.body, { new: true });
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json({ message: "Remove success", data: result });
};

const delContact = async (req, res) => {
  const { id } = req.params;
  const result = await Contact.findByIdAndDelete(id);
  if (!result) {
    throw HttpError(404, "Not found!!!");
  }
  res.json({ message: "Delete success", data: result });
};

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
  getAll: ctrWrapper(getAll),
  getById: ctrWrapper(getById),
  addContact: ctrWrapper(addContact),
  updateContact: ctrWrapper(updateContact),
  delContact: ctrWrapper(delContact),
  updateStatusContact: ctrWrapper(updateStatusContact),
};
