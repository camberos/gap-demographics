import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppReportDetails } from './app.report-details';
import { AppLocationSnapshot } from './app.location-snapshot';
import { AppPeople } from './app.people';

import "materialize-css";
import "angular2-materialize";

import {MaterializeDirective} from "angular2-materialize";


@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    AppReportDetails,
    AppLocationSnapshot,
    AppPeople,
    MaterializeDirective
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
