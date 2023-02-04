const showProfileService = require("../services/showProfile");

const showProfile = async (req, res) => {
  const response = await showProfileService.showProfile(req.params.userId);
  return res.json(response);
};

module.exports = { showProfile };
