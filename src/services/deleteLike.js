const db = require("../models");

const deleteLike = async (postId) => {
  try {
    await db.Like.destroy({
      where: { post_id: postId },
    });

    return { success: true, message: "like deleted successfully" };
  } catch (error) {
    return { success: false, error };
  }
};

module.exports = { deleteLike };
