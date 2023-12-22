import { Boat } from '../entities/boat';
import { Injectable } from '@nestjs/common';

@Injectable()
export class FindBoats {
  execute(): Boat[] {
    return [
      {
        name: 'Boaty McBoatface',
        type: 'Speedboat',
        city: 'London',
      },
      {
        name: 'Boat',
        type: 'Sailboat',
        city: 'London',
      },
    ];
  }
}
