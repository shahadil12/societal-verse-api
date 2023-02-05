const postService = require("../services/posts");

const createPost = async (req, res) => {
  const response = await postService.createPost(req);
  return res.json(response);
};

const deletePost = async (req, res) => {
  const response = await postService.deletePost(req.params.postId);
  return res.json(response);
};

const showAllPosts = async (req, res) => {
  const response = await postService.showAllPosts();
  return res.json(response);
};

const showPost = async (req, res) => {
  const response = await postService.showPost(req.params.postId);
  return res.json(response);
};

module.exports = { createPost, deletePost, showAllPosts, showPost };
