const authService = require("../services/auth");

const register = async (req, res) => {
  const response = await authService.register(req);
  return res.json(response);
};

const login = async (req, res, next) => {
  const response = await authService.login(req, res, next);
};

const logout = async (req, res) => {
  const response = await authService.logout(req.user.id);
  return res.json(response);
};

module.exports = {
  register,
  login,
  logout,
};
