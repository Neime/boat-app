import { Injectable } from "@angular/core";
import * as CryptoJS from "crypto-js";

@Injectable()
export class SessionStorage<T> {
  setSession(key: string, data: T): void {
    const encryptedData = this.encryptData(data);
    localStorage.setItem(key, encryptedData);
  }

  getSession(key: string): T | null {
    const encryptedData: string | null = localStorage.getItem(key);
    if (encryptedData) return this.decryptData(encryptedData);

    return null;
  }

  clearSession(key: string): void {
    localStorage.removeItem(key);
  }

  private encryptData(data: T): string {
    const dataString = JSON.stringify(data);
    return CryptoJS.SHA256(dataString).toString();
  }

  private decryptData(encryptedData: string): T {
    return CryptoJS.SHA256(encryptedData) as unknown as T;
  }
}
