const mongoose = require('mongoose');

const specSchema = new mongoose.Schema({
    key: { type: String, required: true },
    value: { type: String, required: true }
}, { _id: false });

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: String,
    category: String,
    brand: String,
    productImage: String,
    stock: { type: Number, default: 0 },
    specs: [specSchema]
});

module.exports = mongoose.model('Product', productSchema);

