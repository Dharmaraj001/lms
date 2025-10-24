import mongoose from "mongoose";

const connectDB = async () => {
  if (mongoose.connection.readyState >= 1) return;
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/lms`);
    console.log("✅ Database connected");
  } catch (err) {
    console.error("❌ Database connection error:", err.message);
    throw err;
  }
};

export default connectDB;
