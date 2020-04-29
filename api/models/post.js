const mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');

const PostSchema = new mongoose.Schema({
  date: {
      type: Date,
      required: [true, 'Date is required'],
  },
  title: {
      type: String,
      required: [true, 'Title is required'],
      trim: true
  },
  content: {
        type: String,
        trim: true
        // required: true
    },
    userId: {
        type: Number,
        default: 0
        // required: true
    }
}, { timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' } })

PostSchema.plugin(mongoosePaginate);
module.exports = mongoose.model('Post', PostSchema);
