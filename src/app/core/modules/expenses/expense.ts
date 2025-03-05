import { IAccountPayable } from 'src/app/models/accout-payable';
import { IReceivable } from 'src/app/models/receivable';

export interface IExpense {
  id: number;
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
  id: 0,
  my: '',
  accountsPayable: [],
  receivable: [],
};
