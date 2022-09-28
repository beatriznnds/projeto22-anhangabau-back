import { Post } from "@prisma/client";

export type TypePostData = Omit<Post, "id">;
