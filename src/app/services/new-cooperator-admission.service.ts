import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { AccountType, NewCooperatorAdmission } from '../models/new-cooperator-admission';

export const MOCK: NewCooperatorAdmission[] = [
  {
    name: 'Vitória Carolina Cecília Duarte',
    cpf: '388.387.945-29',
    situation: true,
    account: [{
      accountType: AccountType.APPLICATION,
      accountNumber: 557931
    },
    {
      accountType: AccountType.CURRENT,
      accountNumber: 7784611
    }]
  },
  {
    name: 'Gabrielly Lara Sueli Gomes',
    cpf: '015.512.198-75',
    situation: false,
    account: [{
      accountType: AccountType.APPLICATION,
      accountNumber: 557932
    },
    {
      accountType: AccountType.CURRENT,
      accountNumber: 7784612
    }]
  }
];

@Injectable({
  providedIn: 'root'
})
export class NewCooperatorAdmissionService {

  constructor() { }

  get(cpf: string): Observable<NewCooperatorAdmission | undefined> {
    const response = MOCK.find((account) => cpf === account.cpf);
    return of(response).pipe(delay(3000));
  }
}
