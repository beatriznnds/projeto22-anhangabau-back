/*
  Warnings:

  - You are about to drop the `Street` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Street";

-- CreateTable
CREATE TABLE "streets" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "city" TEXT[] DEFAULT ARRAY['São Paulo']::TEXT[],

    CONSTRAINT "streets_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "posts" (
    "id" SERIAL NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "caption" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "streetId" INTEGER NOT NULL,

    CONSTRAINT "posts_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "posts" ADD CONSTRAINT "posts_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "posts" ADD CONSTRAINT "posts_streetId_fkey" FOREIGN KEY ("streetId") REFERENCES "streets"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
