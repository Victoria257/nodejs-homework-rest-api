const express = require("express");
const router = express.Router();

const controllers = require("../../controllers/contactsControllers");
const validateBody = require("../../middlewares/validateBody");
const addSchema = require("../../schemas/contactsSchema");

router.get("/", controllers.getAll);

router.get("/:id", controllers.getById);

router.post("/", validateBody(addSchema), controllers.addContact);

router.put("/:id", validateBody(addSchema), controllers.updateContact);

router.delete("/:id", controllers.delContact);

module.exports = router;
