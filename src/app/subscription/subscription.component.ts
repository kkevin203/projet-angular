import { Component, OnInit } from '@angular/core';
import { SellService } from '../services/sell.service';

@Component({
  selector: 'wfb-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css'],
})
export class SubscriptionComponent implements OnInit {
  
  constructor(private sell: SellService) {}

  ngOnInit(): void {}
  sellProduct() {
    this.sell.setState('OCCUPIED');
  }
  showState() {
    const state = this.sell.getState();
    alert(state);
  }
  release() {
    this.sell.setState('FREE');
  }
}
