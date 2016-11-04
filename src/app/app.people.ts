import { Component } from '@angular/core';
import { Locale, LocaleService, LocalizationService } from 'angular2localization';

@Component({
  selector: 'app-people',
  templateUrl: 'app.people.html',
 	styleUrls: ['app.people.css']

})
export class AppPeople extends Locale {
	constructor(public locale: LocaleService, public localization: LocalizationService) {
    super(locale, localization);
    }
}