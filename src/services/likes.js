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

module.exports = { createLike, showLike, deleteLike };
