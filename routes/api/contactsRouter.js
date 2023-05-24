const express = require("express");
const router = express.Router();

const controllers = require("../../controllers/contactsControllers");
const { validateBody, isValidId } = require("../../middlewares");
const { addSchema } = require("../../models/contact");

router.get("/", controllers.getAll);

router.get("/:id", isValidId, controllers.getById);

router.post("/", validateBody(addSchema), controllers.addContact);

router.put(
  "/:id",
  isValidId,
  validateBody(addSchema),
  controllers.updateContact
);

router.delete("/:id", isValidId, controllers.delContact);

router.put("/:id/favorite");

module.exports = router;
