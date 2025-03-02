import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenericButtonComponent } from './generic-button.component';



@NgModule({
    imports: [
        CommonModule,
        GenericButtonComponent
    ], exports: [GenericButtonComponent]
})
export class GenericButtonModule { }
