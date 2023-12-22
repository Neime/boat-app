import { Injectable } from "@angular/core";
import { Boat } from "../../frontoffice/boat/entities/boat";
import { BoatRepository } from "./boatRepository";
import { HttpClient } from "@angular/common/http";
import { Observable, catchError, of, tap } from "rxjs";

@Injectable()
export class ApiBoatRepository implements BoatRepository {
  constructor(private readonly httpClient: HttpClient) {}

  findAll(): Observable<Boat[]> {
    return this.httpClient.get<Boat[]>("http://localhost:3000/boats").pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, []))
    );
  }
  byId(id: number): Boat {
    return { id: 1, name: "Boat 1", type: "motor" } as Boat;
  }
  save(boat: Boat): void {}
  delete(boat: Boat): void {}

  types(): string[] {
    return ["motor", "sail", "kayak"];
  }

  private log(response: any) {
    console.table(response);
  }

  private handleError(error: Error, errorValue: any) {
    console.error(error);
    return of(errorValue);
  }
}
