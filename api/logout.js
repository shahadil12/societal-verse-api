import { removeTokenCookie } from "../../lib/authCookies";

module.exports = function logout(req, res) {
  removeTokenCookie(res);
  res.writeHead(302, { Location: "/" });
  res.end();
};
