import { prisma } from "../database";
import { TypePostData } from "../types/postTypes";

export async function insert(post: TypePostData) {
  return await prisma.post.create({ data: post });
}
