const express = require("express");
const router = express.Router();

const likeController = require("../controllers/likes");

router.get("/:postId", likeController.showLike);
router.post("/:postId", likeController.createLike);
router.delete("/:postId", likeController.deleteLike);

module.exports = router;
