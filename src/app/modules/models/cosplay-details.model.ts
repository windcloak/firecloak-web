import { AngularFireModule } from '@angular/fire';

export class CosplayDetails {
    name: string;
    order: number;
    series: string;
    year: number;
    cosplayMenu: CosplayMenu[];
}

export class CosplayMenu {
    name: string;
    order: number;
    series: string;
}
