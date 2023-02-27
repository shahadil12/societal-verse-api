const likeService = require("../services/likes");

const createLike = async (req, res) => {
  const response = await likeService.createLike(req.user.id, req.params.postId);
  return res.json(response);
};

const showLike = async (req, res) => {
  const response = await likeService.showLike(req.params.postId);
  return res.json(response);
};

const deleteLike = async (req, res) => {
  const response = await likeService.deleteLike(req.params.postId);
  return res.json(response);
};

module.exports = { createLike, showLike, deleteLike };
