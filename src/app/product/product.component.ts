import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wfb-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  title!:string;
  description!: string;
  price!: number;
  constructor() { }

  ngOnInit(): void {
    this.title= 'Maillot'
    this.description= 'voici notre maillot'
    this.price= 45
  }

}
