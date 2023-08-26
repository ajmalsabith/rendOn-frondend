import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    const jwtToken = localStorage.getItem('adminsecret');
    const loginRoute = '/admin';

    if (
      state.url !== loginRoute &&
      
      jwtToken === null
    ) {
      this.router.navigate(['/admin']);
      return false;
    } else if (
      (state.url === loginRoute) &&
      jwtToken !== null
    ) {
      this.router.navigate(['/admin/dashboard']);
      return false;
    }
    return true;
  }
}