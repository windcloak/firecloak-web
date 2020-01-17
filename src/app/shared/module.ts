import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { NgxGalleryModule } from 'ngx-gallery';
import { COMPONENTS } from './components';

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
	],
	exports: [
		CommonModule,
		FormsModule,
		RouterModule,
		HttpClientModule,
		FontAwesomeModule,
		NgxGalleryModule,
		COMPONENTS,
	],
	entryComponents: [
		COMPONENTS
	],
})
export class SharedModule {
}
