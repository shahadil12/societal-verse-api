const loginService = require("../services/login");

const login = async (req, res, next) => {
  const response = await loginService.login(req, res, next);
};

module.exports = {
  login,
};
