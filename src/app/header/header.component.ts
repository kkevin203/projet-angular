import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'wfb-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  img1= '../../assets/picture/logowfb.png'
  constructor() {}

  ngOnInit(): void {
  }

}
