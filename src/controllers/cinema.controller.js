import Cinema from "../models/cinema.model.js"

export const getAllCinemas = async (req, res) => {
    try {
        const cinemas = await Cinema.find();
        res.json(cinemas);
    } catch (err) {
        res.status(500).json({ message: err.message});
    }
};

export const getCinemaById = async (req, res) => {
    try {
        const cinema = await Cinema.findById(req.params.id);
        if (!cinema) return res.status(404).json({ message: "Cinema not found" });
        res.json(cinema);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

export const createCinema = async (req, res) => {
    try {
        const newCinema = new Cinema(req.body);
        const saved = await newCinema.save();
        res.status(201).json(saved);
    } catch (err) {
        res.status(400).json({ message: err.message});
    }
};

export const updateCinema = async (req, res) => {
    try {
        const updated = await Cinema.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        if (!updated) return res.status(404).jason({ message: "Cinema not found"});
        res.json(updated);
    } catch (err) {
        res.status(400).json({ message: err.message});
    }
};

export const deleteCinema = async (req, res) => {
    try {
        const removed = await Cinema.findByIdAndDelete(req.params.id);
        if (!removed) return res.status(404).json({ message: "Cinema not found"});
        res.json({ message: "Cinema deleted"});
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};