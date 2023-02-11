const passport = require("passport");
const crypto = require("crypto");
const { v4: uuidv4 } = require("uuid");
const jwt = require("jsonwebtoken");
const loginStrategy = require("../utils/loginStrategy");
const db = require("../models");

require("dotenv").config();
passport.use("login", loginStrategy);

const register = async (req) => {
  try {
    const { email, password, full_name } = req.body;
    const existingUser = await db.User.findOne({ where: { email } });
    if (existingUser) {
      return {
        success: false,
        error: "this email address is not available",
      };
    }

    const salt = crypto.randomBytes(16).toString("hex");
    const hash = crypto
      .pbkdf2Sync(password, salt, 1000, 64, "sha512")
      .toString("hex");

    const user = await db.User.create({
      id: uuidv4(),
      full_name,
      email,
      hash,
      salt,
    });

    return { success: true, token: await generateToken(req, user) };
  } catch (error) {
    console.log({ error });
    return { success: false, error };
  }
};

const login = async (req, res, next) => {
  passport.authenticate("login", async (error, user) => {
    try {
      if (error) {
        return res.json({ error: "An error occured" });
      }

      if (!user) {
        return res.json({ error: "User not found" });
      }

      return res.json({ token: await generateToken(req, user) });
    } catch (error) {
      return next(error);
    }
  })(req, res, next);
};

const logout = async (userId) => {
  try {
    await db.JwtTokenList.destroy({ where: { user_id: userId } });

    return { success: true };
  } catch (error) {
    return { success: false, error };
  }
};

const generateToken = async (req, user) => {
  return new Promise((resolve, reject) => {
    try {
      req.login(user, { session: false }, async (error) => {
        if (error) return reject(error);

        const body = { id: user.id, email: user.email };
        const token = jwt.sign({ user: body }, process.env.JWT_SECRET);

        await db.JwtTokenList.create({
          id: uuidv4(),
          user_id: user.id,
          token: token,
        });

        return resolve(token);
      });
    } catch (error) {
      return reject(error);
    }
  });
};

module.exports = {
  register,
  login,
  logout,
};
