import express from "express";
import { getGames, inputGames } from "../controllers/gameController.js";

const router = express.Router();

// GET ALL GAMES
router.get("/", getGames);

// INPUT NEW GAMES
router.post("/inputGame", inputGames);

export default router;
