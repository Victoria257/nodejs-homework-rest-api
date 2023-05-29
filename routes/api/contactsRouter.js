const express = require("express");
const router = express.Router();

const {
  getAll,
  getById,
  addContact,
  updateContact,
  delContact,
  updateStatusContact,
} = require("../../controllers/contacts");

const { validateBody, isValidId, authenticate } = require("../../middlewares");
const { addSchema, updateFavoriteSchema } = require("../../models/contact");

router.get("/", authenticate, getAll);

router.get("/:id", authenticate, isValidId, getById);

router.post("/", authenticate, validateBody(addSchema), addContact);

router.put(
  "/:id",
  authenticate,
  isValidId,
  validateBody(addSchema),
  updateContact
);

router.delete("/:id", authenticate, isValidId, delContact);

router.patch(
  "/:id/favorite",
  isValidId,
  validateBody(updateFavoriteSchema),
  updateStatusContact
);

module.exports = router;
