const express = require("express");
const router = express.Router();

const deleteLikeController = require("../controllers/deleteLike");

router.delete("/:postId/like", deleteLikeController.deleteLike);

module.exports = router;
