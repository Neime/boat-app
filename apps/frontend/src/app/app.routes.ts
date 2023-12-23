import { Routes } from "@angular/router";
import { PageNotFoundComponent } from "./frontoffice/page-not-found/page-not-found.component";
import { backofficeRoutes } from "./backoffice/backoffice.routes";
import { frontofficeRoutes } from "./frontoffice/frontoffice.routes";
import { LoginComponent } from "./login/login.component";

export const routes: Routes = [
  ...frontofficeRoutes,
  ...backofficeRoutes,
  { path: "login", component: LoginComponent },
  { path: "**", component: PageNotFoundComponent },
];
