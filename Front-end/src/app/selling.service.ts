import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SellingService {

  private baseUrl = 'http://localhost:8085/e-farming/user';

  constructor( private http:HttpClient ) { }

  getDealersList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  createSellingItem(dealer:any):Observable<any>
  {
    return this.http.post(`http://localhost:8085/e-farming/sellingItem`,dealer)
  }
}