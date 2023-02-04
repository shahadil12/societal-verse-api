const followService = require("../services/followService");

const follow = async (req, res) => {
  const response = await followService.follow(
    req.params.requesterId,
    req.params.requestedId
  );
  return res.json(response);
};

module.exports = { follow };
