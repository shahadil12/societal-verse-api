const postService = require("../services/posts");

const createPost = async (req, res) => {
  const response = await postService.createPost(req.user.id, req.body);
  return res.json(response);
};

const deletePost = async (req, res) => {
  const response = await postService.deletePost(req.params.postId);
  return res.json(response);
};

const updatePost = async (req, res) => {
  const response = await postService.updatePost(req.params.postId, req.body);
  return res.json(response);
};
const showAllPosts = async (req, res) => {
  const response = await postService.showAllPosts(req.user.id);
  return res.json(response);
};

const showPost = async (req, res) => {
  const response = await postService.showPost(req.params.postId);
  return res.json(response);
};

module.exports = { createPost, deletePost, showAllPosts, showPost, updatePost };
