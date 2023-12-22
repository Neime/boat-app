import { Component, Input, inject } from "@angular/core";
import { Boat } from "../../entities/boat";
import { BoatCardDirective } from "../../directives/boat-card.directive";
import { BoatTypeColorPipe } from "../../pipes/boat-type-color.pipe";
import { CommonModule } from "@angular/common";
import { BoatRepository } from "../../../../infrastructure/repository/boat/boatRepository";
import { ApiBoatRepository } from "../../../../infrastructure/repository/boat/ApiBoatRepository";

@Component({
  selector: "app-boat-detail",
  standalone: true,
  imports: [BoatCardDirective, BoatTypeColorPipe, CommonModule],
  templateUrl: "./boat-detail.component.html",
  styles: ``,
})
export class BoatDetailComponent {
  #boatRepository: BoatRepository = inject(ApiBoatRepository);
  boat: Boat | undefined;

  @Input()
  set id(id: number) {
    this.#boatRepository.byId(+id).subscribe((boat) => (this.boat = boat));
  }

  goBack(): void {
    window.history.back();
  }
}
