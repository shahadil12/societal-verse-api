const express = require("express");
const router = express.Router();

const deletePostController = require("../controllers/deletePost");

router.delete("/:postId", deletePostController.deletePost);

module.exports = router;
