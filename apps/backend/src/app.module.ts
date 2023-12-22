import { Module } from '@nestjs/common';
import { FindBoatsController } from './presentation/controller/findBoatsController';
import { FindBoats } from './boat/use-case/findBoats';
import { BoatRepository } from './infrastructure/repository/boatRepository';
import { PrismaService } from './infrastructure/repository/prismaService';
import { CreateBoatController } from './presentation/controller/createBoatController';
import { CreateBoat } from './boat/use-case/createBoat';
import { UpdateBoat } from './boat/use-case/updateBoat';
import { DeleteBoat } from './boat/use-case/deleteBoat';
import { UpdateBoatController } from './presentation/controller/updateBoatController';
import { DeleteBoatController } from './presentation/controller/deleteBoatController';
import { FindBoat } from './boat/use-case/findBoat';
import { FindBoatController } from './presentation/controller/findBoatController';

@Module({
  imports: [],
  controllers: [
    FindBoatsController,
    CreateBoatController,
    UpdateBoatController,
    DeleteBoatController,
    FindBoatController,
  ],
  providers: [
    FindBoat,
    FindBoats,
    CreateBoat,
    UpdateBoat,
    DeleteBoat,
    BoatRepository,
    PrismaService,
  ],
})
export class AppModule {}
