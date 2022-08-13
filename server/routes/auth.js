import express from "express";
import { logout, signIn, signUp } from "../controllers/authController.js";

const router = express.Router();

// USER SIGN UP
router.post("/signup", signUp);

// USER SIGN IN
router.post("/signin", signIn);

// USER LOGOUT
router.post("/logout", logout);

export default router;
