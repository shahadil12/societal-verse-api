const createCommentService = require("../services/createComment");

const createComment = async (req, res) => {
  const response = await createCommentService.createComment(req);
  return res.json(response);
};

module.exports = { createComment };
