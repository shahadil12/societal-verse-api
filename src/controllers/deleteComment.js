const deleteCommentService = require("../services/deleteComment");

const deleteComment = async (req, res) => {
  const response = await deleteCommentService.deleteComment(
    req.params.commentId
  );
  return res.json(response);
};

module.exports = {
  deleteComment,
};
