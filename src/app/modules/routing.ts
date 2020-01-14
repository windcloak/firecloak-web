import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import {
    HostPageComponent,
    HomePageComponent,
    AboutPageComponent,
    CosplayPageComponent,
    TutorialPageComponent,
    ContactPageComponent,
    LinksPageComponent
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
        path: 'tutorials',
        component: TutorialPageComponent
    },
    {
        path: 'contact',
        component: ContactPageComponent
    },
    {
        path: 'links',
        component: LinksPageComponent
    },
    ]
}, {
    path: '**',
    redirectTo: ''
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
