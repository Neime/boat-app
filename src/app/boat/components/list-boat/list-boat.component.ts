import { Component, OnInit, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Boat } from "../../entities/boat";
import { BoatCardComponent } from "../boat-card/boat-card.component";
import { InMemoryBoatRespository } from "../../../infrastructure/repository/inMemoryBoatRespository";

@Component({
  selector: "app-list-boat",
  standalone: true,
  imports: [CommonModule, BoatCardComponent],
  templateUrl: "./list-boat.component.html",
  providers: [InMemoryBoatRespository],
})
export class ListBoatComponent {
  private readonly boatsRepository = inject(InMemoryBoatRespository);
  boats: Boat[] = this.boatsRepository.findAll();

  selectBoat(boatName: string): void {}
}
