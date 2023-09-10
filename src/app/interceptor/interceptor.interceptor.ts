import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ProfessionalInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    let admintoken = localStorage.getItem('adminsecret');
    let usertoken = localStorage.getItem('usersecret');

    if (usertoken) {
      const newRequest = request.clone({
        headers: request.headers.set('Authorization', 'Bearer ' + usertoken),
      });

      return next.handle(newRequest).pipe(
        catchError((error: HttpErrorResponse) => {
          console.error('HTTP Error:', error);
          return throwError(error);
        })
      );
    }

    if (admintoken) {
      const newRequest = request.clone({
        headers: request.headers.set('Authorization', 'Bearer ' + admintoken),
      });

      return next.handle(newRequest).pipe(
        catchError((error: HttpErrorResponse) => {
          console.error('HTTP Error:', error);
          return throwError(error);
        })
      );
    }

    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('HTTP Error:', error);
        return throwError(error);
      })
    );
  }
}
