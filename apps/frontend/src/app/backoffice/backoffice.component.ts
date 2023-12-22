import { Component } from "@angular/core";
import { RouterLink, RouterOutlet } from "@angular/router";

@Component({
  selector: "app-backoffice",
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: "./backoffice.component.html",
})
export class BackOfficeComponent {}
