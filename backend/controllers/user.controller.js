const Post = require("../models/post.model");
const { generateErrorInstance } = require("../utils");
const fs = require("fs");
const path = require("path");

module.exports = {
  create: async (req, res) => {
    try {
      const { content } = req.body;

      const post = await Post.create({
        author: req.user._id,
        content,
        image: req.file ? req.file.filename : ""
      });

      return res.status(201).json(post);
    } catch (err) {
      console.log(err);
      return res
        .status(err.status || 500)
        .send(err.message || "Something went wrong!");
    }
  },

  list: async (req, res) => {
    try {
      const posts = await Post.find().populate({
        path: 'author',
        select: 'firstName lastName email',
      }).sort({ createdAt: -1 });

      return res.status(200).json(posts);
    } catch (err) {
      console.log(err);
      return res
        .status(err.status || 500)
        .send(err.message || "Something went wrong!");
    }
  },

  edit: async (req, res) => {
    try {
      const postId = req.params.id;
      const { author, content } = req.body;
      const newImage = req.file ? req.file.filename : null;

      const post = await Post.findById(postId);
      if (!post) {
        throw generateErrorInstance({
          status: 404,
          message: "Post not found.",
        });
      }

      if(req.user.role !== "admin" && post.author.toString() !== req.user._id) {
        throw generateErrorInstance({
          status: 403,
          message: "Unauthorized!",
        });
      }

      // Remove the previous image
      if (newImage && post.image) {
        const imagePath = path.join(__dirname, '../public/uploads', post.image);
        try {
          await fs.promises.access(imagePath);
          await fs.promises.unlink(imagePath);
          console.log('Previous file deleted:', imagePath);
        } catch (error) {
          if (error.code === 'ENOENT') {
            console.error('Previous file does not exist:', imagePath);
          } else {
            console.error('Error accessing file:', error.message);
          }
        }
      }

      post.author = author ? author : post.author;
      post.content = content ? content : post.content;
      post.image = req.file ? newImage : post.image;

      await post.save();

      return res.json(post);
    } catch (err) {
      console.log(err);
      return res
        .status(err.status || 500)
        .send(err.message || "Something went wrong!");
    }
  },

  remove: async (req, res) => {
    try {
      const postId = req.params.id;

      const deletedPost = await Post.findByIdAndDelete(postId);
      if(deletedPost) {
        if(req.user.role !== "admin" && deletedPost.author.toString() !== req.user._id) {
          throw generateErrorInstance({
            status: 403,
            message: "Unauthorized!",
          });
        }

        const imagePath = path.join(__dirname, '../public/uploads', deletedPost.image);
        if (deletedPost.image) {
          try {
            await fs.promises.access(imagePath);
            await fs.promises.unlink(imagePath);
            console.log('Previous file deleted:', imagePath);
          } catch (error) {
            if (error.code === 'ENOENT') {
              console.error('Previous file does not exist:', imagePath);
            } else {
              console.error('Error accessing file:', error.message);
            }
          }
        }

        return res.status(204).end();
      } else {
        throw generateErrorInstance({
          status: 404,
          message: "Post not found!",
        });
      }

    } catch (err) {
      console.log(err);
      return res
        .status(err.status || 500)
        .send(err.message || "Something went wrong!");
    }
  }
};
