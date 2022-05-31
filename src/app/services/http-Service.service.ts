import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { Axios } from 'axios';

@Injectable({
  providedIn: 'root',
})
export class HttpServiceService {
  constructor(private httpClient: HttpClient, private axios: Axios) {}

  getProducts(): Observable<any> {
    return this.httpClient.get('http://15.236.148.78/products/all');
  }
  getProductsWithPromise(): Promise<any> {
    return this.axios.get('http://15.236.148.78/products/all');
  }
}
