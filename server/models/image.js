const mongoose = require('mongoose');

const { Schema } = mongoose;

const ImageSchema = new mongoose.Schema({
  filename: { type: String },
  handle: { type: String },
  mimetype: { type: String },
  originalPath: { type: String },
  size: { type: Number },
  source: { type: String },
  status: { type: String },
  url: { type: String },
  _user: { type: Schema.Types.ObjectId, ref: 'User' },
  likes: [{ type: Schema.Types.ObjectId, ref: 'User' }],
}, { timestamps: true });

mongoose.model('Image', ImageSchema);
