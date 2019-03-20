import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../core/services/authentication/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
  }

  ngOnInit() {
  }

  onDonHaveAccountClick() {
    this.router.navigate(['/register']).then(() => {
    });
  }

  onForgotPasswordClick() {
    this.router.navigate(['/reset-code']).then(() => {
    });
  }
  doLogin(username, password) {
    this.authenticationService.login(username, password);
    this.router.navigate(['/about']).then(() => {
    });
  }
}
