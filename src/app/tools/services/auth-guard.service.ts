import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {LoginService} from './login-service.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private loginService: LoginService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.loginService.isAuthenticated().then(
      (auth: boolean) => {
        if (auth) {
          return true;
        } else {
          this.router.navigate(['/login']);
          return false;
        }
      }
    );
  }
}
