const showAllCommentsService = require("../services/showAllComments");

const showAllComments = async (req, res) => {
  const response = await showAllCommentsService.showAllComments(
    req.params.postId
  );
  return res.json(response);
};

module.exports = { showAllComments };
