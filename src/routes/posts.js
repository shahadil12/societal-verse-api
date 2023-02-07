const express = require("express");
const router = express.Router();

const postValidator = require("../middlewares/validators/postValidator");
const updatePostValidator = require("../middlewares/validators/updatePostValidator");
const postController = require("../controllers/posts");

router.get("/", postController.showAllPosts);
router.post("/", postValidator(), postController.createPost);
router.put("/:postId", updatePostValidator(), postController.updatePost);
router.get("/:postId", postController.showPost);
router.delete("/:postId", postController.deletePost);

module.exports = router;
