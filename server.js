const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const passport = require("passport");
const bodyParser = require("body-parser");
const jwtStrategy = require("./src/utils/jwtStrategy");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const db = require("./src/models");
const { v4: uuidv4 } = require("uuid");

app.use(bodyParser.json({ limit: "5mb" }));
app.use(bodyParser.urlencoded({ limit: "5mb", extended: true }));
app.use(cors());
app.use(passport.initialize());

const socketIo = new Server(server, {
  cors: "http://localhost:5000",
});

socketIo.use(async (socket, next) => {
  try {
    const sessionId = socket.handshake.auth.sessionId;
    if (sessionId) {
      const session = await db.SessionStore.findOne({
        where: {
          id: sessionId,
        },
      });

      if (session) {
        socket.sessionId = sessionId;
        socket.userId = session.dataValues.user_id;
        return next();
      }
    }
    if (!sessionId) {
      const userId = socket.handshake.auth.userId;
      const id = uuidv4();

      await db.SessionStore.create({
        id: id,
        socket_id: socket.id,
        user_id: userId,
      });

      socket.sessionId = id;
      socket.userId = userId;
      next();
    }
  } catch (error) {
    console.log(error);
  }
});

socketIo.on("connection", async (socket) => {
  socket.emit("session", {
    sessionId: socket.sessionId,
    userId: socket.userId,
  });
  const usersSession = await db.SessionStore.findAll();
  const users = usersSession.map((session) => {
    return session.dataValues;
  });
  socket.emit("users", users);

  socket.join(socket.userId);

  socket.on("private_message", async ({ message, to, from, toId }) => {
    await db.Message.create({
      id: uuidv4(),
      message: message,
      sender_id: from,
      receiver_id: toId,
    });
    console.log("hiii");
    socket.broadcast.emit("messageResponse", {
      message: message,
      from,
    });

    socket.to(to).to(socket.userId).emit("private_message", {
      message,
      from,
    });
  });

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

passport.use("jwt", jwtStrategy);
dotenv.config();

const auth = require("./src/routes/auth");
const profile = require("./src/routes/profile");
const posts = require("./src/routes/posts");
const comments = require("./src/routes/comments");
const likes = require("./src/routes/likes");
const user = require("./src/routes/user");

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
app.use("/api/user", passport.authenticate("jwt", { session: false }), user);

app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.json({ error: err });
});

server.listen(process.env.PORT, () => {
  console.log(`Server running at ${process.env.PORT}...`);
});
