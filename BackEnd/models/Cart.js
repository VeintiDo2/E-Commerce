const mongoose = require('mongoose');

// Subdocumento para cada producto en el carrito.
const cartItemSchema = new mongoose.Schema({
    productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
    quantity: { type: Number, required: true, min: 1 },
}, { _id: false });

// Esquema principal del carrito.
const cartSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    items: [cartItemSchema],
    paidAt: { type: Date },
}, { timestamps: true });

module.exports = mongoose.model('Cart', cartSchema);
