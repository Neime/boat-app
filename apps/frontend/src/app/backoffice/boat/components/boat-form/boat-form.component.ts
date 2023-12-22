import { Component, Input, inject } from "@angular/core";
import { Boat } from "../../../../frontoffice/boat/entities/boat";
import { Router } from "@angular/router";
import { FormsModule, NgForm } from "@angular/forms";
import { BoatRepository } from "../../../../infrastructure/repository/boatRepository";
import { ApiBoatRepository } from "../../../../infrastructure/repository/ApiBoatRepository";

@Component({
  selector: "app-admin-boat-form",
  standalone: true,
  imports: [FormsModule],
  templateUrl: "./boat-form.component.html",
})
export class AdminBoatFormComponent {
  #boatRepository: BoatRepository = inject(ApiBoatRepository);
  #router: Router = inject(Router);
  boat: Boat | undefined;
  types: string[] = this.#boatRepository.types();

  @Input()
  set id(id: number) {
    this.boat = !isNaN(+id)
      ? this.#boatRepository.byId(+id)
      : {
          id: 0,
          name: "",
          type: this.types[0],
          city: "",
        };
  }

  onSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }

    this.#boatRepository.save(this.boat as Boat);
    this.#router.navigate(["/admin/boats"]);
  }
}
