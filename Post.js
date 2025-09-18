const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  title: { type: String, required: true },
  body: { type: String, required: true },
  coverImage: { type: String }, // path to upload (e.g. /uploads/abc.jpg)
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  tags: [String],
  published: { type: Boolean, default: true }
}, { timestamps: true });

module.exports = mongoose.model('Post', PostSchema);
