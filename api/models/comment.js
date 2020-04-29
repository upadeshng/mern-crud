const mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');

const CommentSchema = new mongoose.Schema({

  content: {
      type: String,
      required: [true, 'Content is required'],
      trim: true
  },

  postId: {
        type: String,
        required: true
  },

  userId: {
        type: Number,
        default: 0,
        required: true
    }
}, { timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' } })

CommentSchema.plugin(mongoosePaginate);
module.exports = mongoose.model('Comment', CommentSchema);
