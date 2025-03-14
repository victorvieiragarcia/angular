import { Component, inject, signal } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { NgxCurrencyDirective } from 'ngx-currency';
import { TableAccountsPayableComponent } from '../table-accounts-payable/table-accounts-payable.component';
import { EXPENSE, IExpense, MASKBRL } from '../../expense';
import { ExpensesService } from 'src/app/services/expenses-http.service';
import { map } from 'rxjs';

export const valueMoreZeroValidator: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  return control.value > 0 ? null : { isValueInvalid: true };
};

@Component({
  selector: 'app-form',
  imports: [
    TableAccountsPayableComponent,
    FormsModule,
    ReactiveFormsModule,
    NgxCurrencyDirective,
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent {
  private formBuilder = inject(FormBuilder);

  expense: IExpense = EXPENSE;
  maskBrl = MASKBRL;

  expensesform = this.formBuilder.group({
    my: ['', Validators.required],
    accountsPayable: this.formBuilder.nonNullable.group({
      name: ['', Validators.required],
      value: [0, [Validators.required, valueMoreZeroValidator]],
      date: [''],
    }),
  });

  constructor(private expensesService: ExpensesService) {}

  addAccoutPayable() {
    this.expense.accountsPayable.push(
      this.expensesform.getRawValue().accountsPayable
    );
  }

  save() {
    this.expense.my = this.expensesform.getRawValue().my as '';

    this.expensesService.getDate(this.expense.my).subscribe((res) => {
      if (res.id) {
        console.log(res.id);
      } else {
        this.expensesService.save(this.expense).subscribe(
          (data) => {
            console.log('POST Request is successful ', data);
          },
          (error) => {
            console.log('Error', error);
          }
        );
      }
    });
  }
}
