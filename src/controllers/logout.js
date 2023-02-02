const logoutService = require("../services/logout");

const logout = async (req, res) => {
  const response = await logoutService.logout(req.user);
  return res.json(response);
};

module.exports = {
  logout,
};
