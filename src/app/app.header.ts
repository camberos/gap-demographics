import { Component } from '@angular/core';
import { Locale, LocaleService, LocalizationService } from 'angular2localization';

@Component({
  selector: 'app-header',
  templateUrl: 'app.header.html',
 	styleUrls: ['app.header.css']

})
export class AppHeader extends Locale{

    constructor(public locale: LocaleService, public localization: LocalizationService) {
        super(locale, localization);
    }

    // Sets a new locale & currency.
    selectLocale(language: string, country: string, currency: string): void {

        this.locale.setCurrentLocale(language, country);
        this.locale.setCurrentCurrency(currency);
        this.locale.setCurrentLanguage(language);
	}

}