import { Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  NavigationEnd,
  Router,
  RouterLink,
  RouterOutlet,
} from "@angular/router";
import { FrontOfficeComponent } from "./frontoffice/frontoffice.component";
import { BackOfficeComponent } from "./backoffice/backoffice.component";
import { InMemoryUserRepository } from "./infrastructure/repository/inMemoryUserRepository";
import { UserRepository } from "./infrastructure/repository/userRepository";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    FrontOfficeComponent,
    BackOfficeComponent,
  ],
  templateUrl: "app.component.html",
  providers: [InMemoryUserRepository],
})
export class AppComponent {
  #userRepository: UserRepository = inject(InMemoryUserRepository);
  #router: Router = inject(Router);
  isAdmin: boolean = false;

  ngOnInit(): void {
    this.#router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        this.isAdmin = this.#router.url.startsWith("/admin");
      }
    });

    this.isAdmin = this.#userRepository.isAdmin();
  }
  //isAdmin = this.userRepository.isAdmin();
}
