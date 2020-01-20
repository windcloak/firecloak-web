import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import {
    TutorialDetails,
} from '@myapp/modules/models';

@Component({
    selector: 'app-tutorial-detail',
    templateUrl: './tutorial-detail.component.html',
    styleUrls: ['./tutorial-detail.component.scss']
})
export class TutorialDetailPageComponent implements OnInit {

    tutorial: Observable<TutorialDetails>;
    loading = true;
    placeholderImage = 'assets/tutorials/placeholder.gif';

    constructor(
        private location: Location,
        private route: ActivatedRoute,
        private router: Router,
        private db: AngularFirestore) { }

    ngOnInit(): void {
        window.scroll(0, 0);

        this.route.params.subscribe(params => {
            if (params['id']) {
                this.loadtutorial(params['id']);

            } else {
                // TODO: SHOW AN ERROR MESSAGE OR REDIRECT HOME
                this.location.back(); // goes home
            }
        });

    }


    private loadtutorial(id: string) {

        this.tutorial = this.db
            .collection('tutorials')
            .doc<TutorialDetails>(id)
            .valueChanges()
            .pipe(
                tap(_ => {
                    console.log('loaded');
                    this.loading = false;
                })

            );

    }

}
