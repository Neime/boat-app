import { ApplicationConfig } from "@angular/core";
import { InMemoryBoatRepository } from "../../infrastructure/repository/inMemoryBoatRepository";

export const adminBoatConfig: ApplicationConfig = {
  providers: [InMemoryBoatRepository],
};
