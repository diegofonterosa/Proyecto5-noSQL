import mongoose from "mongoose";

const cinemaSchema = new mongoose.Schema({
    name: { type: String, required: true},
    location: { type: String },
    capacity: { type: Number},
});

export default mongoose.model("Cinema", cinemaSchema);