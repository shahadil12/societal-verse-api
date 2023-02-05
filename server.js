const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const passport = require("passport");
const bodyParser = require("body-parser");
const jwtStrategy = require("./src/utils/jwtStrategy");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(passport.initialize());

passport.use("jwt", jwtStrategy);
dotenv.config();

const auth = require("./src/routes/auth");
const profile = require("./src/routes/profile");
const posts = require("./src/routes/posts");
const comments = require("./src/routes/comments");
const likes = require("./src/routes/likes");
const follow = require("./src/routes/follow");

app.use("/api/auth", auth);
app.use(
  "/api/profile",
  passport.authenticate("jwt", { session: false }),
  profile
);
app.use("/api/post", passport.authenticate("jwt", { session: false }), posts);
app.use(
  "/api/post/comment",
  passport.authenticate("jwt", { session: false }),
  comments
);
app.use(
  "/api/post/like",
  passport.authenticate("jwt", { session: false }),
  likes
);

app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.json({ error: err });
});

app.listen(process.env.PORT, () => {
  console.log(`Server running at ${process.env.PORT}...`);
});
