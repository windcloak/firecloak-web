import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

 

  constructor() { }

  menus = [
    {
      title: 'Home',
      url: '/'
    },
    {
      title: 'About',
      url: 'about'
    },
    {
      title: 'Cosplay',
      url: 'cosplay'
    },
    {
      title: 'Tutorials',
      url: 'tutorials'
    },
    {
      title: 'Contact',
      url: 'contact'
    },
    {
      title: 'Social',
      url: 'social'
    },
    {
      title: 'Store',
      url: 'store'
    },
  ];


}
