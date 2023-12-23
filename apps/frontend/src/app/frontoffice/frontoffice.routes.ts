import { Routes } from "@angular/router";
import { boatRoutes } from "./boat/boat.routes";
import { FrontOfficeComponent } from "./frontoffice.component";

export const frontofficeRoutes: Routes = [
  { path: "", redirectTo: "boats", pathMatch: "full" },
  {
    path: "",
    component: FrontOfficeComponent,
    children: [...boatRoutes],
  },
];
