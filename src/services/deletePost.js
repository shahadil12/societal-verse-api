const db = require("../models");
const deletePost = async (postId) => {
  try {
    await db.Post.destroy({ where: { id: postId } });
    return { success: true, message: "Post deleted successfully" };
  } catch (error) {
    return { success: false, error };
  }
};

module.exports = {
  deletePost,
};
