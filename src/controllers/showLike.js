const showLikeService = require("../services/showLike");

const showLike = async (req, res) => {
  const response = await showLikeService.showLike(req.params.postId);
  return res.json(response);
};

module.exports = { showLike };
