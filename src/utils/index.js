const crypto = require("crypto");
const db = require("../models");

const User = db.User;

exports.findUser = async function (email) {
  const user = await User.findOne({
    where: { email: email },
  });
  return user;
};

exports.validatePassword = function (User, inputPassword) {
  const InputHash = crypto
    .pbkdf2Sync(inputPassword, User.dataValues.salt, 1000, 64, "sha512")
    .toString("hex");
  const passwordMatch = User.dataValues.hash === InputHash;
  return passwordMatch;
};
