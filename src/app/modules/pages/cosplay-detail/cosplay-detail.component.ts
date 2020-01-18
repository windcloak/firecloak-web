import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import {
    CosplayDetails,
} from '@myapp/modules/models';

@Component({
    selector: 'app-cosplay-detail',
    templateUrl: './cosplay-detail.component.html',
    styleUrls: ['./cosplay-detail.component.scss']
})
export class CosplayDetailPageComponent implements OnInit {

    cosplay: Observable<CosplayDetails>;
    loading = true;

    constructor(
        private location: Location,
        private route: ActivatedRoute,
        private router: Router,
        private db: AngularFirestore) { }

    ngOnInit(): void {
        window.scroll(0, 0);

        this.route.params.subscribe(params => {
            if (params['id']) {
                this.loadCosplay(params['id']);

            } else {
                // TODO: SHOW AN ERROR MESSAGE OR REDIRECT HOME
                this.location.back(); // goes home
            }
        });

    }


    private loadCosplay(id: string) {

        this.cosplay = this.db
            .collection('cosplay')
            .doc<CosplayDetails>(id)
            .valueChanges()
            .pipe(
                tap(_ => {
                    console.log('loaded');
                    this.loading = false;
                })

            );

    }

}
