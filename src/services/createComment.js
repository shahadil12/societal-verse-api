const db = require("../models");
const { v4: uuidv4 } = require("uuid");

const createComment = async (req) => {
  const { comment } = req.body;
  const user_id = req.user.id;
  const post_id = req.params.postId;
  try {
    await db.Comment.create({
      id: uuidv4(),
      user_id,
      post_id,
      comment,
    });

    return { success: true, message: "Comment created successfully" };
  } catch (error) {
    return { success: false, error };
  }
};

module.exports = { createComment };
