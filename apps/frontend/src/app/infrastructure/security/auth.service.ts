import { Injectable } from "@angular/core";
import { delay, Observable, of, tap } from "rxjs";

@Injectable()
export class AuthService {
  isAuthenticatedAdmin: boolean = false;

  login(name: string, password: string): Observable<boolean> {
    const isAuthenticatedAdmin =
      name == "admin@gmail.com" && password == "test";

    return of(isAuthenticatedAdmin).pipe(
      delay(1000),
      tap(
        (isAuthenticatedAdmin) =>
          (this.isAuthenticatedAdmin = isAuthenticatedAdmin)
      )
    );
  }

  logout() {
    this.isAuthenticatedAdmin = false;
  }
}
