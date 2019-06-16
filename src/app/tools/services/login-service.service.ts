import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  loggedIn = false;

  constructor() { }
  isAuthenticated() {
    const promise = new Promise(
      (resolve, reject) => {
        resolve(this.loggedIn);
      }
    ); return promise;
  }
  login() {
    this.loggedIn = true;
  }
  logout() {
    this.loggedIn = false;
  }
}
