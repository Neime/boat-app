import { BoatRepository } from 'src/infrastructure/repository/boatRepository';
import { Boat } from '../entities/boat';
import { Injectable } from '@nestjs/common';

@Injectable()
export class FindBoat {
  constructor(private readonly boatRepository: BoatRepository) {}

  execute(id: number): Promise<Boat> {
    return this.boatRepository.boat({ id: +id });
  }
}
