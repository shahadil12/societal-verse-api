const db = require("../models");

const showLike = async (postId) => {
  try {
    const likes = await db.Like.findAll({
      where: { post_id: postId },
    });

    return { success: true, likes };
  } catch (error) {
    return { success: false, error };
  }
};

module.exports = { showLike };
