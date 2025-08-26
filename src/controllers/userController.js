import User from "../models/User.js";

// Create/Register User
export const registerUser = async (req, res) => {
  try {
    const { username } = req.body;
    if (!username) return res.status(400).json({ message: "Username required" });

    let user = await User.findOne({ username });
    if (user) return res.status(200).json(user); // return existing user

    user = new User({ username });
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

// Get Leaderboard (Top 10 users sorted by score)
export const getLeaderboard = async (req, res) => {
  try {
    const users = await User.find().sort({ score: -1 }).limit(10);
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};
