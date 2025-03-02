import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NewCooperatorAdmission } from 'src/app/models/new-cooperator-admission';
import { NewCooperatorAdmissionService } from 'src/app/services/new-cooperator-admission.service';

@Component({
    selector: 'app-new-cooperator-admission',
    templateUrl: './new-cooperator-admission.component.html',
    styleUrls: ['./new-cooperator-admission.component.scss'],
    encapsulation: ViewEncapsulation.None,
    host: { class: 'new-cooperator-admission' },
    standalone: false
})
export class NewCooperatorAdmissionComponent {
  isValidCPF: boolean = true;
  cpf: string = '';
  isLoading: boolean = false;
  person: NewCooperatorAdmission | undefined;

  constructor(private newCooperatorAdmissionService: NewCooperatorAdmissionService) { }

  maskCPF(i: any) {
    var v = i.value;

    if (isNaN(v[v.length - 1])) {
      i.value = v.substring(0, v.length - 1);
      return;
    }

    i.setAttribute("maxlength", "14");
    if (v.length == 3 || v.length == 7) i.value += ".";
    if (v.length == 11) i.value += "-";
  }

  private verifyCPF(cpf: string) {
    var Soma = 0
    var Resto

    var strCPF = String(cpf).replace(/[^\d]/g, '')

    if (strCPF.length !== 11)
      return false

    if ([
      '00000000000',
      '11111111111',
      '22222222222',
      '33333333333',
      '44444444444',
      '55555555555',
      '66666666666',
      '77777777777',
      '88888888888',
      '99999999999',
    ].indexOf(strCPF) !== -1)
      return false

    for (let i = 1; i <= 9; i++)
      Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);

    Resto = (Soma * 10) % 11

    if ((Resto == 10) || (Resto == 11))
      Resto = 0

    if (Resto != parseInt(strCPF.substring(9, 10)))
      return false

    Soma = 0

    for (let i = 1; i <= 10; i++)
      Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i)

    Resto = (Soma * 10) % 11

    if ((Resto == 10) || (Resto == 11))
      Resto = 0

    if (Resto != parseInt(strCPF.substring(10, 11)))
      return false

    return true
  }

  searchCPF() {
    this.isValidCPF = true;
    if (!this.verifyCPF(this.cpf)) {
      this.isValidCPF = false;
      return;
    }

    this.isLoading = true;
    this.newCooperatorAdmissionService.get(this.cpf).subscribe(res => {
      this.isLoading = false;
      this.person = res;
    })
  }
}
