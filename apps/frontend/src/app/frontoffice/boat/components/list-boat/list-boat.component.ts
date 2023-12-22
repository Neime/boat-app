import { Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Boat } from "../../entities/boat";
import { BoatCardComponent } from "../boat-card/boat-card.component";
import { BoatRepository } from "../../../../infrastructure/repository/boat/boatRepository";
import { Observable } from "rxjs";
import { ApiBoatRepository } from "../../../../infrastructure/repository/boat/ApiBoatRepository";
import { SearchComponent } from "../search/search.components";

@Component({
  selector: "app-list-boat",
  standalone: true,
  imports: [CommonModule, BoatCardComponent, SearchComponent],
  templateUrl: "./list-boat.component.html",
})
export class ListBoatComponent {
  #boatRepository: BoatRepository = inject(ApiBoatRepository);
  boats: Observable<Boat[]> = this.#boatRepository.findAll();
}
