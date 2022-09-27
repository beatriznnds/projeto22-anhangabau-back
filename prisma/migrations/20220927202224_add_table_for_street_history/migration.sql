-- CreateTable
CREATE TABLE "history" (
    "id" SERIAL NOT NULL,
    "streetId" INTEGER NOT NULL,
    "text" TEXT NOT NULL,

    CONSTRAINT "history_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "history" ADD CONSTRAINT "history_streetId_fkey" FOREIGN KEY ("streetId") REFERENCES "streets"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
