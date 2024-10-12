import { Routes } from '@angular/router';
import { LayoutComponent } from './core/components/layout/layout.component';
import { FaqComponent } from './modules/faq/faq.component';
import { HomeComponent } from './modules/home/home.component';
import { RandomComponent } from './modules/random/random.component';

export const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', pathMatch: 'full', redirectTo: 'home' },
            { path: 'home', component: HomeComponent },
            { path: 'faq', component: FaqComponent },
            { path: 'random', component: RandomComponent },
            // { path: 'error', component: ErrorViewComponent },
        ],
    },
];
