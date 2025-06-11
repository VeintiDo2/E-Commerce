const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const User = require('../models/User');

// GET todos los Usuarios
router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json({
            success: true,
            message: 'Usuarios obtenidos exitosamente',
            users: users,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: `Error al obtener los usuarios: ${error.message}`
        });
    }
});

// Verificar si el usuario existe
router.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });

        if (!user) {
            return res.status(404).json({ success: false, message: "Usuario no encontrado" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ success: false, message: "Contraseña incorrecta" });
        }

        res.json({ success: true, message: "Usuario autenticado", user });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// POST nuevo Usuarios
router.post('/', async (req, res) => {
    try {
        const newUser = new User(req.body);
        const saved = await newUser.save();
        res.status(201).json(saved);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// PUT actualizar Usuarios
router.put('/:id', async (req, res) => {
    try {
        const updated = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updated);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// DELETE eliminar Usuarios
router.delete('/:id', async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.json({ message: 'Usuarios eliminado' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

module.exports = router;
