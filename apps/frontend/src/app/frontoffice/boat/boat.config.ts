import { ApplicationConfig } from "@angular/core";
import { ApiBoatRepository } from "../../infrastructure/repository/boat/ApiBoatRepository";

export const boatConfig: ApplicationConfig = {
  providers: [ApiBoatRepository],
};
