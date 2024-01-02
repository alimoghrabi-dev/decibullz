"use server";

import bcrypt from "bcrypt";
import { db } from "../db";

export const createUser = async (params: {
  username: string;
  email: string;
  password: string;
}) => {
  const { username, email, password } = params;

  const hashedPassword = await bcrypt.hash(password, 10);

  const existingUser = await db.user.findUnique({
    where: {
      email,
    },
  });

  if (existingUser) {
    throw new Error("User already exists");
  }

  await db.user.create({
    data: {
      username,
      email,
      password: hashedPassword,
    },
  });

  //TODO: verification email
};
