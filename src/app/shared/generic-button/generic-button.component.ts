import { booleanAttribute, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-generic-button',
    templateUrl: './generic-button.component.html',
    styleUrls: ['./generic-button.component.scss'],
    standalone: false
})
export class GenericButtonComponent implements OnInit {

  @Input() textBtn: string = '';
  @Input() inline: boolean = true;
  @Input({transform: booleanAttribute}) disabled: boolean = false;
  @Input() isLoading: boolean = false;

  @Output() onClickEmitter = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }

}
