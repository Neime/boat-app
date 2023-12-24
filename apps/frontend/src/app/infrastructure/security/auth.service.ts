import { Inject, Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { AuthRepository } from "../repository/auth/authRepository";

@Injectable()
export class AuthService {
  isAuthenticatedAdmin: boolean = false;
  accessToken: string = "";

  constructor(
    @Inject("AuthRepository") private readonly authRepository: AuthRepository
  ) {}

  login(email: string, password: string): Observable<boolean> {
    return this.authRepository.authenticate({ email, password }).pipe(
      map((response) => {
        const isAuthenticated = response?.access_token ? true : false;
        this.accessToken = response?.access_token ? response.access_token : "";
        this.isAuthenticatedAdmin = isAuthenticated;
        return isAuthenticated;
      })
    );
  }

  logout() {
    this.isAuthenticatedAdmin = false;
  }
}
