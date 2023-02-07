const commentService = require("../services/comments");

const createComment = async (req, res) => {
  const response = await commentService.createComment(req);
  return res.json(response);
};

const deleteComment = async (req, res) => {
  const response = await commentService.deleteComment(req.params.commentId);
  return res.json(response);
};

const updateComment = async (req, res) => {
  const response = await commentService.updateComment(
    req.params.commentId,
    req.body
  );
  return res.json(response);
};

const showAllComments = async (req, res) => {
  const response = await commentService.showAllComments(req.params.postId);
  return res.json(response);
};

module.exports = {
  createComment,
  deleteComment,
  showAllComments,
  updateComment,
};
