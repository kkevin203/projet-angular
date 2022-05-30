import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(private httpClient: HttpClient) { }

  getProducts() :Observable<any> {
    return this.httpClient.get('http://15.236.148.78/products/all')
  }
}
