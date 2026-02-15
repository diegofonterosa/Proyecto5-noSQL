import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

import movieRoutes from "./src/routes/movie.routes.js";
import cinemaRoutes from "./src/routes/cinema.routes.js";

dotenv.config();

const server = express();
server.use(express.json());

server.use("/api/movies", movieRoutes);
server.use("/api/cinemas", cinemaRoutes);

const PORT = process.env.PORT || 8080;
const MONGO_URI = process.env.MONGO_URI

if (!MONGO_URI) {
    console.error("MONGO_URI no está definida en el archivo .env");
    process.exit(1);
}

mongoose.connect(MONGO_URI)
    .then(() => {
        console.log("Conectado a MongoDB");
        server.listen(PORT, () => {
            console.log(`Servidor escuchando en http://localhost:${PORT}`);
        });
    })
    .catch((error) => {
        console.error("Error conectando a MongoDB", error);
    });