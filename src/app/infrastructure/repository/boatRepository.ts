import { Boat } from "../../boat/entities/boat";

export interface BoatRepository {
  findAll(): Boat[];
  byId(id: number): Boat;
  save(boat: Boat): void;
  delete(boat: Boat): void;
}
