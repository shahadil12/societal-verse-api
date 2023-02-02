const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const passport = require("passport");
const bodyParser = require("body-parser");
const jwtStrategy = require("./src/utils/jwtStrategy");

passport.use("jwt", jwtStrategy);

dotenv.config();
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const auth = require("./src/routes/auth");
const login = require("./src/routes/login");
const logout = require("./src/routes/logout");
const secureRoute = require("./src/routes/secureRoute");

app.use("/api/", auth);
app.use("/api/", login);
app.use("/api/", passport.authenticate("jwt", { session: false }), logout);
app.use(
  "/user/",
  passport.authenticate("jwt", { session: false }),
  secureRoute
);

app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.json({ error: err });
});

app.listen(process.env.PORT, () => {
  console.log(`Server running at ${process.env.PORT}...`);
});
