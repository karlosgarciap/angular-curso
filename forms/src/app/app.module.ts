import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateComponent } from './components/template/template.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Data2Component } from './components/data2/data2.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent,
    Data2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
