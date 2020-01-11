import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppCustomPreloader } from './app.routing-loader';
import { HomeModule } from '../app/modules';

const routes: Routes = [{
    path: '',
    loadChildren: () => HomeModule,
    data: { preload: true } // Preload data if you think this will be a popular page
},
{
    path: '**',
    redirectTo: ''
}];

@NgModule({
    imports: [RouterModule.forRoot(routes, { preloadingStrategy: AppCustomPreloader })],
    exports: [RouterModule],
    providers: [AppCustomPreloader]
})
export class AppRoutingModule { }
