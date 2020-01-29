import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

import {
    CosplayDetails,
    TutorialDetails
} from '@myapp/modules/models';

@Injectable()
export class DataService {

    constructor(private db: AngularFirestore) { }

    private _cosplays = this.db
        .collection<CosplayDetails>('cosplay', ref => ref.orderBy('order', 'desc'))
        .valueChanges({ idField: 'id' });

    get cosplays() {
        return this._cosplays;
    }

    private _tutorials = this.db
        .collection<TutorialDetails>('tutorials', ref => ref.orderBy('order', 'desc'))
        .valueChanges({ idField: 'id' });

    get tutorials() {
        return this._tutorials;
    }


 cosplayDetails(id: string) {
    return this.db
        .collection('cosplay')
        .doc<CosplayDetails>(id)
        .valueChanges()
        .pipe(
            tap(_ => {
                console.log('loaded');
            })

        );
    }
}

