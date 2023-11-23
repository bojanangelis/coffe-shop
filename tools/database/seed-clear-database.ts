const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function clearDatabase() {
  try {
    await prisma.user.deleteMany();

    console.log('Database cleared 🌱');
  } catch (error) {
    console.error('Error clearing database', error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

clearDatabase();