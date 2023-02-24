const profileService = require("../services/profile");

const profileSuggestion = async (req, res) => {
  const response = await profileService.profileSuggestion(req.user.id);
  return res.json(response);
};

const createProfile = async (req, res) => {
  const response = await profileService.createProfile(req.user.id, req.body);
  return res.json(response);
};

const showProfile = async (req, res) => {
  const response = await profileService.showProfile(req.user.id);
  return res.json(response);
};

const updateProfile = async (req, res) => {
  const response = await profileService.updateProfile(req.user.id, req.body);
  return res.json(response);
};

const showProfilePosts = async (req, res) => {
  const response = await profileService.showProfilePosts(req.user.id);
  return res.json(response);
};

module.exports = {
  profileSuggestion,
  createProfile,
  showProfile,
  updateProfile,
  showProfilePosts,
};
