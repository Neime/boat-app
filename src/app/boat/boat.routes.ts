import { Routes } from "@angular/router";
import { ListBoatComponent } from "./components/list-boat/list-boat.component";
import { BoatDetailComponent } from "./components/boat-detail/boat-detail.component";

export const boatRoutes: Routes = [
  { path: "boats", title: "Boat List", component: ListBoatComponent },
  { path: "boat/:id", component: BoatDetailComponent },
];
