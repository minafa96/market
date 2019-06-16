import { Component, OnInit } from '@angular/core';
import {LoginService} from '../tools/services/login-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router) {
  }

  ngOnInit() {
  }
  onLogin() {
    this.loginService.login();
    console.log(this.loginService.loggedIn);
    this.router.navigate(['/']);
  }
}
