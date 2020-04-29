const mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');

const UserSchema = new mongoose.Schema({
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true
    },
    address: {
        type: String,
        trim: true
    },
    email: {
        type: String,
        trim: true
    },
    username: {
        type: String,
        trim: true
    },
    password: {
        type: String,
        trim: true
    }
    
}, { timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' } })

UserSchema.plugin(mongoosePaginate);
module.exports = mongoose.model('User', UserSchema);
