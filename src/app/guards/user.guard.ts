import { CanActivateFn } from '@angular/router';

import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class userGuard {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    const jwtToken = localStorage.getItem('usersecret');
    const loginRoute = '/login';

    if (
      state.url !== loginRoute &&
      
      jwtToken === null
    ) {
      this.router.navigate(['/login']);
      return false;
    } else if (
      (state.url === loginRoute) &&
      jwtToken !== null
    ) {
      this.router.navigate(['/home']);
      return false;
    }
    return true;
  }
}