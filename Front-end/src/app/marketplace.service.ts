import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class MarketplaceService {

  private baseUrl = 'http://localhost:8085/e-farming/use';

  constructor( private http:HttpClient ) { }

  getDealersList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  createMarketItem(dealer:any):Observable<any>
  {
    return this.http.post(`http://localhost:8085/e-farming/marketItem`,dealer)
  }
}