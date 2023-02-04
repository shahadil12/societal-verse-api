const db = require("../models");

const deleteComment = async (commentId) => {
  try {
    await db.Comment.destroy({ where: { id: commentId } });

    return { success: true };
  } catch (error) {
    return { success: false, error };
  }
};

module.exports = { deleteComment };
