import { Module } from '@nestjs/common';
import { FindBoatsController } from './presentation/controller/findBoatsController';
import { FindBoats } from './boat/use-case/findBoats';
import { BoatRepository } from './infrastructure/repository/boatRepository';
import { PrismaService } from './infrastructure/repository/prismaService';
import { CreateBoatController } from './presentation/controller/createBoatController';
import { CreateBoat } from './boat/use-case/createBoat';

@Module({
  imports: [],
  controllers: [FindBoatsController, CreateBoatController],
  providers: [FindBoats, CreateBoat, BoatRepository, PrismaService],
})
export class AppModule {}
