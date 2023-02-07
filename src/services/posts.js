const db = require("../models");
const { v4: uuidv4 } = require("uuid");
const { Op } = require("sequelize");

const createPost = async (userId, postBody) => {
  try {
    const { picture, caption } = postBody;

    await db.Post.create({
      id: uuidv4(),
      user_id: userId,
      picture,
      caption,
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

const updatePost = async (postId, attributes) => {
  try {
    const filteredAttributes = Object.fromEntries(
      Object.entries(attributes).filter(([key, vlaue]) => vlaue !== null)
    );

    await db.Post.update({ ...filteredAttributes }, { where: { id: postId } });

    return { success: true, message: "post updated successfully" };
  } catch (error) {
    console.log(error);
    return { success: false, error };
  }
};

const showAllPosts = async (userId) => {
  try {
    const posts = await db.Post.findAll({
      where: { id: { [Op.ne]: userId } },
      limit: 10,
    });

    const Posts = await Promise.all(
      posts.map(async (post) => {
        const { count: likes } = await db.Like.findAndCountAll({
          where: { post_id: post.id },
        });

        const comments = await db.Comment.findAll({
          attributes: ["comment", "updated_at"],
          where: { post_id: post.id },
        });

        return { post, comments, likes };
      })
    );

    return { success: true, Posts };
  } catch (error) {
    return { success: false, error };
  }
};

const showPost = async (postId) => {
  try {
    const post = await db.Post.findOne({
      where: { id: postId },
    });
    const { count: likes } = await db.Like.findAndCountAll({
      where: { post_id: postId },
    });
    const comments = await db.Comment.findAll({
      attributes: ["comment", "updated_at"],
      where: { post_id: postId },
    });

    const Post = { post, likes, comments };
    return { success: true, Post };
  } catch (error) {
    return { success: false, error };
  }
};

module.exports = { createPost, deletePost, showAllPosts, showPost, updatePost };
