import { Routes } from '@angular/router';
import { ExpensesComponent } from './expenses.component';

export const routes: Routes = [
  {
    path: '',
    component: ExpensesComponent,
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./components/form/form.component').then((c) => c.FormComponent),
  },
];
