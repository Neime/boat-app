import { Component, Input, inject } from "@angular/core";
import { InMemoryBoatRepository } from "../../../../infrastructure/repository/inMemoryBoatRepository";
import { Boat } from "../../../../frontoffice/boat/entities/boat";
import { ActivatedRoute, Router } from "@angular/router";
import { FormsModule, NgForm } from "@angular/forms";
import { BoatRepository } from "../../../../infrastructure/repository/boatRepository";

@Component({
  selector: "app-admin-boat-form",
  standalone: true,
  imports: [FormsModule],
  templateUrl: "./boat-form.component.html",
})
export class AdminBoatFormComponent {
  #boatRepository: BoatRepository = inject(InMemoryBoatRepository);
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
