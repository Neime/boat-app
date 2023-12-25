import { Inject, Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import {
  AccessToken,
  AuthRepository,
} from "../../infrastructure/repository/auth/authRepository";
import { SessionStorage } from "../../infrastructure/repository/sessionStorage";

@Injectable()
export class AuthService {
  #isAuthenticatedAdmin: boolean = false;

  #accessTokenKey: string = "access_token";

  constructor(
    @Inject("AuthRepository") private readonly authRepository: AuthRepository,
    private readonly sessionStorage: SessionStorage<AccessToken>
  ) {}

  getAccessToken(): string | null {
    const accessToken = this.sessionStorage.getSession(this.#accessTokenKey);
    if (accessToken) return accessToken.access_token;

    return null;
  }

  isAuthenticatedAdmin(): boolean {
    if (!this.#isAuthenticatedAdmin) {
      const accessToken = this.sessionStorage.getSession(this.#accessTokenKey);
      if (accessToken) return true;
    }

    return this.#isAuthenticatedAdmin;
  }

  login(email: string, password: string): Observable<boolean> {
    return this.authRepository.authenticate({ email, password }).pipe(
      map((response) => {
        const isAuthenticated = response?.access_token ? true : false;
        this.#isAuthenticatedAdmin = isAuthenticated;
        if (isAuthenticated)
          this.sessionStorage.setSession(this.#accessTokenKey, response);
        return isAuthenticated;
      })
    );
  }

  logout() {
    this.sessionStorage.clearSession(this.#accessTokenKey);
    this.#isAuthenticatedAdmin = false;
  }
}
