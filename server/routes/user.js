import express from "express";
import { getUser, updateProfile } from "../controllers/userController.js";

const router = express.Router();

// GET ALL USER
router.get("/", getUser);

// UPDATE USER
router.put("/:id", updateProfile);

export default router;
