import express from 'express';
import cors from 'cors';
import dotenv from "dotenv";
dotenv.config();
import 'dotenv/config';
import connectDB from './configs/mongodb.js';
import { clerkWebhooks } from './controllers/webhooks.js';

const app = express();


const PORT = process.env.PORT || 5000;
const mongoURL = process.env.MONGODB_URI;

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => res.send('API Working'));
app.post('/clerk', clerkWebhooks);

// Database connection — lazy initialize
let isConnected = false;
async function ensureDB() {
  if (!isConnected) {
    try {
      await connectDB();
      isConnected = true;
      console.log('✅ MongoDB connected');
    } catch (err) {
      console.error('❌ MongoDB connection failed:', err.message);
    }
  }
}

// Export handler for Vercel
export default async function handler(req, res) {
  await ensureDB();
  return app(req, res);
}

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
