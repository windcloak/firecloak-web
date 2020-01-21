import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutPageComponent {

  profiles = [
    {
      title: 'Name',
      description: 'May'
    },
    {
      title: 'Birthday',
      description: 'Jan 14'
    },
    {
      title: 'Height',
      description: '164 cm'
    },
    {
      title: 'Blood Type',
      description: 'O+'
    },
    {
      title: 'Ethnicity',
      description: 'Chinese-American'
    },
    {
      title: 'Cosplaying Since',
      description: '2010'
    },
    {
      title: 'Hobbies',
      description: 'Cosplay, photography, anime, SSBU, Pokemon, Webtoons'
    },
    {
      title: 'Occupation',
      description: 'Software Developer'
    },
  ];

  websiteInfo = [
    {
      title: 'Angular 8',
      link: 'https://angular.io'
    },
    {
      title: 'Bootstrap',
      link: 'https://getbootstrap.com/'
    },
    {
      title: 'Font Awesome',
      link: 'https://fontawesome.com/'
    },
    {
      title: 'Ngx-gallery',
      link: 'https://github.com/lukasz-galka/ngx-gallery'
    },
    {
      title: 'Ngx-scrolltop',
      link: 'https://github.com/bartholomej/ngx-scrolltop'
    },
    {
      title: 'Ng-lazyload-image',
      link: 'https://github.com/tjoskar/ng-lazyload-image'
    },
  ];

  constructor() { }

}
