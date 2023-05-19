// const express = require("express");
// const router = express.Router();
const contacts = require("../models/contacts");

const { HttpError } = require("../helpers");
const { addSchema } = require("../helpers");

const getAll = async (req, res, next) => {
  try {
    const result = await contacts.listContact();
    res.json(result);
  } catch (error) {
    next(error);
  }
};

const getById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await contacts.getById(id);
    if (!result) {
      throw HttpError(404, "Not found");
    }
    res.json(result);
  } catch (error) {
    next(error);
  }
};

const addContact = async (req, res, next) => {
  try {
    const { error } = addSchema.validate(req.body);
    if (error) {
      throw HttpError(404, error.message);
    }
    const newContact = await contacts.addContact(req.body);
    res.status(201).json(newContact);
  } catch (error) {
    next(error);
  }
};

const updateContact = async (req, res, next) => {
  try {
    const { error } = addSchema.validate(req.body);
    if (error) {
      throw HttpError(400, error.message);
    }
    const { id } = req.params;
    const result = contacts.updateContact(id, req.body);
    if (!result) {
      throw HttpError(404, "Not found");
    }
    res.json({ message: "Remove success" });
  } catch (error) {
    next(error);
  }
};

const delContact = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = contacts.removeContact(id);
    if (!result) {
      throw HttpError(404, "Not found");
    }
    res.json({ message: "Delete success" });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAll,
  getById,
  addContact,
  updateContact,
  delContact,
};
