import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
    title: { type: String, required: true },
    year: { type: Number},
    genre: { type: String},
    director: { type: String},
});

export default mongoose.model("Movie", movieSchema);