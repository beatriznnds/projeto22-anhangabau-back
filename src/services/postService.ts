import * as postRepo from "../repositories/postRepository";
import * as userRepo from "../repositories/userRepository";
import * as streetRepo from "../repositories/streetRepository";
import { TypePostData } from "../types/postTypes";

export async function insert(post: TypePostData) {
  const validStreet = await streetRepo.validStreet(post.streetId);
  if (!validStreet) {
    throw { type: "Not Found", message: `Street not found!` };
  }
  const validUser = await userRepo.validUser(post.userId);
  if (!validUser) {
    throw { type: "Not Found", message: `User not found!` };
  }
  const newPost = {
    imageUrl: post.imageUrl,
    caption: post.caption,
    streetId: post.streetId,
    userId: post.userId,
  };
  await postRepo.insert(newPost);
}
