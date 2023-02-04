const express = require("express");
const router = express.Router();

const postValidator = require("../middlewares/validators/postValidator");
const createPostController = require("../controllers/createPost");

router.post("/post", postValidator(), createPostController.createPost);

module.exports = router;
