import { Inject, Injectable } from "@angular/core";
import { Boat } from "../../../frontoffice/boat/entities/boat";
import { BoatRepository } from "./boatRepository";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, catchError, of, tap } from "rxjs";
import { AuthService } from "../../../login/security/auth.service";

@Injectable()
export class ApiBoatRepository implements BoatRepository {
  constructor(
    private readonly httpClient: HttpClient,
    @Inject("apiUrl") private readonly apiUrl: string,
    private readonly authService: AuthService
  ) {}

  search(term: string): Observable<Boat[]> {
    if (term.length < 2) {
      return of([]);
    }
    return this.httpClient.get<Boat[]>(`${this.apiUrl}boats?term=${term}`).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, []))
    );
  }

  findAll(): Observable<Boat[]> {
    return this.httpClient.get<Boat[]>(`${this.apiUrl}boats`).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, []))
    );
  }
  byId(id: number): Observable<Boat> {
    return this.httpClient.get<Boat>(`${this.apiUrl}boats/${id}`).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, undefined))
    );
  }
  save(boat: Boat): Observable<Boat> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.authService.accessToken}`,
      }),
    };
    if (!boat.id) {
      return this.httpClient.post<Boat>(
        `${this.apiUrl}boats`,
        boat,
        httpOptions
      );
    } else {
      return this.httpClient.put<Boat>(
        `${this.apiUrl}boats/${boat.id}`,
        boat,
        httpOptions
      );
    }
  }

  delete(boat: Boat): Observable<null> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.authService.accessToken}`,
      }),
    };
    return this.httpClient
      .delete(`${this.apiUrl}boats/${boat.id}`, httpOptions)
      .pipe(
        tap((response) => this.log(response)),
        catchError((error) => this.handleError(error, null))
      );
  }

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
