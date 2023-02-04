const db = require("../models");
const { v4: uuidv4 } = require("uuid");

const createPost = async (req) => {
  try {
    const user_id = req.user.id;
    const { picture, caption } = req.body;

    await db.Post.create({
      id: uuidv4(),
      user_id: user_id,
      picture: picture,
      caption: caption,
    });

    return { success: true, message: "post uploaded successfully" };
  } catch (error) {
    return { success: false, error };
  }
};

module.exports = { createPost };
