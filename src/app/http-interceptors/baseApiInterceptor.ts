import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { environment } from '@environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class BaseApiInterceptor implements HttpInterceptor {
    baseUrl: string;
    constructor() {
        this.baseUrl = environment.apiUri;
    }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req.clone({ url: `${this.baseUrl}/${req.url}` }));
      }
}
