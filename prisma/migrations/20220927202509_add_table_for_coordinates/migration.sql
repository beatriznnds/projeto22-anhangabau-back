-- CreateTable
CREATE TABLE "coordinates" (
    "id" SERIAL NOT NULL,
    "latitude" TEXT NOT NULL,
    "longitude" TEXT NOT NULL,
    "streetId" INTEGER NOT NULL,

    CONSTRAINT "coordinates_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "coordinates" ADD CONSTRAINT "coordinates_streetId_fkey" FOREIGN KEY ("streetId") REFERENCES "streets"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
