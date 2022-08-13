import express from "express";
import { getUser, updateProfile } from "../controllers/userController.js";
import { verifyToken } from "../verifyToken.js";

const router = express.Router();

// GET ALL USER
router.get("/", getUser);

// UPDATE USER
router.put("/:id", verifyToken, updateProfile);

export default router;
