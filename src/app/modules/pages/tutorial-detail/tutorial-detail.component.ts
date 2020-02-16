import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from '@myapp/modules/services';
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
        private dataService: DataService) { }

    ngOnInit(): void {
        window.scroll(0, 0);

        this.route.params.subscribe(params => {
            if (params['id']) {
                this.loadTutorial(params['id']);

            } else {
                this.location.back(); // goes home
            }
        });

    }


    private loadTutorial(id: string) {
        this.tutorial = this.dataService.tutorialDetails(id).pipe(
            tap(_ => {
                this.loading = false;
            })
        );
    }

}
