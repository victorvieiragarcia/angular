import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-app-core',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app-core.component.html',
  styleUrl: './app-core.component.scss',
})
export class AppCoreComponent {}
