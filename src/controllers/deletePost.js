const deletePostService = require("../services/deletePost");

const deletePost = async (req, res) => {
  const response = await deletePostService.deletePost(req.params.postId);
  return res.json(response);
};

module.exports = {
  deletePost,
};
