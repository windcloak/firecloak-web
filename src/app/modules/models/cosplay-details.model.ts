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
}

// Construction notes
export class CosplayNotes {
    title: string;
    description: string;
}
