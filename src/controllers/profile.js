const profileService = require("../services/profile");

const profile = async (req, res) => {
  const response = await profileService.profile();
  return res.json(response);
};

module.exports = { profile };
