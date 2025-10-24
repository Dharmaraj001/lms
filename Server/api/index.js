import express from "express";
import cors from "cors";
import connectDB from "../configs/mongodb.js";
import { clerkWebhooks } from "../controllers/webhooks.js";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => res.send("API Working"));
app.post("/clerk", clerkWebhooks);

let isConnected = false;
export default async function handler(req, res) {
  if (!isConnected) {
    await connectDB();
    isConnected = true;
  }
  return app(req, res);
}
