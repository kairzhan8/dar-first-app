import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class LoggerInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const newreq = req.clone({
      setParams: {
        'userId': `kairzhan`,
      },
    });
    console.log(newreq);
    return next.handle(newreq);
  }
}
