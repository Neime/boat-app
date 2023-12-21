import { Routes } from "@angular/router";
import { ListBoatComponent } from "./boat/components/list-boat/list-boat.component";
import { BoatDetailComponent } from "./boat/components/boat-detail/boat-detail.component";
import { PageNotFoundComponent } from "./boat/components/page-not-found/page-not-found.component";

export const routes: Routes = [
  { path: "boats", title: "Boat List", component: ListBoatComponent },
  { path: "boat/:id", component: BoatDetailComponent },
  { path: "", redirectTo: "boats", pathMatch: "full" },
  { path: "**", component: PageNotFoundComponent },
];
