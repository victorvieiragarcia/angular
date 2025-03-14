import { IAccountPayable } from 'src/app/models/accout-payable';
import { IReceivable } from 'src/app/models/receivable';

export interface IExpense {
  id?: number;
  my: string;
  accountsPayable: IAccountPayable[];
  receivable: IReceivable[];
}

export interface ITotals {
  totalPayable: number;
  totalReceivable: number;
  total: number;
}

export const EXPENSE = {
  my: '',
  accountsPayable: [],
  receivable: [],
};

export const TOTALS = { totalPayable: 0, totalReceivable: 0, total: 0 };

export const MASKBRL = { prefix: 'R$ ', thousands: '.', decimal: ',' };
