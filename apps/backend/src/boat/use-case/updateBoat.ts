import { BoatRepository } from 'src/infrastructure/repository/boatRepository';
import { Boat } from '../entities/boat';
import { Injectable } from '@nestjs/common';

type BoatDTO = {
  id: number;
  name: string;
  type: string;
  city: string;
};

@Injectable()
export class UpdateBoat {
  constructor(private readonly boatRepository: BoatRepository) {}

  execute(boatDto: BoatDTO): Promise<Boat> {
    return this.boatRepository.updateBoat({
      where: { id: boatDto.id },
      data: { name: boatDto.name, type: boatDto.type, city: boatDto.city },
    });
  }
}
