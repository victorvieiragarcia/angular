import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./core/app-core.routes').then((r) => r.routes),
  }
];
