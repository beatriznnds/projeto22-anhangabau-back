import { prisma } from "../src/database";

async function main() {
  const street = {
    name: "Rio Anhangabaú",
  };

  await prisma.street.upsert({
    create: street,
    update: {},
    where: {
      name_city: {
        name: street.name,
        city: "São Paulo",
      },
    },
  });

  const coordinates = {
    latitude: "-10.2367",
    longitude: "-20.3476",
    streetId: 1,
  };

  await prisma.cordinates.create({
    data: coordinates,
  });
}

main()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });
