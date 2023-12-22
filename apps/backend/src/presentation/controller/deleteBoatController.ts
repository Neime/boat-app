import { Controller, Delete, Param } from '@nestjs/common';
import { Boat } from 'src/boat/entities/boat';
import { DeleteBoat } from 'src/boat/use-case/deleteBoat';

@Controller('/boats/:id')
export class DeleteBoatController {
  constructor(private readonly deleteBoatUseCase: DeleteBoat) {}

  @Delete()
  async deleteBoat(@Param('id') id: string): Promise<Boat> {
    return await this.deleteBoatUseCase.execute(+id);
  }
}
