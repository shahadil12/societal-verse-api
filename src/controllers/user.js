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

module.exports = { follow, deleteUser };
