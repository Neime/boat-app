import { Component, Input, inject } from "@angular/core";
import { Boat } from "../../../../frontoffice/boat/entities/boat";
import { InMemoryBoatRepository } from "../../../../infrastructure/repository/inMemoryBoatRepository";
import { RouterLink } from "@angular/router";
import { BoatRepository } from "../../../../infrastructure/repository/boatRepository";

@Component({
  selector: "app-admin-list-boat",
  standalone: true,
  imports: [RouterLink],
  templateUrl: "./list-boat.component.html",
})
export class AdminListBoatComponent {
  #boatRepository: BoatRepository = inject(InMemoryBoatRepository);
  boats: Boat[] = this.#boatRepository.findAll();
}
