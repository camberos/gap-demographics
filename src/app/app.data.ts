import { Component, OnInit } from '@angular/core';

import { DemographicsService } from './app.service-http';
import { Demographics } from './demographics';


@Component({
  selector: 'app-data',
  templateUrl: 'app.data.html',
 	styleUrls: ['app.data.css']

})
export class AppData implements OnInit {

  demographics: Demographics[] = [];
  loading: boolean = false;

  constructor(
    private demographicsService: DemographicsService) { 
  }

  ngOnInit(): void {
  	this.loading = true;
    this.demographicsService.getDemographics().then(
      	demographics => { 
      		this.demographics = demographics;
      		this.loading = false;
      	}
    );
  }
}