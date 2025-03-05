import { Component, OnInit, signal } from '@angular/core';
import { TableAccountsPayableComponent } from './components/table-accounts-payable/table-accounts-payable.component';
import { TableAccountsReceivableComponent } from './components/table-accounts-receivable/table-accounts-receivable.component';
import { ExpensesService } from 'src/app/services/expenses-http.service';
import { EXPENSE, IExpense, ITotals } from './expense';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-expenses',
  imports: [
    CommonModule,
    FormsModule,
    TableAccountsPayableComponent,
    TableAccountsReceivableComponent,
  ],
  providers: [ExpensesService],
  templateUrl: './expenses.component.html',
  styleUrl: './expenses.component.scss',
})
export class ExpensesComponent implements OnInit {
  dateExpenses: string = '';
  expense: IExpense = EXPENSE;
  totals: ITotals = { totalPayable: 0, totalReceivable: 0, total: 0 };

  constructor(private expensesService: ExpensesService) {}

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
    let month = new Date().getMonth() + 1;
    let year = new Date().getFullYear();
    let monthStr = month < 9 ? '0' + month : month;
    this.dateExpenses = year + '-' + monthStr;
  }
}
