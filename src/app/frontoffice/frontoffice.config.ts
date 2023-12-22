import { ApplicationConfig, mergeApplicationConfig } from "@angular/core";
import { boatConfig } from "./boat/boat.config";

export const frontOfficeConfig: ApplicationConfig =
  mergeApplicationConfig(boatConfig);
