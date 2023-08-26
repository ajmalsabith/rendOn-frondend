

import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ProfessionalInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let  admintoken= localStorage.getItem('adminsecret')
    let usertoken=localStorage.getItem("usersecret")
 
    
    if (usertoken) {
      const newRequest = request.clone({
        headers: request.headers.set('Authorization', 'Bearer ' + usertoken)
      });
     
      
      

      return next.handle(newRequest);
    }
   
    if (admintoken) {
      const newRequest = request.clone({
        headers: request.headers.set('Authorization', 'Bearer ' + admintoken)
      });
     
      
      

      return next.handle(newRequest);
    }

    return next.handle(request);
  }
}