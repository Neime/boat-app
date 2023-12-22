import { Module } from '@nestjs/common';
import { FindBoatsController } from './presentation/controller/findBoatsController';
import { FindBoats } from './boat/use-case/findBoats';

@Module({
  imports: [],
  controllers: [FindBoatsController],
  providers: [FindBoats],
})
export class AppModule {}
