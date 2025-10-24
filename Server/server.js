import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

import connectDB from "./configs/mongodb.js";
import { clerkWebhooks } from "./controllers/webhooks.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => res.send("API Working"));
app.post("/clerk", clerkWebhooks);

// Lazy DB connection for serverless
let dbConnected = false;
async function ensureDB() {
  if (!dbConnected) {
    await connectDB();
    dbConnected = true;
  }
}

// Vercel handler
export default async function handler(req, res) {
  await ensureDB();
  return app(req, res);
}

// Only start a server when running locally
if (process.env.VERCEL !== "1") {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
}
