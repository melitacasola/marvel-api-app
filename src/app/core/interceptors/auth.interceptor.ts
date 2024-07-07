
import { Injectable, inject } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocalStorageService } from '../services/local-storage.service';
import { environment } from '../../../environments/environment';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  private localStorageService = inject(LocalStorageService);

  intercept(req : HttpRequest<any>, next : HttpHandler) : Observable<HttpEvent<any>> {
    const hash = this.localStorageService.getHash();
    // const apiKey!: string | number | boolean = this.localStorageService.getPublicKey();
    const apiKey = environment.publicKey;

    if(hash){
      const httpReq = req.clone({
        params: req.params
            .set('ts', 1)
            .set('apikey', apiKey)
            .set('hash', hash)
      });

      return next.handle(httpReq);
    }
   return next.handle(req);
  }

}
