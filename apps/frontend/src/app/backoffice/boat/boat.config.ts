import { ApplicationConfig } from "@angular/core";
import { InMemoryBoatRepository } from "../../infrastructure/repository/inMemoryBoatRepository";
import { ApiBoatRepository } from "../../infrastructure/repository/ApiBoatRepository";

export const adminBoatConfig: ApplicationConfig = {
  providers: [ApiBoatRepository, InMemoryBoatRepository],
};
