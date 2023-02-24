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
    const response = await db.Post.update(attributes, {
      where: { id: postId },
    });

    const success = !!(response?.[0] && response[0] === 1);

    return {
      success,
      message: success ? "Post updated successfully" : "Post not updated",
    };
  } catch (error) {
    return { success: false, error };
  }
};

const showAllPosts = async (userId) => {
  try {
    const OnlyPosts = await db.Post.findAll({
      where: { user_id: { [Op.ne]: userId } },
    });

    const posts = await Promise.all(
      OnlyPosts.map(async (post) => {
        const { count: likes } = await db.Like.findAndCountAll({
          where: { post_id: post.id },
        });

        const { count: isUserLikedPost } = await db.Like.findAndCountAll({
          where: { user_id: userId },
        });

        const userDetail = await db.Profile.findOne({
          attributes: ["thumbnail_profile_picture", "user_name"],
          where: { user_id: post.user_id },
        });

        const comments = await db.Comment.findAll({
          attributes: ["comment", "updatedAt", "user_id"],
          where: { post_id: post.id },
        });

        const commenterDetails = await Promise.all(
          comments.map(async (comment) => {
            const comments = await db.Profile.findOne({
              attributes: ["thumbnail_profile_picture", "user_name"],
              where: { user_id: comment.user_id },
            });
            return comments;
          })
        );
        return {
          post,
          comments,
          likes,
          commenterDetails,
          userDetail,
          isUserLikedPost,
        };
      })
    );

    return { success: true, posts };
  } catch (error) {
    console.log(error);
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
