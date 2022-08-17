import express from "express";
import {
  getGames,
  inputGames,
  updatePlayedUser,
} from "../controllers/gameController.js";

const router = express.Router();

// GET ALL GAMES
router.get("/", getGames);

// INPUT NEW GAMES
router.post("/inputGame", inputGames);

// UPDATE USER PLAYED GAMES
router.put("/:id", updatePlayedUser);

export default router;
