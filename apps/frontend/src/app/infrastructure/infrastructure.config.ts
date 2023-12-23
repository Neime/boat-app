import { ApplicationConfig } from "@angular/core";
import { environment } from "../../environments/environment";
import { AuthService } from "./security/auth.service";

export const infrastructureConfig: ApplicationConfig = {
  providers: [
    {
      provide: "apiUrl",
      useValue: environment.backendApiUrl,
    },
    AuthService,
  ],
};
