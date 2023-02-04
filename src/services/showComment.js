const db = require("../models");

const showComment = async (postId, commentId) => {
  try {
    const comment = await db.Comment.findOne({ where: { id: commentId } });

    return { success: true, comment };
  } catch (error) {
    return { success: false, error };
  }
};

module.exports = {
  showComment,
};
