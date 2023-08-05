import { StrategyOptions } from "passport-jwt";
const JWTstrategy = require("passport-jwt").Strategy;
const ExtractJWT = require("passport-jwt").ExtractJwt;
require("dotenv").config();

const strategyOptions: StrategyOptions = {
  secretOrKey: process.env.JWT_SECRET,
  jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
};

const jwtStrategy = new JWTstrategy(strategyOptions, async (token, done) => {
  try {
    return done(null, token.user);
  } catch (error) {
    done(error);
  }
});

module.exports = jwtStrategy;
