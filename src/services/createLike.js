const db = require("../models");
const { v4: uuidv4 } = require("uuid");

const createLike = async (postId) => {
  try {
    await db.Like.create({
      id: uuidv4(),
      post_id: postId,
    });

    return { success: true, message: "Comment created successfully" };
  } catch (error) {
    return { success: false, error };
  }
};

module.exports = { createLike };
