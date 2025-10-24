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

await connectDB(); // normal connect for local dev

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
