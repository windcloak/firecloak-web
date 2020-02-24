import { Component } from '@angular/core';
import { createPopper } from '@popperjs/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {


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
    title: 'Links',
    url: 'links'
  }
];


  constructor() { }


}
