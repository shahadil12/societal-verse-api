const profileService = require("../services/profile");

const profileSuggestion = async (req, res) => {
  const response = await profileService.profileSuggestion(req.user.id);
  return res.json(response);
};

const createProfile = async (req, res) => {
  const response = await profileService.createProfile(req.user.id, req.body);
  return res.json(response);
};

const showSpecificProfilePosts = async (req, res) => {
  console.log("hii");
  const response = await profileService.showSpecificProfilePosts(
    req.body.userId
  );
  return res.json(response);
};

const showProfile = async (req, res) => {
  const response = await profileService.showProfile(req.user.id);
  return res.json(response);
};

const showSpecificProfile = async (req, res) => {
  const response = await profileService.showSpecificProfile(
    req.user.id,
    req.params.profileUserId
  );
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
  showSpecificProfile,
  showSpecificProfilePosts,
};
