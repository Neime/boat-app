import { Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { adminBoatRoutes } from "./boat/admin-boat.routes";
import { canActivateAdmin } from "../infrastructure/security/auth.guard";
import { BackOfficeComponent } from "./backoffice.component";

export const backofficeRoutes: Routes = [
  {
    path: "admin",
    redirectTo: "admin/dashboard",
    pathMatch: "full",
  },
  {
    path: "admin",
    canActivate: [canActivateAdmin],
    canActivateChild: [canActivateAdmin],
    component: BackOfficeComponent,
    children: [
      {
        path: "dashboard",
        component: DashboardComponent,
      },
      ...adminBoatRoutes,
    ],
  },
];
