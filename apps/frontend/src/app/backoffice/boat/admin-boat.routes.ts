import { Routes } from "@angular/router";
import { AdminListBoatComponent } from "./components/list-boat/list-boat.component";
import { AdminBoatFormComponent } from "./components/boat-form/boat-form.component";

export const adminBoatRoutes: Routes = [
  { path: "boats", component: AdminListBoatComponent },
  { path: "boat/:id", component: AdminBoatFormComponent },
  { path: "boat/create", component: AdminBoatFormComponent },
];
