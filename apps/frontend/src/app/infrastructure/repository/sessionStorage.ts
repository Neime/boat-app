import { Inject, Injectable } from "@angular/core";
import * as CryptoJS from "crypto-js";

@Injectable()
export class SessionStorage<T> {
  constructor(@Inject("privateKey") private readonly privateKey: string) {}
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
    return CryptoJS.AES.encrypt(dataString, this.privateKey).toString();
  }

  private decryptData(encryptedData: string): T {
    const decryptData = CryptoJS.AES.decrypt(
      encryptedData,
      this.privateKey
    ).toString(CryptoJS.enc.Utf8);

    return decryptData ? JSON.parse(decryptData) : null;
  }
}
