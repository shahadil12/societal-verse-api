const showAllPostsService = require("../services/showAllPosts");

const showAllPosts = async (req, res) => {
  const response = await showAllPostsService.showAllPosts();
  return res.json(response);
};

module.exports = { showAllPosts };
