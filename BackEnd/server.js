const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Conectado a MongoDB Atlas'))
    .catch((err) => console.error('Error conectando a MongoDB:', err));

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use('/api/products', require('./routes/Products'));
app.use('/api/users', require('./routes/Users'))
app.use("/api/orders", require('./routes/Orders'))

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT} 🧠🔥`);
});
