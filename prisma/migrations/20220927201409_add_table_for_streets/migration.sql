-- CreateTable
CREATE TABLE "Street" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "city" TEXT[] DEFAULT ARRAY['São Paulo']::TEXT[],

    CONSTRAINT "Street_pkey" PRIMARY KEY ("id")
);
