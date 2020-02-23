import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from '@myapp/modules/services';
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
    placeholderImage = 'assets/tutorials/placeholder.gif';

    // Disqus
    pageId: string;
    url: string;
    title: string;

    constructor(
        private location: Location,
        private route: ActivatedRoute,
        private dataService: DataService) { }


    ngOnInit(): void {

        window.scroll(0, 0);
        
        this.route.params.subscribe(params => {
            if (params['id']) {
                this.loadCosplay(params['id']);
                this.disqus(params['id']);
            } else {
                this.location.back(); // goes home
            }
        });

    }

    private loadCosplay(id: string) {
        this.cosplay = this.dataService.cosplayDetails(id).pipe(
            tap(_ => {
                this.loading = false;
            })
        );
    }

    private disqus(id: string) {
        this.pageId = id;
        this.title = id + '-cosplay';
        this.url = 'https://firecloak.net/cosplays/' + id;
    }

}
