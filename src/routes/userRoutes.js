import express from "express";
import { registerUser, getLeaderboard } from "../controllers/userController.js";

const router = express.Router();

router.post("/register", registerUser);
router.get("/leaderboard", getLeaderboard);

export default router;
