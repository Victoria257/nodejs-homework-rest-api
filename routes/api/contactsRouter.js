const express = require("express");
const router = express.Router();

const controllers = require("../../controllers/contactsControllers");

router.get("/", controllers.getAll);

router.get("/:id", controllers.getById);

router.post("/", controllers.addContact);

router.put("/:id", controllers.updateContact);

router.delete("/:id", controllers.delContact);

module.exports = router;
