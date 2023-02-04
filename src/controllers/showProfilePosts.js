const showProfilePostsService = require("../services/showProfilePosts");

const showProfilePosts = async (req, res) => {
  const response = await showProfilePostsService.showProfilePosts(
    req.params.userId
  );
  return res.json(response);
};

module.exports = { showProfilePosts };
