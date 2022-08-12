import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private baseUrl = 'http://localhost:8085/e-farming/user';

  constructor( private http:HttpClient ) { }

  getDealersList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  login(dealer:any):Observable<any>
  {
    return this.http.post(`http://localhost:8085/e-farming/farmers`,dealer)
  }

  register(dealer:any):Observable<any>
  {
    alert("Register")
    return this.http.post(`http://localhost:8085/e-farming/farmer`,dealer)
  }

  saveUser(dealer: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, dealer);
  }

  saveUserStep(dealer: Object): Observable<Object> {
    return this.http.post(`http://localhost:8085/e-farming/step`, dealer);
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    console.log(!(user === null))
    return !(user === null)
  }
 
  logOut() {
    sessionStorage.removeItem('username')
  }
}