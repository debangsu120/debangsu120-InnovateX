// server.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { auth } from "./auth.js"; 
import { toNodeHandler, fromNodeHeaders } from "better-auth/node";

dotenv.config();
const app = express();

// CORS configuration for both development and production
const allowedOrigins = [
    'http://localhost:3000', // Local development
    'https://localhost:3000', // HTTPS local development (if needed)
    'https://innovate-x-sepia.vercel.app', // Production Vercel deployment
    'https://debangsu120-innovatex-3.onrender.com' // Backend Render URL (for self-requests)
];

app.use(cors({
    origin: function (origin, callback) {
        // Allow requests with no origin (like mobile apps or curl requests)
        if (!origin) return callback(null, true);
        
        if (allowedOrigins.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true
}));
app.use(express.json());

// --- MongoDB connection for participants ---
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ Mongoose connected"))
  .catch((err) => console.error("❌ Mongoose DB Error:", err));

// --- Participant Schema ---
const participantSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
  },
  { timestamps: true }
);
const Participant = mongoose.model("Participant", participantSchema);

// --- Public event registration route (MUST be before Better Auth routes) ---
app.post("/api/register", async (req, res) => {
  console.log("Registration endpoint hit:", req.body);
  console.log("Headers:", req.headers);
  
  // Add CORS headers explicitly for this endpoint
  res.header('Access-Control-Allow-Origin', req.headers.origin);
  res.header('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Credentials', 'true');
  
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  const { name, email, phone } = req.body;
  if (!name || !email || !phone)
    return res.status(400).json({ message: "All fields are required" });

  try {
    const participant = await Participant.create({ name, email, phone });
    res
      .status(201)
      .json({ message: "Registration successful", participant });
  } catch (err) {
    console.error("Registration error:", err);
    if (err.code === 11000)
      return res.status(400).json({ message: "Email already registered" });
    res.status(500).json({ message: "Server error" });
  }
});

// --- Mount Better Auth routes ---
// Handles /api/auth/register, /api/auth/login, /api/auth/logout, etc.
app.all("/api/auth/*", toNodeHandler(auth)); 

// --- Get current session ---
app.get("/api/me", async (req, res) => {
  const session = await auth.api.getSession({
    headers: fromNodeHeaders(req.headers),
  });
  if (!session) return res.status(401).json({ message: "Not authenticated" });
  res.json(session);
});

// --- Protected route: list participants ---
app.get("/api/participants", async (req, res) => {
  const session = await auth.api.getSession({
    headers: fromNodeHeaders(req.headers),
  });
  if (!session) return res.status(401).json({ message: "Unauthorized" });

  const participants = await Participant.find().sort("-createdAt");
  res.json({ participants });
});

// --- Start server ---
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`✅ Server running at http://localhost:${PORT}`)
);
