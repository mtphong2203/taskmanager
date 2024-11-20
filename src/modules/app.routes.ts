import { Routes } from '@angular/router';
import { UserLayoutComponent } from './shared/user-layout/user-layout.component';
import { ManagerLayoutComponent } from './shared/manager-layout/manager-layout.component';

export const routes: Routes = [
    {
        path: 'manager',
        component: ManagerLayoutComponent
    },

    {
        path: '',
        component: UserLayoutComponent,
        loadChildren: () => import('./user/user.module').then(m => m.UserModule)
    }
];
