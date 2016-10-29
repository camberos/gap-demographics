import { Component } from '@angular/core';

@Component({
    selector: 'chart-population',
    template: `
        <div id="chart-population-container" width='100%'><chart [options]="options"></chart></div>
    `
})
export class AppChartPopulation {
    constructor() {
      this.options = {
      colors: ['#dfac34', '#e54d42', '#3a113b', '#64b6c4'],

      credits: {
            enabled: false
      },

      chart: {
          type: 'pie',
          renderTo: 'chart-population-container',
          options3d: {
              enabled: true,
              alpha: 45
          }
      },
      title: {
          text: 'Population',
          align: "left"
      },
      subtitle: {
          text: '24,851',
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
          name: 'Population',
          data: [
              ['Males', 12612],
              ['Females', 13658]
          ]
      }]       


      };
    }
    options: Object;
}