const express = require("express");

const {
  login,
  register,
  getCurrent,
  logout,
  updateSubscription,
  updateAvatar,
  verifyEmail,
  resendVerifyEmail,
} = require("../../controllers/user");

const { validateBody, authenticate, upload } = require("../../middlewares");
const {
  registerSchema,
  loginSchema,
  updateSubscriptionSchema,
  verifySchema,
} = require("../../models/user");
const router = express.Router();

router.post("/users/register", validateBody(registerSchema), register);
router.get("/users/verify/:verificationCode", verifyEmail);
router.post("/users/verify", validateBody(verifySchema), resendVerifyEmail);
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
