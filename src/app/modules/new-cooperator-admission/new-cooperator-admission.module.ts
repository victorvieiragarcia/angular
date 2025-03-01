import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewCooperatorAdmissionComponent } from './new-cooperator-admission.component';
import { StepperBarComponent } from './components/stepper-bar/stepper-bar.component';
import { GenericButtonModule } from 'src/app/shared/generic-button/generic-button.module';
import { FormsModule } from '@angular/forms';
import { CardComponent } from './components/card/card.component';
import { FooterModule } from 'src/app/footer/footer.module';



@NgModule({
  declarations: [
    NewCooperatorAdmissionComponent,
    StepperBarComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    GenericButtonModule,
    FormsModule,
    FooterModule
  ],exports:[NewCooperatorAdmissionComponent]
})
export class NewCooperatorAdmissionModule { }
