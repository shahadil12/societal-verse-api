const express = require("express");
const router = express.Router();

const createLikeController = require("../controllers/createLike");

router.post("/:postId/like", createLikeController.createLike);

module.exports = router;
