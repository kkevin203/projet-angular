import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wfb-pole-event',
  templateUrl: './pole-event.component.html',
  styleUrls: ['./pole-event.component.css'],
})
export class PoleEventComponent implements OnInit {
  imgagf1 = '../../assets/picture/20220406_121341.jpg';
  imgagf2 = '../assets/picture/20220402_221043.jpg';
  imgagf3 = '../assets/picture/20220402_221035.jpg';

  constructor() {}

  ngOnInit(): void {}
}
