const catchAsyncErrors = require("../middleware/catchAsyncError");
const ErrorHandler = require("../utils/errorHandler");
const Post = require("../models/posts");

//Add Post
const addPost = catchAsyncErrors(async (req, res, next) => {
  const addPost = await Post.create(req.body);

  res.status(201).json({
    message: "Post added successfully",
    addPost,
  });
});

//Get all Posts
const getAllPost = catchAsyncErrors(async (req, res, next) => {
  const getPost = await Post.find();

  res.status(201).json({
    message: "Success",
    getPost,
  });
});

//Get Post by id
const getPostById = catchAsyncErrors(async (req, res, next) => {
  const postDetail = await Post.findById(req.params.id);

  res.status(201).json({
    message: "Success",
    postDetail,
  });
});

//Update Post
const updatePost = catchAsyncErrors(async (req, res, next) => {
  const postUpdate = await Post.findById(req.params.id);

  if (!postUpdate) {
    return next(new ErrorHandler("Data not found ", 404));
  }

  postUpdate = await Post.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(201).json({
    message: "Post edited Successfully",
    postUpdate,
  });
});

//Delete Post
const deletePost = async (req, res, next) => {
  const del = await Post.findById(req.params.id);

  if (!del) {
    return res.status(500).json({
      success: false,
      message: "Posts not found",
    });
  }

  await Post.findByIdAndDelete(req.params.id);
  res.status(200).json({
    success: true,
    message: "Post deleted successfully",
  });
};

module.exports = {
  addPost,
  getAllPost,
  deletePost,
  updatePost,
  getPostById,
};
