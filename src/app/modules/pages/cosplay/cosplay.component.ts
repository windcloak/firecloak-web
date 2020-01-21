import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

import {
  CosplayDetails
} from '@myapp/modules/models';

@Component({
  selector: 'app-cosplay',
  templateUrl: './cosplay.component.html',
  styleUrls: ['./cosplay.component.scss']
})
export class CosplayPageComponent {

  cosplays: Observable<CosplayDetails[]>;
  term: string;

  constructor(private db: AngularFirestore) {
    this.cosplays = this.db
      .collection<CosplayDetails>('cosplay', ref => ref.orderBy('order', 'desc'))
      .valueChanges({ idField: 'id' });

  }

}
