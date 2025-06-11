const mongoose = require('mongoose');

// Subdocumento para cada producto en la orden
const orderItemSchema = new mongoose.Schema({
    productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
    quantity: { type: Number, required: true, min: 1 },
}, { _id: false });

// Esquema principal de la orden
// Enum: Sirve para definir un conjunto de valores posibles para un campo. Solo estos valores son válidos para este campo.
const orderSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    items: [orderItemSchema],
    totalAmount: { type: Number, required: true },
    status: { type: String, enum: ['pendiente', 'pagado', 'enviado', 'entregado', 'cancelado'], default: 'pendiente' },
    paymentMethod: { type: String, enum: ['tarjeta', 'paypal', 'efectivo', 'otro'], default: 'tarjeta' },
    paidAt: { type: Date },
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema);
