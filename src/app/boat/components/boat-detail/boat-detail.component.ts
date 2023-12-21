import { Component, Input, inject } from "@angular/core";
import { Boat } from "../../entities/boat";
import { ActivatedRoute, Router } from "@angular/router";
import { BoatCardDirective } from "../../directives/boat-card.directive";
import { BoatTypeColorPipe } from "../../pipes/boat-type-color.pipe";
import { CommonModule } from "@angular/common";
import { InMemoryBoatRespository } from "../../../infrastructure/repository/inMemoryBoatRespository";

@Component({
  selector: "app-boat-detail",
  providers: [InMemoryBoatRespository],
  standalone: true,
  imports: [BoatCardDirective, BoatTypeColorPipe, CommonModule],
  templateUrl: "./boat-detail.component.html",
  styles: ``,
})
export class BoatDetailComponent {
  boat: Boat | undefined;

  constructor(private readonly boatRepository: InMemoryBoatRespository) {}

  @Input()
  set id(id: number) {
    this.boat = this.boatRepository.byId(+id);
  }

  goBack(): void {
    window.history.back();
  }
}
