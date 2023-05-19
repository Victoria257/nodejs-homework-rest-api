const contacts = require("../models/contacts");

const { HttpError, ctrWrapper } = require("../helpers");

const getAll = async (req, res) => {
  const result = await contacts.listContact();
  res.json(result);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const result = await contacts.getById(id);
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};

const addContact = async (req, res) => {
  const newContact = await contacts.addContact(req.body);
  res.status(201).json(newContact);
};

const updateContact = async (req, res) => {
  const { id } = req.params;
  const result = await contacts.updateContact(id, req.body);
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json({ message: "Remove success" });
};

const delContact = async (req, res) => {
  const { id } = req.params;
  const result = await contacts.removeContact(id);
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json({ message: "Delete success" });
};

module.exports = {
  getAll: ctrWrapper(getAll),
  getById: ctrWrapper(getById),
  addContact: ctrWrapper(addContact),
  updateContact: ctrWrapper(updateContact),
  delContact: ctrWrapper(delContact),
};
