const commentService = require("../services/comments");

const createComment = async (req, res) => {
  const response = await commentService.createComment(req);
  return res.json(response);
};

const deleteComment = async (req, res) => {
  const response = await commentService.deleteComment(req.params.commentId);
  return res.json(response);
};

const showAllComments = async (req, res) => {
  const response = await commentService.showAllComments(req.params.postId);
  return res.json(response);
};

const showComment = async (req, res) => {
  const response = await commentService.showComment(req.params.commentId);
  return res.json(response);
};

module.exports = { createComment, deleteComment, showAllComments, showComment };
