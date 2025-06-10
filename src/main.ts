import { enableProdMode, importProvidersFrom } from '@angular/core';
import { environment } from './environments/environment';
import { BrowserModule, bootstrapApplication, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withFetch } from '@angular/common/http';
import {
  provideCharts,
  withDefaultRegisterables,
  } from 'ng2-charts';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(BrowserModule),
    provideRouter(routes),
    provideHttpClient(withFetch()),
    provideCharts(withDefaultRegisterables()), provideClientHydration(withEventReplay())
  ],
}).catch((err) => console.error(err));
