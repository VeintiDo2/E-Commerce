const express = require('express');
const router = express.Router();
const multer = require('multer');
const Product = require('../models/Product');
const path = require('path');

// 📂 Configuración del almacenamiento de archivos
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/'); // Carpeta donde se guardan las imágenes
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, uniqueSuffix + path.extname(file.originalname)); // nombre.jpg
    }
});

const upload = multer({ storage: storage });

// Traer los productos dependiendo de los filtros
router.get('/', async (req, res) => {
    try {
        const { price, category } = req.query;
        console.log("Filtros recibidos:", req.query);

        // Validar que 'price' existe y es un número
        if (!price || isNaN(price)) {
            return res.status(400).json({
                success: false,
                message: "Falta el parámetro 'price' o no es válido"
            });
        }

        // Si no es "Todos", validamos si la categoría existe
        if (category !== "Todos") {
            const categoryExists = await Product.exists({ category: category });
            if (!categoryExists) {
                return res.status(404).json({
                    success: false,
                    message: "Categoría no encontrada"
                });
            }
        }

        // Si es "Todos", solo filtramos por precio
        if (category === "Todos") {
            const allProducts = await Product.find({ price: { $lte: price } });
            return res.status(200).json({
                success: true,
                message: "Todos los productos obtenidos exitosamente",
                products: allProducts
            });
        }

        // Filtrar por precio y categoría específica
        const filterProducts = await Product.find({
            price: { $lte: price },
            category: category
        });

        if (filterProducts.length > 0) {
            return res.status(200).json({
                success: true,
                message: 'Productos obtenidos exitosamente',
                products: filterProducts,
            });
        } else {
            return res.status(404).json({
                success: false,
                message: "No hay resultados"
            });
        }

    } catch (error) {
        res.status(400).json({
            success: false,
            message: `Error al obtener los productos: ${error.message}`
        });
    }
});


// Traer un producto por ID
router.get('/:id', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id); //Encuentra un producto por su ID. Este recibe el ID del producto desde la URL.
        if (!product) {
            return res.status(404).json({
                success: false,
                message: 'Producto no encontrado',
            });
        }
        res.json({
            success: true,
            message: 'Producto obtenido exitosamente',
            product,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: `Error al obtener el producto: ${error.message}`,
        });
    }
});

// Crear un nuevo producto
router.post('/', upload.single('productImage'), async (req, res) => {
    try {
        //Crear un nuevo producto
        const newProduct = new Product({
            name: req.body.name,
            price: req.body.price,
            description: req.body.description,
            category: req.body.category,
            brand: req.body.brand,
            productImage: req.file ? req.file.path : null,
            stock: req.body.stock,
            specs: req.body.specs ? JSON.parse(req.body.specs) : []
        });
        // Guardar el producto en la base de datos
        const saved = await newProduct.save();
        res.status(201).json({
            success: true,
            message: "Producto creado exitosamente"
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: `Error al crear el producto: ${error.message}`
        });
    }
});

// PUT actualizar producto
router.put('/:id', async (req, res) => {
    try {
        const updated = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updated);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// DELETE eliminar producto
router.delete('/:id', async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id);
        res.json({ message: 'Producto eliminado' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

module.exports = router;
