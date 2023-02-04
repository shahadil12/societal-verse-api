const followService = require("../services/follow");

const follow = async (req, res) => {
  const response = await followService.follow(
    req.params.requesterId,
    req.params.requestedId
  );
  return res.json(response);
};

module.exports = { follow };
