import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NewCooperatorAdmissionComponent } from './modules/new-cooperator-admission/new-cooperator-admission.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [
    RouterOutlet,
    ToolbarComponent,
    NavbarComponent,
    NewCooperatorAdmissionComponent,
  ],
})
export class AppComponent {
  title = 'teste-angular';
}
