import './rxjs-extensions';

import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { FormsModule }    from '@angular/forms';
import { HttpModule }     from '@angular/http';
import { RouterModule }   from '@angular/router';

import {ChartModule, Highcharts} from 'angular2-highcharts';

import "materialize-css";
import "angular2-materialize";

import {MaterializeDirective} from "angular2-materialize";

import { AppComponent } from './app.component';
import { AppReportDetails } from './app.report-details';
import { AppLocationSnapshot } from './app.location-snapshot';
import { AppPeople } from './app.people';
import { AppChartPopulation } from "./app.chart-population";
import { AppChartMedianAge } from "./app.chart-median-age";

import { AppFooter } from "./app.footer";

import { AppData  }            from './app.data';
import { DemographicsService } from './app.service-http';

@NgModule({
  imports: [
    BrowserModule,
    ChartModule,
    FormsModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    AppReportDetails,
    AppLocationSnapshot,
    AppPeople,
    AppChartPopulation,
    AppChartMedianAge,
    AppData,
    AppFooter,
    MaterializeDirective
  ],
  providers: [
    DemographicsService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
