const mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');

const LoginSchema = new mongoose.Schema({
    
    username: {
        type: String,
        trim: true
    },
    password: {
        type: String,
        trim: true
    }
    
}, { timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' } })

LoginSchema.plugin(mongoosePaginate);
module.exports = mongoose.model('Login', LoginSchema);
