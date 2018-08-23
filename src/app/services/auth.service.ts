import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
export interface User {
  userName: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false); // {
  get isLoggedIn() {
    return this.loggedIn.asObservable(); // {2}
  }

  constructor(
    private router: Router
  ) { }
  login(user: User) {
    if (user.userName !== '' && user.password !== '') { // {3}
    localStorage.setItem('sessid','Sairam');
      this.loggedIn.next(true);
      this.router.navigate(['/']);
    }
  }
  logout() {                            // {4}
    this.loggedIn.next(false);
    this.router.navigate(['/login']);
  }
}
