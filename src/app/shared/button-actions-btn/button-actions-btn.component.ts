import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-button-actions-btn',
  imports: [],
  templateUrl: './button-actions-btn.component.html',
  styleUrl: './button-actions-btn.component.scss',
})
export class ButtonActionsBtnComponent {
  @Output() onClickAddEmitter = new EventEmitter();
}
