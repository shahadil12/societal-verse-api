const db = require("../models");

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

module.exports = { showAllComments };
