import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injectable } from '@angular/core';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { SharedModule } from './shared';
import { HomeModule } from './modules';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

import { LazyLoadImageModule } from 'ng-lazyload-image';
import { NgxScrollTopModule } from 'ngx-scrolltop';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';
import 'hammerjs';

import { ServiceWorkerModule } from '@angular/service-worker';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HomeModule,

    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, //  database features

    NgxGalleryModule,
    LazyLoadImageModule,
    NgxScrollTopModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),

  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
