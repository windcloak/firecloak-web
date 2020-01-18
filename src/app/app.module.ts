import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { SharedModule } from './shared';
import { HomeModule } from './modules';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

import { NgxGalleryModule } from 'ngx-gallery';

/* Custom Hammer configuration */
import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import * as Hammer from 'hammerjs';

export class CustomHammerConfig extends HammerGestureConfig {
  overrides = {
    pan: {
      direction: Hammer.DIRECTION_ALL,
    }
  };
}
/* End Custom hammer configuration */

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
  ],
  providers: [
    {provide: HAMMER_GESTURE_CONFIG, useClass: CustomHammerConfig}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
