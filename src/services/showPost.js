const db = require("../models");

const showPost = async (postId) => {
  try {
    const post = await db.Post.findOne({
      where: { id: postId },
    });

    return { success: true, post: post };
  } catch (error) {
    return { success: false, error };
  }
};

module.exports = { showPost };
