import { Routes } from "@angular/router";
import { PageNotFoundComponent } from "./frontoffice/page-not-found/page-not-found.component";
import { backofficeRoutes } from "./backoffice/backoffice.routes";
import { frontofficeRoutes } from "./frontoffice/frontoffice.routes";

export const routes: Routes = [
  ...frontofficeRoutes,
  ...backofficeRoutes,
  { path: "", redirectTo: "boats", pathMatch: "full" },
  { path: "**", component: PageNotFoundComponent },
];
