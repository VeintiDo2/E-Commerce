const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

// GET todos los Orders
router.get('/', async (req, res) => {
    const Orders = await Order.find();
    res.json(Orders);
});

// POST nuevo Orders
router.post('/', async (req, res) => {
    try {
        const newOrder = new Order(req.body);
        const saved = await newOrder.save();
        res.status(201).json(saved);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

module.exports = router;
