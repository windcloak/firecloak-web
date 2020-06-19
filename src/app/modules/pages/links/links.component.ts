import { Component } from '@angular/core';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss']
})
export class LinksPageComponent {

otherCosplayers = [
  {
    name: 'Melfina Cosplay',
    link: 'http://melfinacosplay.com/',
    image: 'assets/links/melfina.png'
  },
  {
    name: 'Yashuntafun',
    link: 'http://www.yashuntafun.com/',
    image: 'assets/links/yashuntafun.jpg'
  },
  {
    name: 'Puyoda',
    link: 'http://cosplay.silent-white.com/',
    image: 'assets/links/puyoda.jpg'
  },
  {
    name: 'Singing Away',
    link: 'http://singingaway.net/',
    image: 'assets/links/singingaway.jpg'
  },
  {
    name: 'Hezachan',
    link: 'http://www.hezachan.com/',
    image: 'assets/links/hezachan.jpg'
  }
];

textCosplayers = [
  {
    name: 'Calssara',
    link: 'http://www.calssara.com/'
  },
  {
    name: 'Maridah',
    link: 'https://www.maridah.com/'
  },
  {
    name: 'Yuurisans',
    link: 'https://yuurisans.wordpress.com'
  },
  {
    name: 'Starbuxx',
    link: 'https://starbuxx.wixsite.com/cosplay'
  },
  {
    name: 'Vicious Cosplay',
    link: 'http://viciouscosplay.com/'
  },
  {
    name: 'Yumi Cosplay',
    link: 'http://yumicosplay.fr/'
  },
  {
    name: 'Yuurisans',
    link: 'https://www.maridah.com/'
  },
  {
    name: 'Yayahan',
    link: 'http://yayahan.com'
  },
];

  constructor() {
   }

  // Lets user use for loop for any number of times
  fakeArray(length: number): Array<any> {
    if (length >= 0) {
      return new Array(length);
    }
  }

}
