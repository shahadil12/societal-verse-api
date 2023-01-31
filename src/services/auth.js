const crypto = require("crypto");
const { v4: uuidv4 } = require("uuid");

const db = require("../models");

const register = async ({ email, password, fullName }) => {
  try {
    const existingUser = await db.User.findOne({ where: { email } });
    if (existingUser) {
      return {
        success: false,
        error: "User already exists",
      };
    }

    const salt = crypto.randomBytes(16).toString("hex");
    const hash = crypto
      .pbkdf2Sync(password, salt, 1000, 64, "sha512")
      .toString("hex");

    await db.User.create({
      id: uuidv4(),
      fullName,
      email,
      hash,
      salt,
    });

    return { success: true };
  } catch (error) {
    return { success: false, error };
  }
};

module.exports = {
  register,
};
