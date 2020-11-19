import { HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable,Injector } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenService implements HttpInterceptor {

  constructor(private _inj : Injector) { }
  intercept(req,next){
    let auth = this._inj.get(AuthService)
    let clonized = req.clone({
      setHeaders:{
        Authorization:`bearer ${auth.getToken()}`
      }
    })
       return next.handle(clonized)
  }
}
