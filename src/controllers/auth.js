const authService = require("../services/auth");

const register = async (req, res) => {
  const response = await authService.register(req.body);
  return res.json(response);
};

module.exports = {
  register,
};
