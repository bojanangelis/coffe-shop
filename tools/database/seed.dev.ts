import { PrismaClient } from '@prisma/client';
import { User } from '../../libs/api/generated-db-types/src';
import { USERS_SEED_DATA } from './seed-data';
const prisma = new PrismaClient();

async function main() {
  await Promise.all(
    USERS_SEED_DATA.map((user: User) => {
      return prisma.user.upsert({
        where: { id: user.id },
        update: user,
        create: user
      });
    })
  ).then(() => console.log('seed user in db 🌱'));
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
