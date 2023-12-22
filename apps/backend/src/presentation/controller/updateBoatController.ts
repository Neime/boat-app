import { Body, Controller, Param, Put } from '@nestjs/common';
import { Boat } from 'src/boat/entities/boat';
import { UpdateBoat } from 'src/boat/use-case/updateBoat';

class BoatDTO {
  name: string;
  type: string;
  city: string;
}

@Controller('/boats/:id')
export class UpdateBoatController {
  constructor(private readonly updateBoatUseCase: UpdateBoat) {}

  @Put()
  async updateBoat(
    @Param('id') id: string,
    @Body() boatDTO: BoatDTO,
  ): Promise<Boat> {
    return await this.updateBoatUseCase.execute({
      id: +id,
      name: boatDTO.name,
      type: boatDTO.type,
      city: boatDTO.city,
    });
  }
}
