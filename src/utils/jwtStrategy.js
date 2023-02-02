const JWTstrategy = require("passport-jwt").Strategy;
const ExtractJWT = require("passport-jwt").ExtractJwt;

const jwtStrategy = new JWTstrategy(
  {
    secretOrKey: "TOP_SECRET",
    jwtFromRequest: ExtractJWT.fromUrlQueryParameter("secret_token"),
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
