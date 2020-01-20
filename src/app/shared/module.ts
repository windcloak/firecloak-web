import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { COMPONENTS } from './components';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { NgxGalleryModule } from 'ngx-gallery';
import { LazyLoadImageModule } from 'ng-lazyload-image';

import './icons';

@NgModule({
    declarations: [
        COMPONENTS
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        HttpClientModule,
        FontAwesomeModule,
        NgxGalleryModule,
        LazyLoadImageModule,
    ],
    exports: [
        CommonModule,
        FormsModule,
        RouterModule,
        HttpClientModule,
        FontAwesomeModule,
        NgxGalleryModule,
        LazyLoadImageModule,
        COMPONENTS,
    ],
    entryComponents: [
        COMPONENTS
    ],
})
export class SharedModule {
}
