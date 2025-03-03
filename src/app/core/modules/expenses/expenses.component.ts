import { Component } from '@angular/core';
import { TableAccountsPayableComponent } from './components/table-accounts-payable/table-accounts-payable.component';
import { TableAccountsReceivableComponent } from './components/table-accounts-receivable/table-accounts-receivable.component';

@Component({
  selector: 'app-expenses',
  imports: [TableAccountsPayableComponent, TableAccountsReceivableComponent],
  templateUrl: './expenses.component.html',
  styleUrl: './expenses.component.scss',
})
export class ExpensesComponent {}
