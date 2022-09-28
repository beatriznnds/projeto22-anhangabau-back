/*
  Warnings:

  - A unique constraint covering the columns `[imageUrl]` on the table `posts` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "posts_imageUrl_key" ON "posts"("imageUrl");
