import { Injectable } from "@angular/core";
import { Boat } from "../../boat/entities/boat";
import { BoatRepository } from "./boatRepository";

@Injectable()
export class InMemoryBoatRespository implements BoatRepository {
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

  findAll(): Boat[] {
    return this.#boats;
  }
  byId(id: number): Boat {
    return this.#boats.find((b) => b.id === id)!;
  }
  save(boat: Boat): void {
    this.#boats.push(boat);
  }
  delete(boat: Boat): void {
    this.#boats = this.#boats.filter((b) => b.id !== boat.id);
  }
}
