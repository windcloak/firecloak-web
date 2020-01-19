import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomePageComponent implements OnInit {

introCarousel = [
  {
    title: 'cosplay',
    description: 'Construction notes & gallery',
    indicator: '#cosplay',
  },
  {
    title: 'tutorials',
    description: 'Step by step instructions on how to make things',
    indicator: '#tutorials',
  },
  {
    title: 'cosplay',
    description: 'Construction notes & gallery',
    indicator: '#cosplay',
  }
];

  constructor() { }

  ngOnInit() {
  }

}
