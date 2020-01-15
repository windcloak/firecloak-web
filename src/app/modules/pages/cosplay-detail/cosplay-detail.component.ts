import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

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
    //   this.cosplayMenu = this.db
    //     .collection<CosplayMenu>('cosplay', ref => ref.orderBy('order', 'desc'))
    //     .valueChanges();

    // }

    ngOnInit() {
        window.scroll(0, 0);

        this.route.params.subscribe(params => {
            if (params['id']) {
                this.loadProject(params['id']);

            } else {
                // TODO: SHOW AN ERROR MESSAGE OR REDIRECT HOME
                this.location.back(); // goes home
            }

        });

    }


    private loadProject(id: string) {

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
