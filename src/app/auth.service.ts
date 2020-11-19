import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class AuthService {
  private _uri = "http://localhost:3000/api/register"
  private _uri1 = "http://localhost:3000/api/login"
  private _uri2 = "http://localhost:3000/api/event"
  private _uri3 = "http://localhost:3000/api/delete"
  private _uri4 = "http://localhost:3000/api/update"
  public user='';

  constructor(private httpClient: HttpClient) { }
  registereduser(user){
    return this.httpClient.post<any>(this._uri,user);
  }
  loginuser(user){
    // this.email = user.email
    return this.httpClient.post<any>(this._uri1,user)                      
  }
  currentuser(){
    return this.user 
  }

  errorHandler(error: HttpErrorResponse){
    return Observable.throw(error.message || "server error");
    
    
  }
  deleteuser(id : number){
    return this.httpClient.delete(this._uri3 + '/' + id )
  }
  updateuser(user,id : string) {
    return this.httpClient.put<any>(this._uri4 + '/' + id, user)
  }
  events(){
    return this.httpClient.get<any>(this._uri2)
  }
  loggedIn(){
    return !!localStorage.getItem('token')
  }
  getToken(){
    return localStorage.getItem('token')
  }
  logout(){
    localStorage.removeItem('token')
  }
} 


