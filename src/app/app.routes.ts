import { Routes } from "@angular/router";
import { PageNotFoundComponent } from "./boat/components/page-not-found/page-not-found.component";
import { boatRoutes } from "./boat/boat.routes";

export const routes: Routes = [
  ...boatRoutes,
  { path: "", redirectTo: "boats", pathMatch: "full" },
  { path: "**", component: PageNotFoundComponent },
];
