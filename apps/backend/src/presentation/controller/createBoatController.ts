import { Body, Controller, Post } from '@nestjs/common';
import { Boat } from 'src/boat/entities/boat';
import { CreateBoat } from 'src/boat/use-case/createBoat';

class BoatDTO {
  name: string;
  type: string;
  city: string;
}

@Controller('/boats')
export class CreateBoatController {
  constructor(private readonly createBoatUseCase: CreateBoat) {}

  @Post()
  async createBoat(@Body() boatDTO: BoatDTO): Promise<Boat> {
    return await this.createBoatUseCase.execute({
      name: boatDTO.name,
      type: boatDTO.type,
      city: boatDTO.city,
    });
  }
}
