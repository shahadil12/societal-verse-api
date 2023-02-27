const userService = require("../services/user");

const deleteUser = async (req, res) => {
  const response = await userService.deleteUser(req.user.id);
  return res.json(response);
};

const follow = async (req, res) => {
  const response = await userService.follow(
    req.user.id,
    req.params.requestedId
  );
  return res.json(response);
};

const unfollow = async (req, res) => {
  const response = await userService.unfollow(req.user.id);
  return res.json(response);
};

const followingProfile = async (req, res) => {
  const response = await userService.followingProfile(req.user.id);
  return res.json(response);
};

const sessionId = async (req, res) => {
  const response = await userService.sessionId(req.body.userId);
  return res.json(response);
};

module.exports = { follow, deleteUser, unfollow, followingProfile, sessionId };
