import { booleanAttribute, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgIf, NgClass } from '@angular/common';

@Component({
    selector: 'app-generic-button',
    templateUrl: './generic-button.component.html',
    styleUrls: ['./generic-button.component.scss'],
    imports: [NgIf, NgClass]
})
export class GenericButtonComponent implements OnInit {

  @Input() textBtn: string = '';
  @Input({transform: booleanAttribute}) inline: boolean = true;
  @Input() disabled: boolean = false;
  @Input() isLoading: boolean = false;

  @Output() onClickEmitter = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }

}
