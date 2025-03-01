import { style } from '@angular/animations';
import { Component, Input, ViewEncapsulation } from '@angular/core';
import { AccountType, NewCooperatorAdmission } from 'src/app/models/new-cooperator-admission';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: { style: 'display: flex; gap:16px' }
})
export class CardComponent {
  @Input() paramCard: NewCooperatorAdmission = {
    name: '',
    cpf: '',
    situation: false,
    account: [{
      accountType: AccountType.APPLICATION,
      accountNumber: 0
    }]
  }
}
