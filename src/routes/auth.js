const passport = require("passport");
const jwtStrategy = require("../utils/jwtStrategy");
const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth");

passport.use("jwt", jwtStrategy);

const registerUserValidator = require("../middlewares/validators/registerUserValidator");
const loginUserValidator = require("../middlewares/validators/loginUserValidator");

router.post("/register", registerUserValidator(), authController.register);

router.post("/login", loginUserValidator(), authController.login);

router.post(
  "/logout",
  passport.authenticate("jwt", { session: false }),
  authController.logout
);

module.exports = router;
