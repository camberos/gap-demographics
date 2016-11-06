import { Component, OnInit } from '@angular/core';

import { DemographicsService } from './app.service-http';
import { Demographics } from './demographics';
import 'rxjs/Rx';


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

  download(){
   var csvData = this.ConvertToCSV(this.demographics);
    var a = document.createElement("a");
    var blob = new Blob([csvData], { type: 'text/csv' });
    var url= window.URL.createObjectURL(blob);
    a.href = url;
    a.download = 'SampleExport.csv';
    a.click();
  }
  // convert Json to CSV data in Angular2
  ConvertToCSV(objArray: any) {
            var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
            var str = '';
            var row = "";
 
            for (var index in objArray[0]) {
                //Now convert each value to string and comma-separated
                row += index + ',';
            }
            row = row.slice(0, -1);
            //append Label row with line break
            str += row + '\r\n';
 
            for (var i = 0; i < array.length; i++) {
                var line = '';
                for (var index in array[i]) {
                    if (line != '') line += ','
 
                    line += array[i][index];
                }
                str += line + '\r\n';
            }
            return str;
    }
}