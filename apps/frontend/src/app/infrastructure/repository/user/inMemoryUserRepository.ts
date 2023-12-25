import { UserRepository } from "./userRepository";

export class InMemoryUserRepository implements UserRepository {
  isAdmin(): boolean {
    return true;
  }
}
