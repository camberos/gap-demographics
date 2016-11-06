import './rxjs-extensions';

import { NgModule, Injectable, APP_INITIALIZER } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { FormsModule }    from '@angular/forms';
import { HttpModule }     from '@angular/http';
import { RouterModule }   from '@angular/router';

import {ChartModule, Highcharts} from 'angular2-highcharts';

import "materialize-css";
import "angular2-materialize";

import { MaterializeDirective } from "angular2-materialize";

import { AppComponent } from './app.component';
import { AppReportDetails } from './app.report-details';
import { AppLocationSnapshot } from './app.location-snapshot';
import { AppChartPopulation } from "./app.chart-population";
import { AppChartMedianAge } from "./app.chart-median-age";

import { AppHeader} from "./app.header";
import { AppFooter } from "./app.footer";

import { AppData  }            from './app.data';
import { DemographicsService } from './app.service-http';

// import { LocaleModule, LocalizationModule } from 'angular2localization';
import { LocaleModule, LocalizationModule, LocaleService, LocalizationService } from 'angular2localization';

/**
 * Advanced initialization.
 * 
 * With these settings, translation file will be loaded before the app.
 */
@Injectable()
export class LocalizationConfig {

    constructor(public locale: LocaleService, public localization: LocalizationService) { }

    load(): Promise<any> {

        // Adds the languages (ISO 639 two-letter or three-letter code).
        this.locale.addLanguages(['en', 'es', 'it', 'id']);

        // Required: default language, country (ISO 3166 two-letter, uppercase code) and expiry (No days). If the expiry is omitted, the cookie becomes a session cookie.
        // Selects the default language and country, regardless of the browser language, to avoid inconsistencies between the language and country.
        this.locale.definePreferredLocale('en', 'AUD', 30);

        // Optional: default currency (ISO 4217 three-letter code).
        this.locale.definePreferredCurrency('AUD');

        // Initializes LocalizationService: asynchronous loading.
         this.localization.translationProvider('https://lm06lf9uj6.execute-api.ap-southeast-2.amazonaws.com/prod/comments/','json', true); // Required: initializes the translation provider with the given path prefix.

        var promise: Promise<any> = new Promise((resolve: any) => {
            this.localization.translationChanged.subscribe(() => {
                resolve(true);
            });
        });

        this.localization.updateTranslation(); // Need to update the translation.

        return promise;
    }
}

/**
 * Aot compilation requires a reference to an exported function.
 */
export function initLocalization(localizationConfig: LocalizationConfig): Function {
    return () => localizationConfig.load();
}

@NgModule({
  imports: [
    BrowserModule,
    ChartModule,
    FormsModule,
    HttpModule,
    LocaleModule.forRoot(), // New instance of LocaleService.
    LocalizationModule.forRoot() // New instance of LocalizationService.
  ],
  declarations: [
    AppComponent,
    AppReportDetails,
    AppLocationSnapshot,
    AppChartPopulation,
    AppChartMedianAge,
    AppData,
    AppHeader,
    AppFooter,
    MaterializeDirective
  ],
  providers: [
    DemographicsService,
    LocalizationConfig,
        {
            provide: APP_INITIALIZER, // APP_INITIALIZER will execute the function when the app is initialized and delay what it provides.
            useFactory: initLocalization,
            deps: [LocalizationConfig],
            multi: true
        }
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
