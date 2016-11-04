import { Component } from '@angular/core';
import { Locale, LocaleService, LocalizationService } from 'angular2localization';
@Component({
  selector: 'app-location-snapshot',
  templateUrl: 'app.location-snapshot.html',
 	styleUrls: ['app.location-snapshot.css']

})
export class AppLocationSnapshot extends Locale {
	constructor(public locale: LocaleService, public localization: LocalizationService) {
        super(locale, localization);
    }
}