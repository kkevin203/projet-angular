import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class SellService {
  constructor() {}
  private state = "STAND_BY";

  getState() {
    return this.state;
  }
  setState(state: string) {
    this.state = state;
  }
}
