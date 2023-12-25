import { ApplicationConfig } from "@angular/core";
import { environment } from "../../environments/environment";
import { AuthService } from "../login/security/auth.service";
import { ApiAuthRepository } from "./repository/auth/ApiAuthRepository";
import { SessionStorage } from "./repository/sessionStorage";

export const infrastructureConfig: ApplicationConfig = {
  providers: [
    {
      provide: "apiUrl",
      useValue: environment.backendApiUrl,
    },
    {
      provide: "privateKey",
      useValue: environment.privateKey,
    },
    {
      provide: "AuthRepository",
      useClass: ApiAuthRepository,
    },
    AuthService,
    SessionStorage,
  ],
};
