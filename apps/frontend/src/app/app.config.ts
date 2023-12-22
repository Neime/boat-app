import { ApplicationConfig, mergeApplicationConfig } from "@angular/core";
import { provideRouter, withComponentInputBinding } from "@angular/router";

import { routes } from "./app.routes";
import { backOfficeConfig } from "./backoffice/backoffice.config";
import { provideHttpClient } from "@angular/common/http";
import { frontOfficeConfig } from "./frontoffice/frontoffice.config";
import { infrastructureConfig } from "./infrastructure/infrastructure.config";

const globalConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withComponentInputBinding()),
    provideHttpClient(),
  ],
};

export const appConfig: ApplicationConfig = mergeApplicationConfig(
  globalConfig,
  backOfficeConfig,
  frontOfficeConfig,
  infrastructureConfig
);
