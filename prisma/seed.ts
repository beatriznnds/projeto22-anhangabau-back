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
}

main()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });
