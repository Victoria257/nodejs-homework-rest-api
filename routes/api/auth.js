const express = require("express");

const { login, register } = require("../../controllers/user");

const { validateBody } = require("../../middlewares");
const { registerSchema, loginSchema } = require("../../models/user");
const router = express.Router();

router.post("/register", validateBody(registerSchema), register);
router.post("/login", validateBody(loginSchema), login);

module.exports = router;
