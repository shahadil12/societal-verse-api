const createLikeService = require("../services/createLike");

const createLike = async (req, res) => {
  const response = await createLikeService.createLike(req.params.postId);
  return res.json(response);
};

module.exports = { createLike };
