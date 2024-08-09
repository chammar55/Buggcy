import { prisma } from "../myPrisma.js";

export const getProfile = async (req, res) => {
  const user = req.user;

  const profile = await prisma.user.findUnique({
    where: { id: user.userId },
  });

  res.status(200).json(profile);
};

export const updateProfile = async (req, res) => {
  const user = req.user;
  const data = req.body;

  const updatedProfile = await prisma.user.update({
    where: { id: user.userId },
    data,
  });

  res.status(200).json(updatedProfile);
};
