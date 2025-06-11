require("dotenv").config();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const User = require("./models/User");

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(async () => {
        console.log("Conectado a MongoDB");

        const users = await User.find();

        for (const user of users) {
            // Verifica si la contraseña ya está cifrada (opcional, si tienes forma de detectarlo)
            const alreadyHashed = user.password.startsWith("$2b$") || user.password.startsWith("$2a$");
            if (!alreadyHashed) {
                const hashedPassword = await bcrypt.hash(user.password, 10);
                user.password = hashedPassword;
                await user.save();
                console.log(`Contraseña encriptada para el usuario: ${user.username}`);
            } else {
                console.log(`Contraseña ya cifrada para: ${user.username}`);
            }
        }

        console.log("Encriptación completada.");
        mongoose.disconnect();
    })
    .catch((err) => {
        console.error("Error al conectar a MongoDB:", err);
    });
