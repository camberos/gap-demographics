import { Component } from '@angular/core';

@Component({
    selector: 'chart-media-age',
    template: `
        <div id="chart-media-age-container" width='100%'><chart [options]="options"></chart></div>
    `
})
export class AppChartMedianAge {
    constructor() {
      this.options = {
      colors: ['#64b6c4'],

      credits: {
            enabled: false
      },

      chart: {
          type: 'pie',
          renderTo: 'chart-media-age-container',
          options3d: {
              enabled: true,
              alpha: 45
          }
      },
      title: {
          text: ''
      },
      subtitle: {
          text: '34 Years',
          style: {
            fontSize: '20px',
            fontWeight: '900'
          }
      },
      plotOptions: {
          pie: {
              innerSize: 100,
              depth: 45
          }
      },
      series: [{
          size: '70%',
          name: 'Median age',
          data: [
              ['Median age', 34]
          ]
      }]       


      };
    }
    options: Object;
}