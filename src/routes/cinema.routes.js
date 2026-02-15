import express from "express";
import {
    getAllCinemas,
    getCinemaById,
    createCinema,
    updateCinema,
    deleteCinema,
} from "../controllers/cinema.controller.js"

const router = express.Router();

router.get("/", getAllCinemas);
router.get("/:id", getCinemaById);
router.post("/", createCinema);
router.put("/:id", updateCinema);
router.delete("/:id", deleteCinema);

export default router;