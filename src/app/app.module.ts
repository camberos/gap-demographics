import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';

import "materialize-css";
import "angular2-materialize";

import {MaterializeDirective} from "angular2-materialize";


@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    MaterializeDirective
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
