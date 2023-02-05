const db = require("../models");
const { v4: uuidv4 } = require("uuid");

const createPost = async (req) => {
  try {
    const user_id = req.user.id;
    const { picture, caption } = req.body;

    await db.Post.create({
      id: uuidv4(),
      user_id: user_id,
      picture: picture,
      caption: caption,
    });

    return { success: true, message: "post uploaded successfully" };
  } catch (error) {
    return { success: false, error };
  }
};

const deletePost = async (postId) => {
  try {
    await db.Post.destroy({ where: { id: postId } });
    return { success: true, message: "Post deleted successfully" };
  } catch (error) {
    return { success: false, error };
  }
};

const showAllPosts = async () => {
  try {
    const posts = await db.Post.findAll({ limit: 10 });

    return { success: true, posts };
  } catch (error) {
    return { success: false, error };
  }
};

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

module.exports = { createPost, deletePost, showAllPosts, showPost };
