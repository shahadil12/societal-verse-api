const passport = require("passport");
const localStrategy = require("passport-local").Strategy;
const { findUser, validatePassword } = require("./index");

const loginStrategy = new localStrategy(
  {
    usernameField: "email",
    passwordField: "password",
  },
  async (email, password, done) => {
    try {
      const user = await findUser(email);
      if (!user) {
        return done({ message: "User not found" }, false);
      }
      const isAuthenticated = user && validatePassword(user, password);
      if (!isAuthenticated) {
        return done({ message: "Invalid Password" }, false);
      }

      return done(null, user, { message: "Login in Successfully " });
    } catch (error) {
      return done(error);
    }
  }
);

module.exports = loginStrategy;
