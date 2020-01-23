import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

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
  sending = false;
  contactForm: ContactForm;


  constructor(private db: AngularFirestore) { }

	ngOnInit() {
		this.resetContactForm();
	}

  get diagnostic() { return JSON.stringify(this.contactForm); }

  // SEND MESSAGE FORM
  async onSubmit() {
    //  TODO: REPORT PROGRESS
    this.sending = true;

    try {
      await this.db.collection('contact').add({ ...this.contactForm });
      this.resetContactForm();
      this.submitted = true;
    } catch (error) {
      console.log('Could not submit form', error);
    } finally {
      this.sending = false;
    }
  }

  // Reset message form
  resetContactForm() {
    this.contactForm = new ContactForm();
  }

  // Display form so user can submit again
  resetForm() {
    this.submitted = false;
  }

}
