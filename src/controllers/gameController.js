import Game from "../models/Game.js";
import User from "../models/User.js";
import { getRandomWord, isValidGuess } from "../utils/words.js";
import { scoreGuess, computeScore } from "../utils/scoring.js";

// Start new game (auth required)
export const startGame = async (req, res, next) => {
  try {
    const newGame = await Game.create({
      userId: req.user.id,
      solution: getRandomWord(),
      guesses: [],
      status: "playing",
      maxAttempts: 6,
      startedAt: new Date(),
    });
    // Do NOT send solution to client
    res.status(201).json({
      id: newGame._id,
      status: newGame.status,
      maxAttempts: newGame.maxAttempts,
      guesses: newGame.guesses,
      startedAt: newGame.startedAt,
    });
  } catch (e) { next(e); }
};

// Submit guess (auth required)
export const submitGuess = async (req, res, next) => {
  try {
    const { gameId, guess } = req.body;
    if (!gameId || !guess) throw { status: 400, message: "Game ID and guess required" };

    const game = await Game.findOne({ _id: gameId, userId: req.user.id });
    if (!game) throw { status: 404, message: "Game not found" };

    if (game.status !== "playing") throw { status: 400, message: `Game already ${game.status}` };

    const g = String(guess).toLowerCase();
    if (!isValidGuess(g)) throw { status: 400, message: "Guess must be a valid 5-letter word" };

    if (game.guesses.some(x => x.word === g)) throw { status: 400, message: "Duplicate guess" };

    if (game.guesses.length >= game.maxAttempts) {
      game.status = "lost";
      game.endedAt = new Date();
      await game.save();
      return res.status(400).json({ message: "No attempts left", status: game.status });
    }

    const feedback = scoreGuess(game.solution, g);
    game.guesses.push({ word: g, feedback });

    // Win/loss check
    const isWin = g === game.solution.toLowerCase();
    if (isWin) {
      game.status = "won";
      game.endedAt = new Date();

      // Score update
      const user = await User.findById(game.userId);
      if (user) {
        const add = computeScore({
          attempts: game.guesses.length,
          startedAt: game.startedAt,
          endedAt: game.endedAt,
        });
        user.score += add;
        await user.save();
      }
    } else if (game.guesses.length >= game.maxAttempts) {
      game.status = "lost";
      game.endedAt = new Date();
    }

    await game.save();

    // Return safe game view
    res.json({
      id: game._id,
      status: game.status,
      maxAttempts: game.maxAttempts,
      guesses: game.guesses,
      endedAt: game.endedAt,
      // Optionally: reveal solution when game over
      solution: game.status !== "playing" ? game.solution : undefined,
    });
  } catch (e) { next(e); }
};
