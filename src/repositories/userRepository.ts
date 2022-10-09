import { prisma } from "../database";
import { TypeUserData } from "../types/userTypes";

export async function validUser(userId: number) {
  return await prisma.user.findFirst({ where: { id: userId } });
}

export async function insert(user: TypeUserData) {
  return await prisma.user.create({ data: user });
}

export async function findByEmail(email: string) {
  return await prisma.user.findFirst({ where: { email } });
}

export async function reset() {
  await prisma.user.deleteMany();
}
