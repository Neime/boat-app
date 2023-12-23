import { Component, inject } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../infrastructure/security/auth.service";

@Component({
  selector: "app-logout",
  standalone: true,
  templateUrl: "./logout.component.html",
})
export class LogoutComponent {
  #auth: AuthService = inject(AuthService);
  #router: Router = inject(Router);
  logout() {
    this.#auth.logout();
    this.#router.navigate(["/login"]);
  }
}
