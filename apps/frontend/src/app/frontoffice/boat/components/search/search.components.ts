import { Component, WritableSignal, inject, signal } from "@angular/core";
import { ApiBoatRepository } from "../../../../infrastructure/repository/boat/ApiBoatRepository";
import { BoatRepository } from "../../../../infrastructure/repository/boat/boatRepository";
import { Router } from "@angular/router";
import {
  Observable,
  Subject,
  debounceTime,
  defaultIfEmpty,
  distinctUntilChanged,
  filter,
  of,
  switchMap,
} from "rxjs";
import { Boat } from "../../entities/boat";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-boat-search",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./search.component.html",
})
export class SearchComponent {
  #boatRepository: BoatRepository = inject(ApiBoatRepository);
  #router: Router = inject(Router);
  searchResults: Subject<string> = new Subject<string>();
  searchActive: WritableSignal<boolean> = signal(false);
  boats$: Observable<Boat[]> = this.searchResults.pipe(
    debounceTime(300),
    distinctUntilChanged(),
    filter((term: string) => term.trim() !== ""),
    switchMap((term: string) => {
      return this.#boatRepository.search(term);
    })
  );

  search(term: string): void {
    this.searchActive.set(term.length > 0);
    this.searchResults.next(term);
  }

  goToBoat(boat: Boat): void {
    this.#router.navigate(["/boat", boat.id]);
  }
}
