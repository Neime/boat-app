import { Component, Input, inject } from "@angular/core";
import { InMemoryBoatRepository } from "../../../../infrastructure/repository/inMemoryBoatRepository";
import { Boat } from "../../../../frontoffice/boat/entities/boat";
import { ActivatedRoute, Router } from "@angular/router";
import { FormsModule, NgForm } from "@angular/forms";
import { NgIf } from "@angular/common";
import { BoatRepository } from "../../../../infrastructure/repository/boatRepository";

@Component({
  selector: "app-admin-boat-form",
  standalone: true,
  imports: [FormsModule],
  templateUrl: "./boat-form.component.html",
  providers: [InMemoryBoatRepository],
})
export class AdminBoatFormComponent {
  #boatRepository: BoatRepository = inject(InMemoryBoatRepository);
  #router: Router = inject(Router);
  boat: Boat | undefined;
  types: string[] = this.#boatRepository.types();

  @Input()
  set id(id: number) {
    this.boat = this.#boatRepository.byId(+id);
  }

  onSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.#boatRepository.save(this.boat as Boat);
    this.#router.navigate(["/admin/boats"]);
  }
}
