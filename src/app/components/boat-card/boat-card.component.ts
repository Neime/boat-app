import { Component, Input, OnInit } from "@angular/core";
import { Boat } from "../../entities/boat";
import { Router } from "@angular/router";
import { BOATS } from "../../mock.boat";
import { BoatCardDirective } from "../../directives/boat-card.directive";
import { BoatTypeColorPipe } from "../../pipes/boat-type-color.pipe";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-boat-card",
  standalone: true,
  imports: [BoatCardDirective, BoatTypeColorPipe, CommonModule],
  templateUrl: "./boat-card.component.html",
  styles: ``,
})
export class BoatCardComponent implements OnInit {
  boat: Boat | undefined;
  boats: Boat[] = BOATS;

  constructor(private router: Router) {}

  @Input() boatId: number = 0;

  ngOnInit(): void {
    this.boat = this.boats.find((b: Boat) => b.id === this.boatId);
  }

  goToBoat(boatId: number): void {
    this.router.navigate(["/boat", boatId]);
  }
}
