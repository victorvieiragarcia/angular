// import { ComponentFixture, TestBed } from '@angular/core/testing';

// import { ExpensesComponent } from './expenses.component';

// describe('ExpensesComponent', () => {
//   let component: ExpensesComponent;
//   let fixture: ComponentFixture<ExpensesComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       imports: [ExpensesComponent]
//     })
//     .compileComponents();

//     fixture = TestBed.createComponent(ExpensesComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });

import { ComponentFixture, TestBed, tick } from '@angular/core/testing';
import { Router } from '@angular/router';
import { async, of } from 'rxjs';

import { ExpensesComponent } from './expenses.component';
import { ExpensesService } from 'src/app/services/expenses-http.service';
import { IExpense, EXPENSE, ITotals, TOTALS } from './expense';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TableAccountsPayableComponent } from './components/table-accounts-payable/table-accounts-payable.component';
import { TableAccountsReceivableComponent } from './components/table-accounts-receivable/table-accounts-receivable.component';
import { ButtonActionsBtnComponent } from '../../../shared/button-actions-btn/button-actions-btn.component';
import { provideHttpClient } from '@angular/common/http';

describe('ExpensesComponent', () => {
  let component: ExpensesComponent;
  let fixture: ComponentFixture<ExpensesComponent>;
  let mockExpensesService: jasmine.SpyObj<ExpensesService>;
  let mockRouter: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    // Criando mocks com Jasmine
    mockExpensesService = jasmine.createSpyObj('ExpensesService', ['getDate']);
    mockRouter = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      providers: [
        ExpensesComponent,
        provideHttpClient(),
        { provide: ExpensesService, useValue: mockExpensesService },
        { provide: Router, useValue: mockRouter },
      ],
      imports: [
        CommonModule,
        FormsModule,
        TableAccountsPayableComponent,
        TableAccountsReceivableComponent,
        ButtonActionsBtnComponent,
      ], // Se precisar importar módulos, colocar aqui
    }).compileComponents();

    fixture = TestBed.createComponent(ExpensesComponent);
    component = fixture.componentInstance;
  });

  describe('ngOnInit', () => {
    it('deve formatar corretamente dateExpenses para mês >= 9 e chamar getExpensesDate', () => {
      spyOn(component, 'getExpensesDate');
      // Mockar data para mês 10 (outubro)
      jasmine.clock().mockDate(new Date(2025, 9, 15)); // mês 9 = outubro (0-based)
      component.ngOnInit();
      expect(component.dateExpenses).toBe('2025-10');
      expect(component.getExpensesDate).toHaveBeenCalled();
    });

    it('deve formatar corretamente dateExpenses para mês < 9 e chamar getExpensesDate', () => {
      spyOn(component, 'getExpensesDate');
      // Mockar data para mês 8 (setembro)
      jasmine.clock().mockDate(new Date(2025, 7, 15)); // mês 7 = agosto (0-based)
      component.ngOnInit();
      expect(component.dateExpenses).toBe('2025-08');
      expect(component.getExpensesDate).toHaveBeenCalled();
    });
  });

  describe('getExpensesDate', () => {
    it('deve atualizar expense e totals corretamente quando retorno tem contas', async () => {
      const fakeExpense: IExpense = {
        ...EXPENSE,
        id: 'f489',
        accountsPayable: [{ name: 'Energia', value: 50 }],
        receivable: [{ name: 'Energia', value: 200 }],
      };

      mockExpensesService.getDate.and.returnValue(of(fakeExpense));

      component.dateExpenses = '2025-04';
      const result = await component.getExpensesDate();

      setTimeout(() => {
        expect(component.expense).toEqual(fakeExpense);
        expect(component.totals.totalPayable).toBe(50);
        expect(component.totals.totalReceivable).toBe(200);
        expect(component.totals.total).toBe(150); // 200 - 150
      }, 100);
    });

    it('não deve chamar calculateTotal se expense for []', async () => {
      mockExpensesService.getDate.and.returnValue(of(EXPENSE));
      component.dateExpenses = '2025-06';
      component.getExpensesDate();

      jasmine.clock().install();
      jasmine.clock().tick(1000);

      expect(component.expense).toEqual(EXPENSE);
      expect(component.totals).toEqual(TOTALS); // totals iniciais
    });
  });
});
