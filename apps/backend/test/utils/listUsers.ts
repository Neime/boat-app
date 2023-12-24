import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function listUsers() {
  try {
    const users = await prisma.user.findMany();

    console.table(users);
  } catch (error) {
    console.error('Error listing user:', error);
  } finally {
    await prisma.$disconnect();
  }
}

listUsers();
