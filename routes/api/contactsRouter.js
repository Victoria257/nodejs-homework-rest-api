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

const { validateBody, isValidId } = require("../../middlewares");
const {
  addSchema,
  updateFavoriteSchema,
} = require("../../models/contact/schemas");

router.get("/", getAll);

router.get("/:id", isValidId, getById);

router.post("/", validateBody(addSchema), addContact);

router.put("/:id", isValidId, validateBody(addSchema), updateContact);

router.delete("/:id", isValidId, delContact);

router.patch(
  "/:id/favorite",
  isValidId,
  validateBody(updateFavoriteSchema),
  updateStatusContact
);

module.exports = router;
