const showProfileService = require("../services/showProfile");

const showProfile = async (req, res) => {
  const response = await showProfileService.showProfile(req.user.id);
  return res.json(response);
};

module.exports = { showProfile };
