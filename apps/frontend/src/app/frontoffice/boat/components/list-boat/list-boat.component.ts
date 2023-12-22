import { Component, OnInit, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Boat } from "../../entities/boat";
import { InMemoryBoatRepository } from "../../../../infrastructure/repository/inMemoryBoatRepository";
import { BoatCardComponent } from "../boat-card/boat-card.component";
import { BoatRepository } from "../../../../infrastructure/repository/boatRepository";

@Component({
  selector: "app-list-boat",
  standalone: true,
  imports: [CommonModule, BoatCardComponent],
  templateUrl: "./list-boat.component.html",
  providers: [InMemoryBoatRepository],
})
export class ListBoatComponent {
  #boatRepository: BoatRepository = inject(InMemoryBoatRepository);
  boats: Boat[] = this.#boatRepository.findAll();

  selectBoat(boatName: string): void {}
}
