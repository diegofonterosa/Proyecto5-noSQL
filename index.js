const express = require("express");
const mongoose = require("mongoose")
require("dotenv").config();

const movieRoutes = require("./src/routes/movie.routes")
const cinemaRoutes = require("./src/routes/cinema.routes")

const server = express();

server.use(express.json());

server.use("/api/movies", movieRoutes);
server.use("/api/cinemas", cinemaRoutes);

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("Conectado a la base de datos");
        server.listen(8080, () => {
            console.log("Servidor escuchando en http://localhost:8080");
        });
    })
    .catch((error) => {
        console.error("Error conectando a MongoDB", error);
    });