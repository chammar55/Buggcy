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

// app.post("/users", async (req, res) => {
//   const { email, password, name, age, gender, profilePicUrl } = req.body;
//   try {
//     const user = await prisma.user.create({
//       data: {
//         name,
//         email,
//         password,
//         age,
//         gender,
//         profilePicUrl,
//       },
//     });
//     res.status(201).json(user);
//   } catch (error) {
//     console.error("Error creating user:", error);
//     res.status(500).json({ error: "Error creating user" });
//   }
// });

const port = config.port;

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
