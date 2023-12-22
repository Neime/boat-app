import { ApplicationConfig } from "@angular/core";
import { environment } from "../../environments/environment";

export const infrastructureConfig: ApplicationConfig = {
  providers: [
    {
      provide: "apiUrl",
      useValue: environment.backendApiUrl,
    },
  ],
};
