import express from "express";
import { startGame, submitGuess } from "../controllers/gameController.js";
import { auth } from "../middleware/auth.js";

const router = express.Router();

router.post("/start", auth, startGame);
router.post("/guess", auth, submitGuess);

export default router;
