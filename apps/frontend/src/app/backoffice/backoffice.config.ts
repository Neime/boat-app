import { ApplicationConfig, mergeApplicationConfig } from "@angular/core";
import { adminBoatConfig } from "./boat/boat.config";

export const backOfficeConfig: ApplicationConfig =
  mergeApplicationConfig(adminBoatConfig);
