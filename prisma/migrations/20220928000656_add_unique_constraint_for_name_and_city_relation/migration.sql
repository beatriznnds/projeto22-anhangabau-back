/*
  Warnings:

  - A unique constraint covering the columns `[name,city]` on the table `streets` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "streets_id_city_key";

-- CreateIndex
CREATE UNIQUE INDEX "streets_name_city_key" ON "streets"("name", "city");
