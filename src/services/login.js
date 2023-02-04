const passport = require("passport");
const jwt = require("jsonwebtoken");
const { v4: uuidv4 } = require("uuid");
const loginStrategy = require("../utils/loginStrategy");
const db = require("../models");

passport.use("login", loginStrategy);

const login = async (req, res, next) => {
  const { email, password } = req.body;

  passport.authenticate("login", async (error, user) => {
    try {
      if (error || !user) {
        const error = new Error("An error occured");
        return next(error);
      }
      req.login(user, { session: false }, async (error) => {
        if (error) return next(error);

        const body = { id: user.id, email: user.email };
        const token = jwt.sign({ user: body }, "TOP_SECRET");

        await db.Profile.create({
          id: uuidv4(),
          user_id: user.id,
          full_name: user.full_name,
          private: false,
        });

        await db.JwtTokenList.create({
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
