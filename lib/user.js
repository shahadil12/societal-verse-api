import crypto from "crypto";
import db from "../db/models/index.js";
import { Op } from "sequelize";

const User = db.User;

export async function findUser(userName) {
  const user = await User.findAll({
    where: { userName: { [Op.eq]: userName } },
  });
  return user;
}

export function validatePassword(User, inputPassword) {
  const InputHash = crypto
    .pbkdf2Sync(inputPassword, User.dataValues.salt, 1000, 64, "sha512")
    .toString("hex");
  const passwordMatch = User.dataValues.hash === InputHash;
  return passwordMatch;
}
