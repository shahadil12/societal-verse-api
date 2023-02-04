const express = require("express");
const router = express.Router();

const showLikeController = require("../controllers/showLike");
router.get("/:postId/like", showLikeController.showLike);

module.exports = router;
