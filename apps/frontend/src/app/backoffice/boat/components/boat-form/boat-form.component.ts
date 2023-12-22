import { Component, Input, inject } from "@angular/core";
import { Boat } from "../../../../frontoffice/boat/entities/boat";
import { Router } from "@angular/router";
import { FormsModule, NgForm } from "@angular/forms";
import { BoatRepository } from "../../../../infrastructure/repository/boat/boatRepository";
import { ApiBoatRepository } from "../../../../infrastructure/repository/boat/ApiBoatRepository";
import { Observable, of } from "rxjs";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-admin-boat-form",
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: "./boat-form.component.html",
})
export class AdminBoatFormComponent {
  #boatRepository: BoatRepository = inject(ApiBoatRepository);
  #router: Router = inject(Router);
  boat: Boat | undefined;
  types: string[] = this.#boatRepository.types();

  @Input()
  set id(id: number) {
    !isNaN(+id)
      ? this.#boatRepository.byId(+id).subscribe((boat) => (this.boat = boat))
      : (this.boat = {
          id: 0,
          name: "",
          type: this.types[0],
          city: "",
        });
  }

  onSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }

    this.#boatRepository
      .save(this.boat as Boat)
      .subscribe(() => this.#router.navigate(["/admin/boats"]));
  }
}
