import jwt from "jsonwebtoken";
import User from "../models/User.js";

const sign = (user) =>
  jwt.sign({ id: user._id, username: user.username }, process.env.JWT_SECRET, { expiresIn: "7d" });

export const register = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    if (!username?.trim() || !password) throw { status: 400, message: "Username & password required" };

    const exists = await User.findOne({ username });
    if (exists) throw { status: 409, message: "Username already taken" };

    const user = await User.create({ username: username.trim(), password });
    res.status(201).json({ token: sign(user), user: { id: user._id, username: user.username, score: user.score } });
  } catch (e) { next(e); }
};

export const login = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    if (!username?.trim() || !password) throw { status: 400, message: "Username & password required" };

    const user = await User.findOne({ username });
    if (!user) throw { status: 401, message: "Invalid credentials" };

    const ok = await user.comparePassword(password);
    if (!ok) throw { status: 401, message: "Invalid credentials" };

    res.json({ token: sign(user), user: { id: user._id, username: user.username, score: user.score } });
  } catch (e) { next(e); }
};

export const me = async (req, res) => {
  res.json({ id: req.user.id, username: req.user.username });
};
