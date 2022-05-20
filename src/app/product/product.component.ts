import { Component, OnInit } from '@angular/core';
import { SellService } from '../services/sell.service';

@Component({
  selector: 'wfb-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  title!: string;
  description!: string;
  price!: number;
  constructor(private sell: SellService) {}

  ngOnInit(): void {
    this.title = 'Maillot';
    this.description = 'voici notre maillot';
    this.price = 45;
  }
  sellProduct() {
    this.sell.state = 'selled';
  }
  showProduct() {
    alert(this.sell.getState());
  }
}
