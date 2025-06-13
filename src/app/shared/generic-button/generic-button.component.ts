/* eslint-disable @angular-eslint/no-output-on-prefix */
import { booleanAttribute, Component, EventEmitter, Input, Output } from '@angular/core';
import { NgIf, NgClass } from '@angular/common';

@Component({
    selector: 'app-generic-button',
    templateUrl: './generic-button.component.html',
    styleUrls: ['./generic-button.component.scss'],
    imports: [NgIf, NgClass]
})
export class GenericButtonComponent {

  @Input() textBtn: string;
  @Input({transform: booleanAttribute}) inline = true;
  @Input() disabled = false;
  @Input() isLoading = false;

  @Output() onClickEmitter = new EventEmitter();
}
