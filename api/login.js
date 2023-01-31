import passport from "passport";
import nextConnect from "next-connect";
import { localStrategy } from "../../lib/passport-local";
import { setLoginSession } from "../../lib/auth";
import { findUser, validatePassword } from "../../lib/user";

const authenticate = (method, req, res) =>
  new Promise((resolve, reject) => {
    passport.authenticate(method, { session: false }, (error, token) => {
      if (error) {
        reject(error);
      } else {
        resolve(token);
      }
    })(req, res);
  });

passport.use(localStrategy);

export default nextConnect()
  .use(passport.initialize())
  .post(async (req, res) => {
    try {
      // const user = await authenticate("local", req, res);
      const [User] = await findUser(req.body.userName);
      const isAuthenticated = User && validatePassword(User, req.body.password);
      const session = isAuthenticated && { ...User };
      await setLoginSession(res, session);
      if (isAuthenticated) {
        res
          .status(200)
          .json({ done: true, userName: User.dataValues.userName });
      }
    } catch (error) {
      console.log(error);
      res.status(401).send(error.message);
    }
  });
