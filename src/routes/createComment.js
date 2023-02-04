const express = require("express");
const router = express.Router();

const commentValidator = require("../middlewares/validators/commentValidator");
const createCommentController = require("../controllers/createComment");
router.post(
  "/:postId/comment",
  commentValidator(),
  createCommentController.createComment
);

module.exports = router;
