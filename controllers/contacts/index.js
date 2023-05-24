const { getAll } = require("./getAll");
const { getById } = require("./getById");
const { addContact } = require("./addContact");
const { updateContact } = require("./updateContact");
const { delContact } = require("./delContact");
const { updateStatusContact } = require("./updateStatusContact");

module.exports = {
  getAll,
  getById,
  addContact,
  updateContact,
  delContact,
  updateStatusContact,
};
