import { Boat } from "../../frontoffice/boat/entities/boat";

export interface BoatRepository {
  findAll(): Boat[];
  byId(id: number): Boat;
  save(boat: Boat): void;
  delete(boat: Boat): void;
  types(): string[];
}
