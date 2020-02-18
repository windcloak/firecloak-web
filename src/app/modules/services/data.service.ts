import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { tap } from 'rxjs/operators';

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

    // Get 3 most recent cosplays
    private _cosplayPreview = this.db
        .collection<CosplayDetails>('cosplay', ref => ref.orderBy('order', 'desc').limit(4))
        .valueChanges({ idField: 'id' });

    get cosplays() {
        return this._cosplays;
    }

    get cosplaysPreview() {
        return this._cosplayPreview;
    }

    private _tutorials = this.db
        .collection<TutorialDetails>('tutorials', ref => ref.orderBy('order', 'desc'))
        .valueChanges({ idField: 'id' });

    private _tutorialsPreview = this.db
        .collection<TutorialDetails>('tutorials', ref => ref.orderBy('order', 'desc').limit(4))
        .valueChanges({ idField: 'id' });

    get tutorials() {
        return this._tutorials;
    }

    get tutorialsPreview() {
        return this._tutorialsPreview;
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

    tutorialDetails(id: string) {
        return this.db
            .collection('tutorials')
            .doc<TutorialDetails>(id)
            .valueChanges()
            .pipe(
                tap(_ => {
                    console.log('loaded');
                })
            );
    }
}
