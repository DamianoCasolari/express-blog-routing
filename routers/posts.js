const express = require("express");
const router = express.Router();
const postsController = require("../controller/postsController")

router.get("/", postsController.index)

module.exports = router