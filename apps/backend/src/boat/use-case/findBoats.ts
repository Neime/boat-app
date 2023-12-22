import { BoatRepository } from 'src/infrastructure/repository/boatRepository';
import { Boat } from '../entities/boat';
import { Injectable } from '@nestjs/common';

@Injectable()
export class FindBoats {
  constructor(private readonly boatRepository: BoatRepository) {}

  execute(): Promise<Boat[]> {
    return this.boatRepository.boats({});
  }
}
