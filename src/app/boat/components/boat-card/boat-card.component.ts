import { Component, Input, inject } from "@angular/core";
import { Boat } from "../../entities/boat";
import { Router } from "@angular/router";
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
export class BoatCardComponent {
  constructor(private router: Router) {}

  @Input() boat: Boat | undefined;

  goToBoat(boatId: number): void {
    this.router.navigate(["/boat", boatId]);
  }
}
