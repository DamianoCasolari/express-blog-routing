const express = require("express");
const router = express.Router();
const postsController = require("../controller/postsController")

router.get("/", postsController.index)
router.get("/create", postsController.create)
router.get("/:slug", postsController.show)
router.get("/:slug/download", postsController.download)

module.exports = router
