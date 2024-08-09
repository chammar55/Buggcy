import express from "express";
import { signUp, signIn } from "../controllers/authController.js";
import passport from "passport";

const router = express.Router();

router.post("/signup", signUp);
router.post("/signin", signIn);
router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);
router.get(
  "/google/callback",
  passport.authenticate("google", { session: false }),
  (req, res) => {
    res.redirect("/profile");
  }
);

export { router as authRouter };
