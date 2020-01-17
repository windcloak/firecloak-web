import { AngularFireModule } from '@angular/fire';

export class CosplayDetails {
    name: string;
    order: number;
    series: string;
    year: number;
    cosplayNotes: CosplayNotes[];
    description: string;
    mainImgUrl: string;
    photographer: string;
    imgGalleryUrls: ImgGalleryUrls[];
}

// Construction notes
export class CosplayNotes {
    title: string;
    description: string;
}

export class ImgGalleryUrls {
    small: string;
    medium: string;
    big: string;
}
