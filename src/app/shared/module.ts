import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { COMPONENTS } from './components';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { DisqusModule } from 'ngx-disqus';
import { DISQUS_SHORTNAME } from 'ngx-disqus';
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
        Ng2SearchPipeModule,
        DisqusModule,
    ],
    exports: [
        CommonModule,
        FormsModule,
        RouterModule,
        HttpClientModule,
        FontAwesomeModule,
        NgxGalleryModule,
        LazyLoadImageModule,
        Ng2SearchPipeModule,
        DisqusModule,
        COMPONENTS,
        
    ],
    entryComponents: [
        COMPONENTS
    ],
    providers: [
        {provide: DISQUS_SHORTNAME, useValue: 'firecloak'}
      ],
})
export class SharedModule {
}
