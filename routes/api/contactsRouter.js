const express = require("express");
const router = express.Router();

const controllers = require("../../controllers/contactsControllers");
const { validateBody, isValidId } = require("../../middlewares");
const { schemas } = require("../../models/contact");

router.get("/", controllers.getAll);

router.get("/:id", isValidId, controllers.getById);

router.post("/", validateBody(schemas.addSchema), controllers.addContact);

router.put(
  "/:id",
  isValidId,
  validateBody(schemas.addSchema),
  controllers.updateContact
);

router.delete("/:id", isValidId, controllers.delContact);

router.patch(
  "/:id/favorite",
  isValidId,
  validateBody(schemas.updateFavoriteSchema),
  controllers.updateStatusContact
);

module.exports = router;
