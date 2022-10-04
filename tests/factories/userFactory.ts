import { faker } from "@faker-js/faker";
import { prisma } from "../../src/database";
import bcrypt from "bcrypt";
import { TypeUserData } from "../../src/types/userTypes";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { User } from "@prisma/client";
dotenv.config();

export async function createUser({
  persist = false,
}): Promise<User | TypeUserData> {
  const user = {
    name: faker.lorem.words(),
    email: faker.internet.email(),
    password: faker.internet.password(4),
  };

  if (persist) {
    const encryptedPassword = bcrypt.hashSync(user.password, 10);
    const insertedUser: User = await prisma.user.create({
      data: { ...user, password: encryptedPassword },
    });
    return { ...insertedUser, ...user };
  }

  return user;
}

export async function createToken() {
  const user = await createUser({ persist: true });
  const JWT_SECRET = process.env.JWT_SECRET;
  const token = jwt.sign({ email: user.email }, JWT_SECRET as string);
  return token;
}

interface Id {
  userId: number;
}

export async function getUserId() {
  const token = await createToken();
  const { userId } = jwt.verify(token, process.env.JWT_SECRET as string) as Id;
  return userId;
}
