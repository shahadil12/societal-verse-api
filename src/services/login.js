const passport = require("passport");
const jwt = require("jsonwebtoken");
const { v4: uuidv4 } = require("uuid");
const loginStrategy = require("../utils/loginStrategy");
const db = require("../models");
require("dotenv").config();

passport.use("login", loginStrategy);

const login = async (req, res, next) => {
  const { email, password } = req.body;

  passport.authenticate("login", async (error, user) => {
    try {
      if (error) {
        return res.json({ error: "An error occured" });
      }

      if (!user) {
        return res.json({ error: "User not found" });
      }
      req.login(user, { session: false }, async (error) => {
        if (error) return next(error);

        const body = { id: user.id, email: user.email };
        const token = jwt.sign({ user: body }, process.env.JWT_SECRET);

        await db.JwtTokenList.create({
          id: uuidv4(),
          user_id: user.id,
          token: token,
        });

        return res.json({ token });
      });
    } catch (error) {
      return next(error);
    }
  })(req, res, next);
};

module.exports = { login };
