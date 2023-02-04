const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/profile", async (req, res, next) => {
  const reqToken = req.query.secret_token;
  const isAuthenticated =
    reqToken && (await db.JwtTokenList.findOne({ where: { token: reqToken } }));

  if (!isAuthenticated) {
    return res.json({ message: "Unauthorized" });
  }
  res.json({
    message: "You made it to the secure route",
    user: req.user,
    token: req.query.secret_token,
  });
});

module.exports = router;
