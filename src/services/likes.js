const db = require("../models");
const { v4: uuidv4 } = require("uuid");

const createLike = async (userId, postId) => {
  try {
    await db.Like.create({
      id: uuidv4(),
      user_id: userId,
      post_id: postId,
    });

    return { success: true, message: "Like created successfully" };
  } catch (error) {
    return { success: false, error };
  }
};

const showLike = async (postId) => {
  try {
    const { count: likes } = await db.Like.findAndCountAll({
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
