const express = require("express");
const router = express.Router();

const userController = require("../controllers/user");

router.delete("/", userController.deleteUser);
router.post("/follow/:requestedId", userController.follow);
router.delete("/follow", userController.unfollow);

module.exports = router;
