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
app.use(passport.initialize());

const auth = require("./src/routes/auth");
const login = require("./src/routes/login");
const logout = require("./src/routes/logout");

const profile = require("./src/routes/profile");
const showProfile = require("./src/routes/showProfile");
const showProfilePosts = require("./src/routes/showProfilePosts");

const showAllPosts = require("./src/routes/showAllPosts");
const createPost = require("./src/routes/createPost");
const showPost = require("./src/routes/showPost");
const deletePost = require("./src/routes/deletePost");

const showAllComments = require("./src/routes/showAllComments");
const createComment = require("./src/routes/createComment");
const showComment = require("./src/routes/showComment");
const deleteComment = require("./src/routes/deleteComment");

const showLike = require("./src/routes/showLike");
const createLike = require("./src/routes/createLike");
const deleteLike = require("./src/routes/deleteLike");

const follow = require("./src/routes/follow");

const secureRoute = require("./src/routes/secureRoute");

//Auth routes
app.use("/api/", auth);
app.use("/api/", login);
app.use("/api/", passport.authenticate("jwt", { session: false }), logout);

// Profile routes
app.use("/api/", passport.authenticate("jwt", { session: false }), profile);
app.use("/api/", passport.authenticate("jwt", { session: false }), showProfile);
app.use(
  "/api/",
  passport.authenticate("jwt", { session: false }),
  showProfilePosts
);

// Posts routes
app.use(
  "/api/",
  passport.authenticate("jwt", { session: false }),
  showAllPosts
);
app.use("/api/", passport.authenticate("jwt", { session: false }), createPost);
app.use(
  "/api/post/",
  passport.authenticate("jwt", { session: false }),
  showPost
);
app.use(
  "/api/post/",
  passport.authenticate("jwt", { session: false }),
  deletePost
);

//Comments
app.use(
  "/api/post/",
  passport.authenticate("jwt", { session: false }),
  showAllComments
);
app.use(
  "/api/post/",
  passport.authenticate("jwt", { session: false }),
  createComment
);
app.use(
  "/api/post/",
  passport.authenticate("jwt", { session: false }),
  showComment
);
app.use(
  "/api/post",
  passport.authenticate("jwt", { session: false }),
  deleteComment
);

//Like routes
app.use(
  "/api/post",
  passport.authenticate("jwt", { session: false }),
  showLike
);
app.use(
  "/api/post",
  passport.authenticate("jwt", { session: false }),
  createLike
);
app.use(
  "/api/post",
  passport.authenticate("jwt", { session: false }),
  deleteLike
);

//Follow
app.use("/api/", passport.authenticate("jwt", { session: false }), follow);

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
