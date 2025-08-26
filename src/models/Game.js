import mongoose from "mongoose";

const guessSchema = new mongoose.Schema({
  word: { type: String, required: true },
  feedback: { type: [String], required: true }, // 5 entries: correct/present/absent
}, { _id: false });

const gameSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  solution: { type: String, required: true },
  guesses: { type: [guessSchema], default: [] },
  status: { type: String, enum: ["playing", "won", "lost"], default: "playing" },
  maxAttempts: { type: Number, default: 6 },
  startedAt: { type: Date, default: Date.now },
  endedAt: { type: Date },
}, { timestamps: true });

export default mongoose.model("Game", gameSchema);
