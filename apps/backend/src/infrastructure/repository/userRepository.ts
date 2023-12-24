import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from './prismaService';

@Injectable()
export class UserRepository {
  constructor(private prisma: PrismaService) {}

  async findByEmail(email: string): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: { email },
    });
  }
}
