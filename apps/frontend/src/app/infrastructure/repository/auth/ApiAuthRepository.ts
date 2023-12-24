import { Observable, catchError, map, of, tap } from "rxjs";
import { AccessToken, AuthRepository } from "./authRepository";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";

@Injectable()
export class ApiAuthRepository implements AuthRepository {
  constructor(
    private readonly http: HttpClient,
    @Inject("apiUrl") private readonly apiUrl: string
  ) {}

  authenticate(authDto: Record<string, string>): Observable<AccessToken> {
    const httpOptions = {
      headers: new HttpHeaders({ "Content-Type": "application/json" }),
    };

    return this.http
      .post<AccessToken>(`${this.apiUrl}auth/login`, authDto, httpOptions)
      .pipe(
        tap((response) => this.log(response)),
        catchError((error) => this.handleError(error, null))
      );
  }

  private log(response: any) {
    console.table(response);
  }

  private handleError(error: Error, errorValue: any) {
    console.error(error);
    return of(errorValue);
  }
}
