import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: "app-dashboard",
  standalone: true,
  imports: [RouterOutlet],
  template: ` <p>dashboard works!</p> `,
  styles: ``,
})
export class DashboardComponent {}
