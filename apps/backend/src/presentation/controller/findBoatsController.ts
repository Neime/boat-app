import { Controller, Get } from '@nestjs/common';
import { Boat } from 'src/boat/entities/boat';
import { FindBoats } from 'src/boat/use-case/findBoats';

@Controller('/boats')
export class FindBoatsController {
  constructor(private readonly boatsUseCase: FindBoats) {}

  @Get()
  async boats(): Promise<Boat[]> {
    return await this.boatsUseCase.execute();
  }
}
