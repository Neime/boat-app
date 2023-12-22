import { Boat } from "../../frontoffice/boat/entities/boat";
import { Observable } from "rxjs";
export interface BoatRepository {
  findAll(): Observable<Boat[]>;
  byId(id: number): Boat;
  save(boat: Boat): void;
  delete(boat: Boat): void;
  types(): string[];
}
