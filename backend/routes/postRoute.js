const express = require("express");
const {
  addPost,
  getAllPost,
  deletePost,
  updatePost,
  getPostById,
} = require("../controllers/postController");
const router = express.Router();


router.route("/post").post(addPost);

router.route("/posts").get(getAllPost);

router.route("/posts/:id").delete(deletePost).put(updatePost).get(getPostById);

module.exports = router;
