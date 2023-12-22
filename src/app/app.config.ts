import { ApplicationConfig, mergeApplicationConfig } from "@angular/core";
import { provideRouter, withComponentInputBinding } from "@angular/router";

import { routes } from "./app.routes";
import { backOfficeConfig } from "./backoffice/backoffice.config";

const globalConfig: ApplicationConfig = {
  providers: [provideRouter(routes, withComponentInputBinding())],
};

export const appConfig: ApplicationConfig = mergeApplicationConfig(
  globalConfig,
  backOfficeConfig
);
