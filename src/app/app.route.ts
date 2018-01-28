import {Routes} from '@angular/router';

export const appRoutes: Routes = [
    { path: '**', redirectTo: 'login' },
    { path: 'login', loadChildren: './pages/login/lgn-layout/lgn-layout.module#LoginLayoutModule'}
];

