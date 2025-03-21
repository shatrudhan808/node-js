
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name : {
        type: String,
    },
    price : {
        type: Number,
    },
    category : {
        type: String,
    },
    inStock : {
        type: Boolean,
        default: true
    },
    tags : {
        type: [String],
    },
});

module.exports = mongoose.model('Product', productSchema);