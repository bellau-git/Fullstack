const mongoose = require('mongoose');
const { Schema } = mongoose;
const blogSchema = new Schema ({
    title: {
        type: String
    },
    text: {
        type: String
    },
    img: {
        type: String
    },
    read: {
        type: Boolean,
        default: false,
    }
})
module.exports = mongoose.model('Blog', blogSchema);