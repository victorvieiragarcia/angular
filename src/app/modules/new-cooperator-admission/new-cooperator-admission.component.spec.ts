import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewCooperatorAdmissionComponent } from './new-cooperator-admission.component';
import { NewCooperatorAdmissionService } from 'src/app/services/new-cooperator-admission.service';
import { of } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('NewCooperatorAdmissionComponent', () => {
  let component: NewCooperatorAdmissionComponent;
  let fixture: ComponentFixture<NewCooperatorAdmissionComponent>;
  let serviceMock: jasmine.SpyObj<NewCooperatorAdmissionService>;

  beforeEach(async () => {
    serviceMock = jasmine.createSpyObj('NewCooperatorAdmissionService', ['get']);
    serviceMock.get.and.returnValue(of({ name: 'Test User', cpf: '12345678909', situation: true, account: [] }));

    await TestBed.configureTestingModule({
      declarations: [NewCooperatorAdmissionComponent],
      providers: [{ provide: NewCooperatorAdmissionService, useValue: serviceMock }],
      imports: [FormsModule, HttpClientTestingModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCooperatorAdmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should validate CPF correctly', () => {
    const validCPF = '12345678909';
    expect(component['verifyCPF'](validCPF)).toBeTrue();

    const invalidCPF = '12345678900';
    expect(component['verifyCPF'](invalidCPF)).toBeFalse();
  });

  it('should invalidate CPF when incorrect', () => {
    component.cpf = '12345678900';
    component.searchCPF();
    expect(component.isValidCPF).toBeFalse();
  });

  it('should fetch person data when CPF is valid', () => {
    component.cpf = '12345678909';
    component.searchCPF();
    expect(component.isValidCPF).toBeTrue();
    expect(component.isLoading).toBeFalse();
    expect(component.person).toEqual({ name: 'Test User', cpf: '12345678909', situation: true, account: [] });
  });
});
