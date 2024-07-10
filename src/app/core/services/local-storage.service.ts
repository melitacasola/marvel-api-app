import { Injectable } from '@angular/core';
import { Md5 } from 'ts-md5';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  generateHash(ts: number, privateKey: string, publicKey: string): string {
    // console.log(Md5.hashStr(ts.toString() + privateKey + publicKey));
    return Md5.hashStr(ts + privateKey + publicKey) as string;
  }

  saveHash(hash: string): void {
    localStorage.setItem('marvelHash', hash);
  }
  savePublicKey(publicKey: string): void {
    localStorage.setItem('publicApiKey', publicKey);
  }

  getHash(): string | null {
    return localStorage.getItem('marvelHash');
  }

  getPublicKey(): string | null {
    return localStorage.getItem('publicApiKey');
  }

  logout() {
    localStorage.removeItem('marvelHash');
    localStorage.removeItem('publicApiKey');
  }

}
