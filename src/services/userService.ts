import * as userRepo from "../repositories/userRepository";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { TypeUserData } from "../types/userTypes";

dotenv.config();

export async function emailValidation(email: string) {
  const invalidEmail = await userRepo.findByEmail(email);
  if (invalidEmail) {
    throw { type: "Conflict", message: `This email is already in use!` };
  }
}

export async function insert(user: TypeUserData) {
  await emailValidation(user.email);
  const encryptedPassword = bcrypt.hashSync(user.password, 10);
  const newUser = { ...user, password: encryptedPassword };
  await userRepo.insert(newUser);
}

export async function isUserValid(user: TypeUserData) {
  const validUser = await userRepo.findByEmail(user.email);
  if (!validUser) {
    throw { type: "Unauthorized", message: `Incorrect password or email!` };
  }
  const validPasssword = bcrypt.compareSync(user.password, validUser.password);
  if (!validPasssword) {
    throw { type: "Unauthorized", message: `Incorrect password or email!` };
  }
  return validUser;
}

export async function login(user: TypeUserData) {
  const validUser = await isUserValid(user);
  const JWT_SECRET = process.env.JWT_SECRET;
  const token = jwt.sign(
    { email: user.email, userId: validUser.id, name: user.name },
    JWT_SECRET as string
  );
  return token;
}
