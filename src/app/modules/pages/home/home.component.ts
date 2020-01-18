import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomePageComponent implements OnInit {

introCarousel = [
  {
    title: 'Cosplay',
    description: 'Construction notes & gallery'
  },
  {
    title: 'Tutorials',
    description: 'Step by step instructions on how to make things'
  },
  {
    title: 'Cosplay',
    description: 'Construction notes & gallery'
  }
];

  constructor() { }

  ngOnInit() {
  }

}
