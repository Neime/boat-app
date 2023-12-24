import { Controller, Get, Query } from '@nestjs/common';
import { Boat } from 'src/boat/entities/boat';
import { FindBoats } from 'src/boat/use-case/findBoats';
import { Public } from 'src/infrastructure/authorization/auth.gard';

@Controller('/boats')
export class FindBoatsController {
  constructor(private readonly boatsUseCase: FindBoats) {}

  @Public()
  @Get()
  async boats(@Query('term') term: string): Promise<Boat[]> {
    return await this.boatsUseCase.execute(term);
  }
}
