import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';


import {ChartModule, Highcharts} from 'angular2-highcharts';

import "materialize-css";
import "angular2-materialize";

import {MaterializeDirective} from "angular2-materialize";

import { AppComponent } from './app.component';
import { AppReportDetails } from './app.report-details';
import { AppLocationSnapshot } from './app.location-snapshot';
import { AppPeople } from './app.people';
import { AppChartPopulation } from "./app.chart-population";


@NgModule({
  imports: [
    BrowserModule,
    ChartModule
  ],
  declarations: [
    AppComponent,
    AppReportDetails,
    AppLocationSnapshot,
    AppPeople,
    AppChartPopulation,
    MaterializeDirective
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
