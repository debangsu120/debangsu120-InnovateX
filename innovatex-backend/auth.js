// auth.js
import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import dotenv from "dotenv";

dotenv.config();

const client = new MongoClient(process.env.MONGO_URI);
await client.connect();
const db = client.db();

export const auth = betterAuth({
  secret: process.env.BETTER_AUTH_SECRET,
  database: mongodbAdapter(db),

  // ✅ Enable magic link login
  email: {
    magicLink: {
      enabled: true,
      sendMagicLink: async ({ email, url }) => {
        console.log(`✨ Magic link for ${email}: ${url}`);
        // In production: use Resend, Nodemailer, AWS SES, etc.
      },
    },
  },

  telemetry: { enabled: false },
});
