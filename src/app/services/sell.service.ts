import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SellService {

  constructor() { }
  public state = 'stand by';
  getState(){
    return this.state
  }

}
