import Local from "passport-local";
import { findUser, validatePassword } from "./user";

export const localStrategy = new Local.Strategy(function (
  userName,
  password,
  done
) {
  findUser({ userName })
    .then(([User]) => {
      if (User && validatePassword(User, password)) {
        done(null, User);
      } else {
        done(new Error("Invalid username and password combination"));
      }
    })
    .catch((error) => {
      done(error);
    });
});
