import { Component, inject } from "@angular/core";
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
  private readonly boatsRepository = inject(InMemoryBoatRespository);
  boat: Boat | undefined;

  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe((params) => {
      const boatId: number = Number(this.route.snapshot.paramMap.get("id"));
      this.boat = this.boatsRepository.byId(boatId);
    });
  }

  goBack(): void {
    window.history.back();
  }
}
