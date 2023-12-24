import { Observable } from "rxjs";

export type AccessToken = {
  access_token: string;
};

export interface AuthRepository {
  authenticate(authDto: Record<string, string>): Observable<AccessToken>;
}
