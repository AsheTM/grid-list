import { Inject, Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { CUSTOM_TOKEN_PROVIDER_DATA, CUSTOM_TOKEN_PROVIDER_ENVIRONMENT } from './app.provider';


@Injectable()
export class AppInterceptor implements HttpInterceptor {

  constructor(@Inject(CUSTOM_TOKEN_PROVIDER_ENVIRONMENT) private isProductionMode: boolean,
  @Inject(CUSTOM_TOKEN_PROVIDER_DATA) private data: any) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if(this.isProductionMode) {
      return of(new HttpResponse<any>({ body: this.data }));
    }

    return next.handle(request);
  }

}
