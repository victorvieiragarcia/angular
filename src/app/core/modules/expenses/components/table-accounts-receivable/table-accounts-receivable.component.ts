import { CurrencyPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IReceivable } from 'src/app/models/receivable';

@Component({
  selector: 'app-table-accounts-receivable',
  imports: [CurrencyPipe],
  templateUrl: './table-accounts-receivable.component.html',
  styleUrl: './table-accounts-receivable.component.scss',
})
export class TableAccountsReceivableComponent {
  @Input() receivable: IReceivable[] = [];
}
