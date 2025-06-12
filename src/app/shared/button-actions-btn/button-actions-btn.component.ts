import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-button-actions-btn',
  imports: [],
  templateUrl: './button-actions-btn.component.html',
  styleUrl: './button-actions-btn.component.scss',
})
export class ButtonActionsBtnComponent {
  // eslint-disable-next-line @angular-eslint/no-output-on-prefix
  @Output() onClickAddEmitter = new EventEmitter();
}
