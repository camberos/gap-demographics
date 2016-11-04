import { Component } from '@angular/core';
import { Locale, LocaleService, LocalizationService } from 'angular2localization';

@Component({
  selector: 'app-report-details',
  templateUrl: 'app.report-details.html',
 	styleUrls: ['app.report-details.css']

})
export class AppReportDetails extends Locale {
	constructor(public locale: LocaleService, public localization: LocalizationService) {
        super(locale, localization);
    }
}