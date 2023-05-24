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
const { schemas } = require("../../models/contact");

router.get("/", getAll);

router.get("/:id", isValidId, getById);

router.post("/", validateBody(schemas.addSchema), addContact);

router.put("/:id", isValidId, validateBody(schemas.addSchema), updateContact);

router.delete("/:id", isValidId, delContact);

router.patch(
  "/:id/favorite",
  isValidId,
  validateBody(schemas.updateFavoriteSchema),
  updateStatusContact
);

module.exports = router;
