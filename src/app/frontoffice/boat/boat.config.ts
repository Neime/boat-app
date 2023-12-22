import { ApplicationConfig } from "@angular/core";
import { InMemoryBoatRepository } from "../../infrastructure/repository/inMemoryBoatRepository";

export const boatConfig: ApplicationConfig = {
  providers: [InMemoryBoatRepository],
};
