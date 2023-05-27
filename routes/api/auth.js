const express = require("express");

const controller = require("../../controllers/user/user");

const { validateBody } = require("../../middlewares");
const { registerSchema } = require("../../models/user");
const router = express.Router();

router.post("/register", validateBody(registerSchema), controller.register);

module.exports = router;
