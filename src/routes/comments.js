const express = require("express");
const router = express.Router();

const commentController = require("../controllers/comments");
const commentValidator = require("../middlewares/validators/commentValidator");

router.get("/:postId", commentController.showAllComments);
router.post("/:postId", commentValidator(), commentController.createComment);
router.put("/:commentId", commentValidator(), commentController.updateComment);
router.delete("/:commentId", commentController.deleteComment);

module.exports = router;
