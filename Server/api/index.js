import express from "express";
import cors from "cors";
import connectDB from "../configs/mongodb.js";
import { clerkWebhooks } from "../controllers/webhooks.js";
import { updateRoleToEducator } from "../controllers/educatorcontroller.js";
import educatorRouter from "../Routes/educatorRoutes.js";
import { clerkMiddleware, requireAuth } from "@clerk/express";
import connectClodinary from "../configs/cloudinary.js/index.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(clerkMiddleware)

app.use(ClerkExpressWithAuth()); // middleware
app.use("/educator", educatorRouter);

await connectClodinary()

// Base test route
app.get("/", (req, res) => res.send("API Working"));

// Clerk webhook route
app.post("/clerk", clerkWebhooks);

// ✅ Add your educator route here
app.post("/educator/update-role", requireAuth(), updateRoleToEducator);

let isConnected = false;

export default async function handler(req, res) {
  if (!isConnected) {
    await connectDB();
    isConnected = true;
  }
  return app(req, res);
}
