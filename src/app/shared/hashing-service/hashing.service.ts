import { Injectable } from '@angular/core';
import {sha256} from 'js-sha256';

@Injectable({
  providedIn: 'root'
})
export class HashingService {

  constructor() { }

  // SHA256 password with key as salt.
  hashPassword(key: string, password: string) {
    return sha256.hmac(key, password);
  }
}
