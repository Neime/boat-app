import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Router } from "@angular/router";
import { BOATS } from "../../mock.boat";
import { Boat } from "../../entities/boat";
import { BoatCardComponent } from "../boat-card/boat-card.component";

@Component({
  selector: "app-list-boat",
  standalone: true,
  imports: [CommonModule, BoatCardComponent],
  templateUrl: "./list-boat.component.html",
})
export class ListBoatComponent {
  boats: Boat[] = BOATS;

  constructor(private router: Router) {}

  selectBoat(boatName: string): void {}
}
