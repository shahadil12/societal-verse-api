const express = require("express");
const router = express.Router();

const postValidator = require("../middlewares/validators/postValidator");
const postController = require("../controllers/posts");

router.get("/", postController.showAllPosts);
router.post("/", postValidator(), postController.createPost);
router.get("/:postId", postController.showPost);
router.delete("/:postId", postController.deletePost);

module.exports = router;
