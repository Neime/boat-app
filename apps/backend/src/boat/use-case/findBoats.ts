import { BoatRepository } from 'src/infrastructure/repository/boatRepository';
import { Boat } from '../entities/boat';
import { Injectable } from '@nestjs/common';

@Injectable()
export class FindBoats {
  constructor(private readonly boatRepository: BoatRepository) {}

  execute(term: string | null): Promise<Boat[]> {
    return this.boatRepository.boats(
      !term ? {} : { where: { name: { contains: term, mode: 'insensitive' } } },
    );
  }
}
