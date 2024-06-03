import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // Get the JWT token from wherever you have stored it
    const token = localStorage.getItem('token');

    // Clone the request and add the Authorization header
    const authRequest = request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });

    // Pass the modified request to the next interceptor or to the backend
    return next.handle(authRequest)
      .pipe(tap(o => {
        // TODO
        console.log('AuthInterceptor', o);
      }));
  }
}
