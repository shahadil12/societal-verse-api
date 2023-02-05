const express = require("express");
const router = express.Router();

const commentController = require("../controllers/comments");

const commentValidator = require("../middlewares/validators/commentValidator");

router.get("/:postId/", commentController.showAllComments);
router.post("/:postId", commentValidator(), commentController.createComment);
router.get("/:commentId", commentController.showComment);
router.delete("/:commentId", commentController.deleteComment);

module.exports = router;
