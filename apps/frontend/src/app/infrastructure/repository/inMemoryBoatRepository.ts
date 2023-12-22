import { Injectable } from "@angular/core";
import { Boat } from "../../frontoffice/boat/entities/boat";
import { BoatRepository } from "./boatRepository";
import { Observable, of } from "rxjs";

@Injectable()
export class InMemoryBoatRepository implements BoatRepository {
  #boats: Boat[] = [
    {
      id: 1,
      name: "Beneteau — Oceanis 343 (2007)",
      type: "motor",
      city: "Portsmouth, RI",
    },
    {
      id: 2,
      name: "J Boats — J80 (2008)",
      type: "motor",
      city: "Portsmouth, RI",
    },
    {
      id: 3,
      name: "J Boats — J40 (2008)",
      type: "sail",
      city: "Sables d'Olonne, France",
    },
    { id: 4, name: "Boat1", type: "motor", city: "Portsmouth, RI" },
    { id: 5, name: "Boat2", type: "sail", city: "Barcelona" },
    { id: 6, name: "Boat3", type: "kayak", city: "Portsmouth, RI" },
    { id: 7, name: "Boat4", type: "sail", city: "Portsmouth, RI" },
  ];

  findAll(): Observable<Boat[]> {
    return of(this.#boats);
  }
  byId(id: number): Observable<Boat> {
    return of(this.#boats.find((b) => b.id === id)!);
  }
  save(boat: Boat): Observable<Boat> {
    if (!boat.id) {
      boat.id = this.#boats.length + 1;
      this.#boats.push(boat);
    } else {
      this.#boats = this.#boats.map((b) => (b.id === boat.id ? boat : b));
    }

    return of(boat);
  }
  delete(boat: Boat): Observable<null> {
    this.#boats = this.#boats.filter((b) => b.id !== boat.id);
    return of();
  }

  types(): string[] {
    return ["motor", "sail", "kayak"];
  }
}
