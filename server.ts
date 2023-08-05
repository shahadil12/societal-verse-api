import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import passport from "passport";
import bodyParser from "body-parser";
import jwtStrategy from "./src/utils/jwtStrategy";
const app = express();
import http from "http";
const server = http.createServer(app);
import { Server } from "socket.io";
import db from "./src/models";
import { v4 as uuidv4 } from "uuid";
// import pgpdb from "./src/database/pg-promise";
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
  try {
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

      // const data = await pgpdb.func("upsert_message", [
      //   uuidv4(),
      //   from,
      //   toId,
      //   message,
      // ]);

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
  } catch (error) {
    console.log(error);
  }
});

passport.use("jwt", jwtStrategy);
dotenv.config();

import auth from "./src/routes/auth";
import profile from "./src/routes/profile";
import posts from "./src/routes/posts";
import comments from "./src/routes/comments";
import likes from "./src/routes/likes";
import user from "./src/routes/user";

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
