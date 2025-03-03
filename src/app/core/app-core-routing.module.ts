import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppCoreComponent } from './app-core.component';
import { DashComponent } from './modules/dash/dash.component';
import { ExpensesComponent } from './modules/expenses/expenses.component';

export const routes: Routes = [
  {
    path: '',
    component: AppCoreComponent,
    children: [
      { path: '', redirectTo: 'dash', pathMatch: 'full' },
      {
        path: 'dash',
        component: DashComponent,
      },
      {
        path: 'expenses',
        component: ExpensesComponent,
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppCoreRoutingModule {}
