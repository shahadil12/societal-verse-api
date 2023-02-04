const deleteLikeService = require("../services/deleteService");

const deleteLike = async (req, res) => {
  const response = await deleteLikeService.deleteLike(req.params.postId);
  return res.json(response);
};

module.exports = { deleteLike };
