import { ApplicationConfig, mergeApplicationConfig } from "@angular/core";
import { provideRouter, withComponentInputBinding } from "@angular/router";

import { routes } from "./app.routes";
import { backOfficeConfig } from "./backoffice/backoffice.config";
import { provideHttpClient } from "@angular/common/http";

const globalConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withComponentInputBinding()),
    provideHttpClient(),
  ],
};

export const appConfig: ApplicationConfig = mergeApplicationConfig(
  globalConfig,
  backOfficeConfig
);
