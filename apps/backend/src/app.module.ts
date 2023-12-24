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
import { Auth } from './authorization/use-case/auth';
import { UserRepository } from './infrastructure/repository/userRepository';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './presentation/controller/authController';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './infrastructure/authorization/auth.gard';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  controllers: [
    FindBoatsController,
    CreateBoatController,
    UpdateBoatController,
    DeleteBoatController,
    FindBoatController,
    AuthController,
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
    FindBoat,
    FindBoats,
    CreateBoat,
    UpdateBoat,
    DeleteBoat,
    BoatRepository,
    UserRepository,
    PrismaService,
    Auth,
  ],
})
export class AppModule {}
