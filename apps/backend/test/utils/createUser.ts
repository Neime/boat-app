import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function createUser() {
  try {
    await prisma.user.deleteMany();
    const newUser = await prisma.user.create({
      data: {
        name: 'John Doe',
        email: 'john@example.com',
        password: '123456',
      },
    });

    console.log('User created:', newUser);
  } catch (error) {
    console.error('Error creating user:', error);
  } finally {
    await prisma.$disconnect();
  }
}

createUser();
