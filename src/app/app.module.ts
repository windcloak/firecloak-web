import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { SharedModule } from './shared';
import { HomeModule } from './modules';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAnalyticsModule, ScreenTrackingService, CONFIG } from '@angular/fire/analytics';

import { environment } from '../environments/environment';

import { NgxScrollTopModule } from 'ngx-scrolltop';
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
    AngularFireAnalyticsModule,

    NgxScrollTopModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),

  ],
  providers: [
    ScreenTrackingService,
    { provide: CONFIG, useValue: {
      send_page_view: false,
      allow_ad_personalization_signals: false,
      anonymize_ip: true
    } },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
