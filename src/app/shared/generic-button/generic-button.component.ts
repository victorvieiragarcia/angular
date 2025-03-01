import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-generic-button',
  templateUrl: './generic-button.component.html',
  styleUrls: ['./generic-button.component.scss']
})
export class GenericButtonComponent implements OnInit {

  @Input() textBtn: string = '';
  @Input() inline: boolean = true;
  @Input() isDisbled: boolean = false;
  @Input() isLoading: boolean = false;

  @Output() onClickEmitter = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }

}
