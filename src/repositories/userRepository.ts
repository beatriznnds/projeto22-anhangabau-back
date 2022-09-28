import { prisma } from "../database";

export async function validUser(userId: number) {
  return await prisma.user.findFirst({ where: { id: userId } });
}
