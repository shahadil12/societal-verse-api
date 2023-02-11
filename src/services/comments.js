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

const deleteComment = async (commentId) => {
  try {
    await db.Comment.destroy({ where: { id: commentId } });

    return { success: true };
  } catch (error) {
    return { success: false, error };
  }
};

const updateComment = async (commentId, attributes) => {
  try {
    const filteredAttribute = Object.fromEntries(
      Object.entries(attributes).filter(([key, value]) => value !== null)
    );

    await db.Comment.update(
      { ...filteredAttribute },
      { where: { id: commentId } }
    );

    return { success: true, message: "comment updated successfully" };
  } catch (error) {
    return { success: false, error };
  }
};

const showAllComments = async (postId) => {
  try {
    const comments = await db.Comment.findAll({
      where: { post_id: postId },
    });
    return { success: true, comments };
  } catch (error) {
    return { success: false, error };
  }
};

module.exports = {
  createComment,
  deleteComment,
  showAllComments,
  updateComment,
};
