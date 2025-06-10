import { Injectable } from '@angular/core';
import { EXPENSE, IExpense } from '../core/modules/expenses/expense';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const LOCAL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root',
})
export class ExpensesService {
  constructor(private http: HttpClient) {}

  getDate(date: string): Observable<IExpense> {
    return this.http
      .get<IExpense[]>(`${LOCAL}/accounts?my=${date}`)
      .pipe(map((res) => (res.length > 0 ? res[0] : EXPENSE)));
  }

  save(param: IExpense): Observable<IExpense>{
    return this.http.post<IExpense>(`${LOCAL}/accounts`, param, {
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
