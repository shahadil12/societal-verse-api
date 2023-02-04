const showCommentService = require("../services/showComment");

const showComment = async (req, res) => {
  const response = await showCommentService.showComment(req.params.commentId);
  return res.json(response);
};

module.exports = { showComment };
