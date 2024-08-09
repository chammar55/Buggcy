import express from "express";
import cors from "cors";
import passport from "passport";
import { authRouter } from "./routes/authRoutes.js";
import { profileRouter } from "./routes/profileRoutes.js";
import { rateLimiter } from "./middlewares/rateLimiter.js";
import "./utils/passport.js";
import { config } from "./config/env.js";
import { prisma } from "./config/db.js";

const app = express();

app.use(express.json());
app.use(cors());
app.use(passport.initialize());
app.use(rateLimiter);

// Routes
app.use("/api/auth", authRouter);
app.use("/api/profile", profileRouter);

const port = config.port;

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
