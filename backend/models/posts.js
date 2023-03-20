const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Defines the Post schema
const PostSchema = new Schema({
  title: { type: String, required: false },
  content: { type: String, required: false },
  author: { type: String, required: false },
  createdAt: { type: Date, default: Date.now },    
});


module.exports = mongoose.model('Post', PostSchema);