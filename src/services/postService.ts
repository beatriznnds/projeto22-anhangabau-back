import * as postRepo from "../repositories/postRepository";
import * as userRepo from "../repositories/userRepository";
import * as streetRepo from "../repositories/streetRepository";
import { TypePostData } from "../types/postTypes";
import * as coordinatesRepo from "../repositories/coordinatesRepository";

export async function insert(post: TypePostData, userId: number) {
  const validStreet = await streetRepo.validStreet(post.streetId);
  if (!validStreet) {
    throw { type: "Not Found", message: `Street not found!` };
  }
  const validUser = await userRepo.validUser(post.userId);
  if (!validUser) {
    throw { type: "Not Found", message: `User not found!` };
  }
  const invalidPic = await postRepo.isImageValid(post.imageUrl);
  if (invalidPic) {
    throw { type: "Unauthorized", message: `This pic is already in use!` };
  }
  const coordinates = await coordinatesRepo.findByStreet(post.streetId);
  if (!coordinates) {
    throw { type: "Not Found", message: `Coordinates not found!` };
  }
  const newPost = {
    imageUrl: post.imageUrl,
    caption: post.caption,
    streetId: post.streetId,
    userId: userId,
    coordinateId: coordinates.id,
  };
  await postRepo.insert(newPost);
}

export async function getPosts() {
  const result = await postRepo.getPosts();
  return result;
}
