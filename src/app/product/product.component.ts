import { Component, OnInit } from '@angular/core';
import { SellService } from '../services/sell.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'wfb-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  title!: string;
  description!: string;
  price!: number;
  productState!: string;
  constructor(private sell: SellService) {}

  ngOnInit(): void {
    this.title = 'Maillot';
    this.description = 'voici notre maillot';
    this.price = 45;
    this.productState = 'EN_STOCK'
  }
  sellProduct() {
    this.productState= 'SELLED';
  }
  showState() {
    const state = this.productState;
    alert(state);
  }
  release() {
    this.sell.setState('FREE');
  }
}
