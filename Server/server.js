import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./configs/mongodb.js";
import connectClodinary from "./configs/cloudinary.js";
import educatorRouter from "./Routes/educatorRoutes.js";
import { clerkWebhooks } from "./controllers/webhooks.js";

dotenv.config();

const app = express();

// ✅ 1. Clerk webhook route must be BEFORE express.json()
app.post(
  "/clerk",
  express.raw({ type: "application/json" }), // raw body for svix verification
  clerkWebhooks
);

// ✅ 2. Normal middlewares (safe to add after webhook)
app.use(cors());
app.use(express.json());

// ✅ 3. Connect MongoDB and Cloudinary
await connectDB();
await connectClodinary();

// ✅ 4. Mount your other routes
app.use("/api/educator", educatorRouter);

// ✅ 5. Base route for sanity check
app.get("/", (req, res) => res.send("🚀 API Working Successfully!"));

// ✅ 6. Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
