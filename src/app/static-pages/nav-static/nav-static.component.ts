import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../core/services/authentication/authentication.service';

@Component({
  selector: 'app-nav-static',
  templateUrl: './nav-static.component.html',
  styles: []
})
export class NavStaticComponent implements OnInit {

  constructor(
    private authenticationService: AuthenticationService
  ) {}

  ifAuthenticated() {
    return this.authenticationService.checkIfAuthenticated();
  }

  doLogout() {
    this.authenticationService.logout();
  }

  ngOnInit() {
  }

}
