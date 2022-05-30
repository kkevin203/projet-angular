import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../services/http-service.service';

@Component({
  selector: 'wfb-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css'],
})
export class ListProductComponent implements OnInit {
  products = [
    {
      title: 'maillot',
      price: 45,
      description: 'voici notre maillot',
    },
    {
      title: 'maillot 2',
      price: 450,
      description: 'voici notre maillot en or',
    },
    {
      title: 'maillot 3',
      price: 4500,
      description: 'voici notre maillot en diamand',
    },
  ];
  constructor(private httpServiceService: HttpServiceService,
              private HttpClient: HttpClient) { }

  ngOnInit(): void {}

  getProducts() {
    this.httpServiceService.getProducts().subscribe((data) => console.log(data))
  }
}
