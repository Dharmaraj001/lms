// Server/middlewares/Authmiddleware.js
import User from "../models/User.js";

export const protectEducator = async (req, res, next) => {
  try {
    // ✅ Get Clerk user info from req.auth()
    const { userId } = req.auth(); // <-- new Clerk syntax

    console.log("Clerk userId:", userId);

    if (!userId) {
      return res.status(401).json({ message: "Not authenticated" });
    }

    // ✅ Find MongoDB user by Clerk ID (not by _id)
    const user = await User.findOne({ clerkId: userId });

    console.log("MongoDB user found:", user);

    if (!user) {
      return res.status(404).json({ message: "User not found in DB" });
    }

    // ✅ Check if the user is an educator
    if (user.role !== "educator") {
      return res.status(403).json({ message: "Access denied. Not an educator" });
    }

    req.user = user;
    next();
  } catch (error) {
    console.error("protectEducator error:", error);
    res.status(500).json({ message: "Server error" });
  }
};
