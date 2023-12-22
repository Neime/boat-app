import { Routes } from "@angular/router";
import { AdminListBoatComponent } from "./components/list-boat/list-boat.component";
import { AdminBoatFormComponent } from "./components/boat-form/boat-form.component";

export const adminBoatRoutes: Routes = [
  { path: "admin/boats", component: AdminListBoatComponent },
  { path: "admin/boat/:id", component: AdminBoatFormComponent },
];
