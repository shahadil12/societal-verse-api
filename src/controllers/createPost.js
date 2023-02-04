const createPostService = require("../services/createPost");

const createPost = async (req, res) => {
  const response = await createPostService.createPost(req);
  return res.json(response);
};

module.exports = { createPost };
