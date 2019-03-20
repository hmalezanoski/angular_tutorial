import { Injectable } from '@angular/core';

@Injectable()
export class AuthenticationService {
  constructor() { }

  login(username: string , password: string) {

    const userDetails = {
      firstName : 'Don',
      lastName: 'Jon',
      token: '123123123'
    };

    localStorage.setItem('userDetails', JSON.stringify(userDetails) );
    localStorage.setItem('authenticated', '1' );
    return true;
  }

  logout() {
    localStorage.clear();
    return true;
  }

  checkIfAuthenticated() {
    const authenticated = localStorage.get('authenticated');
    return (authenticated === '1');
  }

}
