import { ApplicationConfig } from "@angular/core";
import { environment } from "../../environments/environment";
import { AuthService } from "./security/auth.service";
import { ApiAuthRepository } from "./repository/auth/ApiAuthRepository";

export const infrastructureConfig: ApplicationConfig = {
  providers: [
    {
      provide: "apiUrl",
      useValue: environment.backendApiUrl,
    },
    {
      provide: "AuthRepository",
      useClass: ApiAuthRepository,
    },
    AuthService,
  ],
};
