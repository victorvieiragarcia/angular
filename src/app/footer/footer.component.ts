import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
    encapsulation: ViewEncapsulation.None,
    host: { class: 'footer' }
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
