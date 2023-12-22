import { BoatRepository } from 'src/infrastructure/repository/boatRepository';
import { Boat } from '../entities/boat';
import { Injectable } from '@nestjs/common';

@Injectable()
export class DeleteBoat {
  constructor(private readonly boatRepository: BoatRepository) {}

  execute(boatId: number): Promise<Boat> {
    return this.boatRepository.deleteBoat({ id: +boatId });
  }
}
