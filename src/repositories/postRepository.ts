import { prisma } from "../database";
import { TypePostData } from "../types/postTypes";

export async function insert(post: TypePostData) {
  return await prisma.post.create({ data: post });
}

export async function getPosts() {
  const result = prisma.post.findMany({
    select: {
      id: true,
      street: { select: { id: true, name: true } },
    },
  });
  return result;
}
