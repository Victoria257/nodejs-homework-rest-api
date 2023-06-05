const express = require("express");

const {
  login,
  register,
  getCurrent,
  logout,
  updateSubscription,
  updateAvatar,
} = require("../../controllers/user");

const { validateBody, authenticate, upload } = require("../../middlewares");
const {
  registerSchema,
  loginSchema,
  updateSubscriptionSchema,
} = require("../../models/user");
const router = express.Router();

router.post("/users/register", validateBody(registerSchema), register);
router.post("/users/login", validateBody(loginSchema), login);
router.get("/users/current", authenticate, getCurrent);
router.post("/users/logout", authenticate, logout);
router.patch(
  "/users",
  authenticate,
  validateBody(updateSubscriptionSchema),
  updateSubscription
);

router.patch(
  "/users/avatars",
  authenticate,
  upload.single("avatar"),
  updateAvatar
);

module.exports = router;
