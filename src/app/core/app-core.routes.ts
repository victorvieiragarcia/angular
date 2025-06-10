import { Routes } from '@angular/router';
import { AppCoreComponent } from './app-core.component';
import { ExpensesComponent } from './modules/expenses/expenses.component';

export const routes: Routes = [
  { path: '', redirectTo: 'dash', pathMatch: 'full' },
  {
    path: '',
    component: AppCoreComponent,
    children: [
      {
        path: 'dash',
        loadComponent: () =>
          import('./modules/dash/dash.component').then((c) => c.DashComponent),
      },
      {
        path: 'expenses',
        loadChildren: () =>
          import('./modules/expenses/expenses.routes').then((r) => r.routes),
      },
    ],
  },
];
