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

  getHash(): string | null {
    return localStorage.getItem('marvelHash');
  }

}
