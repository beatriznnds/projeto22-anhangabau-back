/*
  Warnings:

  - A unique constraint covering the columns `[streetId,latitude,longitude]` on the table `coordinates` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "coordinates_streetId_latitude_longitude_key" ON "coordinates"("streetId", "latitude", "longitude");
