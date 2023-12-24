import { Controller, Get, Param } from '@nestjs/common';
import { Boat } from 'src/boat/entities/boat';
import { FindBoat } from 'src/boat/use-case/findBoat';
import { Public } from 'src/infrastructure/authorization/auth.gard';

@Controller('/boats/:id')
export class FindBoatController {
  constructor(private readonly boatUseCase: FindBoat) {}

  @Public()
  @Get()
  async boats(@Param('id') id: string): Promise<Boat> {
    return await this.boatUseCase.execute(+id);
  }
}
