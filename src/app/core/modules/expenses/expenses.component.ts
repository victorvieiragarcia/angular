import { Component, inject, OnInit } from '@angular/core';
import { TableAccountsPayableComponent } from './components/table-accounts-payable/table-accounts-payable.component';
import { TableAccountsReceivableComponent } from './components/table-accounts-receivable/table-accounts-receivable.component';
import { EXPENSE, IExpense, ITotals, TOTALS } from './expense';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ExpensesService } from '@services/expenses-http.service';
import { ButtonActionsBtnComponent } from '@shared/button-actions-btn/button-actions-btn.component';

@Component({
  selector: 'app-expenses',
  imports: [
    CommonModule,
    FormsModule,
    TableAccountsPayableComponent,
    TableAccountsReceivableComponent,
    ButtonActionsBtnComponent,
  ],
  providers: [ExpensesService],
  templateUrl: './expenses.component.html',
  styleUrl: './expenses.component.scss',
})
export class ExpensesComponent implements OnInit {
  dateExpenses = '';
  expense: IExpense = EXPENSE;
  totals: ITotals = TOTALS;
  private expensesService = inject(ExpensesService);
  private router = inject(Router);

  ngOnInit(): void {
    this.convertNewDateForInput();
    this.getExpensesDate();
  }

  public getExpensesDate() {
    this.expensesService.getDate(this.dateExpenses).subscribe((res) => {
      this.expense = res;
      if (this.expense) this.calculateTotal(res);
    });
  }

  private calculateTotal(res: IExpense) {
    let totalP = 0;
    let totalR = 0;
    res.accountsPayable?.forEach((element) => {
      totalP += element.value;
    });

    res.receivable?.forEach((element) => {
      totalR += element.value;
    });

    this.totals = {
      totalPayable: totalP,
      totalReceivable: totalR,
      total: totalR - totalP,
    };
  }

  private convertNewDateForInput() {
    const month = new Date().getMonth() + 1;
    const year = new Date().getFullYear();
    const monthStr = month < 9 ? '0' + month : month;
    this.dateExpenses = year + '-' + monthStr;
  }

  redirectRegister() {
    this.router.navigate(['expenses/register']);
  }
}
