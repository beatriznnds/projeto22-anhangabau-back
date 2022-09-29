/*
  Warnings:

  - Added the required column `coordinateId` to the `posts` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "posts" ADD COLUMN     "coordinateId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "posts" ADD CONSTRAINT "posts_coordinateId_fkey" FOREIGN KEY ("coordinateId") REFERENCES "coordinates"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
