/*
  Warnings:

  - A unique constraint covering the columns `[id,city]` on the table `streets` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "streets_id_city_key" ON "streets"("id", "city");
