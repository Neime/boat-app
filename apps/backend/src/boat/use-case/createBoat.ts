import { BoatRepository } from 'src/infrastructure/repository/boatRepository';
import { Boat } from '../entities/boat';
import { Injectable } from '@nestjs/common';

type BoatDTO = {
  name: string;
  type: string;
  city: string;
};

@Injectable()
export class CreateBoat {
  constructor(private readonly boatRepository: BoatRepository) {}

  execute(boatDto: BoatDTO): Promise<Boat> {
    return this.boatRepository.createBoat({
      name: boatDto.name,
      type: boatDto.type,
      city: boatDto.city,
    });
  }
}
