import { Component, WritableSignal, inject, signal } from "@angular/core";
import { Router, RouterOutlet } from "@angular/router";
import { AuthService } from "../infrastructure/security/auth.service";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-login",
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: "./login.component.html",
})
export class LoginComponent {
  message: string = "";
  email: string = "";
  password: string = "";
  #auth: AuthService = inject(AuthService);
  #router: Router = inject(Router);

  setMessage() {
    if (!this.#auth.isAuthenticatedAdmin) {
      this.message = "Indentifiant ou mot de passe incorrect.";
    }
  }

  login() {
    this.message = "Tentative de connexion en cours...";
    this.#auth
      .login(this.email, this.password)
      .subscribe((isLoggedIn: boolean) => {
        this.setMessage();
        if (isLoggedIn) {
          this.#router.navigate(["/admin"]);
        } else {
          this.password = "";
          this.#router.navigate(["/login"]);
        }
      });
  }
}
