import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

import {
  TutorialDetails
} from '@myapp/modules/models';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.scss']
})
export class TutorialPageComponent {

  tutorials: Observable<TutorialDetails[]>;

  constructor(private db: AngularFirestore) {
this.tutorials = this.db
    .collection<TutorialDetails>('tutorials', ref => ref.orderBy('order', 'desc'))
    .valueChanges({ idField: 'id' });

  }

}
