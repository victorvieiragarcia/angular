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
import { ExpensesService } from '@services/expenses-http.service';

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
  private expensesService = inject(ExpensesService);
  private formBuilder = inject(FormBuilder);

  expense: IExpense = EXPENSE;
  maskBrl = MASKBRL;
  isValidAdd = true;
  active = signal(false);

  expensesform = this.formBuilder.group({
    my: ['', Validators.required],
    accountsPayable: this.formBuilder.nonNullable.group({
      name: ['', Validators.required],
      value: [0, [Validators.required, valueMoreZeroValidator]],
      date: [''],
    }),
  });

  addAccoutPayable() {
    this.isValidAdd = true;
    if (this.expensesform.controls['accountsPayable'].invalid) {
      this.isValidAdd = false;
      return;
    }

    this.expense.accountsPayable.push(
      this.expensesform.getRawValue().accountsPayable
    );
  }

  save() {
    if (this.isFieldTouchedAndInvalid('my')) {
      this.toggle();
      return;
    }

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

  isFieldTouchedAndInvalid(field: string) {
    return this.expensesform.get(field)?.valid;
  }

  toggle() {
    this.active.update((value) => !value);
  }
}
