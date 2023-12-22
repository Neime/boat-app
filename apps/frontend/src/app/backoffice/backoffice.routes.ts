import { Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { adminBoatRoutes } from "./boat/admin-boat.routes";

export const backofficeRoutes: Routes = [
  { path: "admin", redirectTo: "admin/dashboard", pathMatch: "full" },
  { path: "admin/dashboard", component: DashboardComponent },
  ...adminBoatRoutes,
];
