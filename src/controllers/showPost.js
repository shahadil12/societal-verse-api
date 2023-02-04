const showPostService = require("../services/showPost");

const showPost = async (req, res) => {
  const response = await showPostService.showPost(req.params.postId);
  return res.json(response);
};

module.exports = {
  showPost,
};
