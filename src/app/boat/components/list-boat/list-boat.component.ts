import { Component, OnInit, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Boat } from "../../entities/boat";
import { BoatCardComponent } from "../boat-card/boat-card.component";
import { InMemoryBoatRepository } from "../../../infrastructure/repository/inMemoryBoatRepository";

@Component({
  selector: "app-list-boat",
  standalone: true,
  imports: [CommonModule, BoatCardComponent],
  templateUrl: "./list-boat.component.html",
  providers: [InMemoryBoatRepository],
})
export class ListBoatComponent {
  boats: Boat[] = [];

  constructor(private readonly boatRepository: InMemoryBoatRepository) {
    this.boats = this.boatRepository.findAll();
  }

  selectBoat(boatName: string): void {}
}
