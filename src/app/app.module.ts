import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarModule } from './toolbar/toolbar.module';
import { NavbarModule } from './navbar/navbar.module';
import { FooterModule } from './footer/footer.module';
import { GenericButtonModule } from './shared/generic-button/generic-button.module';
import { NewCooperatorAdmissionModule } from './modules/new-cooperator-admission/new-cooperator-admission.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToolbarModule,
    NavbarModule,
    FooterModule,
    GenericButtonModule,
    NewCooperatorAdmissionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
