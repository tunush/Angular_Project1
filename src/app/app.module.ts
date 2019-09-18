import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';

import { FormsModule }   from '@angular/forms';
import { Block1Component } from './block1/block1.component';
import { Block2Component } from './block2/block2.component';
import { Block2ButtonComponent } from './block2-button/block2-button.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    Block1Component,
    Block2Component,
    Block2ButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
