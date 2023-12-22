import { ApplicationConfig } from "@angular/core";
import { ApiBoatRepository } from "../../infrastructure/repository/ApiBoatRepository";

export const adminBoatConfig: ApplicationConfig = {
  providers: [ApiBoatRepository],
};
