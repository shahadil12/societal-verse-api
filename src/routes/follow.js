const express = require("express");
const router = express.Router();

const followController = require("../controllers/follow");

router.post("/:requesterId/follow/:rwquestedId", followController.follow);

module.exports = router;
