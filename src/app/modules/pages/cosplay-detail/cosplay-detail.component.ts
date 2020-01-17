import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

import {
    CosplayDetails,
} from '@myapp/modules/models';

import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';

@Component({
    selector: 'app-cosplay-detail',
    templateUrl: './cosplay-detail.component.html',
    styleUrls: ['./cosplay-detail.component.scss']
})
export class CosplayDetailPageComponent implements OnInit {

    cosplay: Observable<CosplayDetails>;
    loading = true;

    galleryOptions: NgxGalleryOptions[];
    galleryImages: NgxGalleryImage[];

    constructor(
        private location: Location,
        private route: ActivatedRoute,
        private router: Router,
        private db: AngularFirestore) { }



    ngOnInit(): void {
        window.scroll(0, 0);


        this.galleryOptions = [
            {
                width: '800px',
                height: '800px',
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
            // max-width 400
            {
                breakpoint: 300,
                preview: false
            }

        ];

        // this.galleryImages = this.cosplay.imgGalleryUrls;

        this.galleryImages = [
            {
                small: 'assets/cosplay/mio-akiyama-k-on/tn/1.jpg',
                medium: 'assets/cosplay/mio-akiyama-k-on/1.jpg',
                big: 'assets/cosplay/mio-akiyama-k-on/1.jpg'
            },
            {
                small: 'assets/cosplay/mio-akiyama-k-on/tn/2.jpg',
                medium: 'assets/cosplay/mio-akiyama-k-on/2.jpg',
                big: 'assets/cosplay/mio-akiyama-k-on/2.jpg'
            },
            {
                small: 'assets/cosplay/mio-akiyama-k-on/tn/2.jpg',
                medium: 'assets/cosplay/mio-akiyama-k-on/2.jpg',
                big: 'assets/cosplay/mio-akiyama-k-on/2.jpg'
            },
            {
                small: 'assets/cosplay/mio-akiyama-k-on/tn/1.jpg',
                medium: 'assets/cosplay/mio-akiyama-k-on/1.jpg',
                big: 'assets/cosplay/mio-akiyama-k-on/1.jpg'
            },
            {
                small: 'assets/cosplay/mio-akiyama-k-on/tn/2.jpg',
                medium: 'assets/cosplay/mio-akiyama-k-on/2.jpg',
                big: 'assets/cosplay/mio-akiyama-k-on/2.jpg'
            },
            {
                small: 'assets/cosplay/mio-akiyama-k-on/tn/2.jpg',
                medium: 'assets/cosplay/mio-akiyama-k-on/2.jpg',
                big: 'assets/cosplay/mio-akiyama-k-on/2.jpg'
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
