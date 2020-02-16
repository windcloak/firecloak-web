import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import {
    HostPageComponent,
    HomePageComponent,
    AboutPageComponent,
    CosplayPageComponent,
    CosplayDetailPageComponent,
    TutorialPageComponent,
    TutorialDetailPageComponent,
    ContactPageComponent,
    LinksPageComponent,
    ErrorPageComponent
} from './pages';

const ROUTES = [{
    path: '',
    component: HostPageComponent,
    children: [{
        path: '',
        component: HomePageComponent
    },
    {
        path: 'about',
        component: AboutPageComponent
    },
    {
        path: 'cosplay',
        component: CosplayPageComponent
    },
    {
        path: 'cosplay/:id',
        component: CosplayDetailPageComponent
    },
    {
        path: 'tutorials',
        component: TutorialPageComponent
    },
    {
        path: 'tutorials/:id',
        component: TutorialDetailPageComponent
    },
    {
        path: 'contact',
        component: ContactPageComponent
    },
    {
        path: 'links',
        component: LinksPageComponent
    },
    {
        path: 'error',
        component: ErrorPageComponent
    },
    ]
}, {
    path: '**',
    redirectTo: 'error'
},
];


@NgModule({
    imports: [
        RouterModule.forChild(ROUTES)
    ],
    exports: [
        RouterModule
    ]
})

export class HomeRoutingModule { }
