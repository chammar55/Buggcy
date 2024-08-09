import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { prisma } from "../myPrisma.js";

export const signUp = async (req, res) => {
  const { email, password, name, age, gender, profilePicUrl } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  if (!email || !password || !name || !age || !gender || !profilePicUrl) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name,
        age: parseInt(age),
        gender,
        profilePicUrl,
        role: "USER",
      },
    });

    console.log("Received data:", req.body);

    const token = jwt.sign(
      { userId: user.id, role: user.role },
      process.env.JWT_SECRET
    );
    res.status(201).json({ user });
  } catch (error) {
    res.status(400).json({ error: "User already exists" });
  }
};

export const signIn = async (req, res) => {
  const { email, password } = req.body;

  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) return res.status(404).json({ error: "User not found" });

  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) return res.status(401).json({ error: "Invalid password" });

  const token = jwt.sign(
    { userId: user.id, role: user.role },
    process.env.JWT_SECRET
  );
  res.status(200).json({ token });
};
