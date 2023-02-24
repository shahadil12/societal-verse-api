const JWTstrategy = require("passport-jwt").Strategy;
const ExtractJWT = require("passport-jwt").ExtractJwt;
const db = require("../models");
require("dotenv").config();

const jwtStrategy = new JWTstrategy(
  {
    secretOrKey: process.env.JWT_SECRET,
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
  },
  async (token, done) => {
    try {
      return done(null, token.user);
    } catch (error) {
      done(error);
    }
  }
);

module.exports = jwtStrategy;
