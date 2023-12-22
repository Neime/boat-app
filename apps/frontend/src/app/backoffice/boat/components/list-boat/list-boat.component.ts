import { Component, Input, inject } from "@angular/core";
import { Boat } from "../../../../frontoffice/boat/entities/boat";
import { RouterLink } from "@angular/router";
import { BoatRepository } from "../../../../infrastructure/repository/boat/boatRepository";
import { Observable } from "rxjs";
import { CommonModule } from "@angular/common";
import { ApiBoatRepository } from "../../../../infrastructure/repository/boat/ApiBoatRepository";

@Component({
  selector: "app-admin-list-boat",
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: "./list-boat.component.html",
})
export class AdminListBoatComponent {
  #boatRepository: BoatRepository = inject(ApiBoatRepository);
  boats: Observable<Boat[]> = this.#boatRepository.findAll();

  deleteBoat(boat: Boat): void {
    this.#boatRepository
      .delete(boat)
      .subscribe(() => (this.boats = this.#boatRepository.findAll()));
  }
}
