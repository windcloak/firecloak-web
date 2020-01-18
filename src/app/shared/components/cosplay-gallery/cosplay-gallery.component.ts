import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import {
    CosplayDetails,
} from '@myapp/modules/models';

import { NgxGalleryOptions, NgxGalleryAnimation } from 'ngx-gallery';

@Component({
    selector: 'app-cosplay-gallery',
    templateUrl: './cosplay-gallery.component.html',
    styleUrls: ['./cosplay-gallery.component.scss']
})
export class CosplayGalleryComponent implements OnInit {

    cosplay: Observable<CosplayDetails>;
    loading = true;

    galleryOptions: NgxGalleryOptions[];

    constructor(
        private location: Location,
        private route: ActivatedRoute,
        private db: AngularFirestore) { }

    ngOnInit(): void {

        this.galleryOptions = [
            {
                // Size of Carousel
                width: '800px',
                height: '800px',

                // Carousel
                imageSize: 'contain',
                imagePercent: 100,
                imageSwipe: true,
                imageAutoPlay: true,
                imageAutoPlayPauseOnHover: true,
                imageAutoPlayInterval: 5000,
                imageAnimation: NgxGalleryAnimation.Slide,

                thumbnailsColumns: 5,
                thumbnailsPercent: 40,
                thumbnailsMargin: 20,
                thumbnailMargin: 20,
                thumbnailsSwipe: true,
                thumbnailsAutoHide: true,

                // Lightbox
                previewCloseOnClick: true,
                previewCloseOnEsc: true,
                previewSwipe: true,
                previewFullscreen: true,
                previewKeyboardNavigation: true,
                previewZoom: true,
                previewDownload: true,
                previewBullets: true,
            },
            // phones
            {
                breakpoint: 500,
                width: '100%',
                imagePercent: 80,

            },
            {
                breakpoint: 300,
                preview: false
            }
        ];


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
