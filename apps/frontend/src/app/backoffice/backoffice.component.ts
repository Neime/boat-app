import { Component } from "@angular/core";
import { RouterLink, RouterOutlet } from "@angular/router";
import { LogoutComponent } from "../logout/logout.component";

@Component({
  selector: "app-backoffice",
  standalone: true,
  imports: [RouterLink, RouterOutlet, LogoutComponent],
  templateUrl: "./backoffice.component.html",
})
export class BackOfficeComponent {}
