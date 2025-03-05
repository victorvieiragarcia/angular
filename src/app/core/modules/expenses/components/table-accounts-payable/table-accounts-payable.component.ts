import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IAccountPayable } from 'src/app/models/accout-payable';

@Component({
  selector: 'app-table-accounts-payable',
  imports: [CurrencyPipe, DatePipe],
  templateUrl: './table-accounts-payable.component.html',
  styleUrl: './table-accounts-payable.component.scss',
})
export class TableAccountsPayableComponent {
  @Input() accountPayable: IAccountPayable[] = [];
}
