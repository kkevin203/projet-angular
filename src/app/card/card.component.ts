import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wfb-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  img2= '../../assets/picture/geekfest.png'
  constructor() { }

  ngOnInit(): void {
  }

}
