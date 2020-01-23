import { Component, OnInit } from '@angular/core';

import {
  ContactForm
} from '@myapp/modules/models';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactPageComponent implements OnInit {

  submitted = false;
  contactForm: ContactForm;

  onSubmit() { this.submitted = true; }

  constructor() { }

  ngOnInit() {
  }


}
