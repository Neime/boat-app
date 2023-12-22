import { Injectable } from '@nestjs/common';
import { Boat, Prisma } from '@prisma/client';
import { PrismaService } from './prismaService';

@Injectable()
export class BoatRepository {
  constructor(private prisma: PrismaService) {}

  async boat(
    boatWhereUniqueInput: Prisma.BoatWhereUniqueInput,
  ): Promise<Boat | null> {
    return this.prisma.boat.findUnique({
      where: boatWhereUniqueInput,
    });
  }

  async boats(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.BoatWhereUniqueInput;
    where?: Prisma.BoatWhereInput;
    orderBy?: Prisma.BoatOrderByWithRelationInput;
  }): Promise<Boat[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.boat.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createBoat(data: Prisma.BoatCreateInput): Promise<Boat> {
    return this.prisma.boat.create({
      data,
    });
  }

  async updateBoat(params: {
    where: Prisma.BoatWhereUniqueInput;
    data: Prisma.BoatUpdateInput;
  }): Promise<Boat> {
    const { data, where } = params;
    return this.prisma.boat.update({
      data,
      where,
    });
  }

  async deleteBoat(where: Prisma.BoatWhereUniqueInput): Promise<Boat> {
    return this.prisma.boat.delete({
      where,
    });
  }
}
