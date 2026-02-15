import Movie from "../models/movie.model.js";

export const getAllMovies = async (req, res) => {
    try {
        const movies = await Movie.find();
        res.json(movies);
    } catch (err) {
        res.status(500).json({ message: "Server Error", error: err.message });
    }
};

export const getMovieById = async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.id);
        if (!movie)
            return res.status(404).jason({ message: "Movie not found"});
        res.json(movie);
    } catch (err) {
        res.status(400).json({ message: "Invalid ID", error: err.message });
    }
};

export const createMovie = async (req, res) => {
    try {
        const newMovie = new Movie(req.body);
        const saved = await newMovie.save();
        res.status(201).json(saved);
    } catch (err) {
        res.status(400).json({ message: "Bad Request", error: err.message});
    }
};

export const updateMovie = async (req, res) => {
    try {
        const updated = await Movie.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true}
        );
        if (!updated)
            return res.status(404).json({ message: "Movie not found"});
        res.json(updated);
    } catch (err) {
        res.status(400).json({ message: "Bad Request", error: err.message });
    }
};

export const deleteMovie = async (req, res) => {
    try {
        const removed = await Movie.findByIdAndDelete(req.params.id);
        if (!removed)
            return res.status(404).json({ message: "Movie not found" });
        res.json({ message: "Movie deleted" });
    } catch (err) {
        res.status(400).json({ message: "Bad Request", error: err.message});
    }
};