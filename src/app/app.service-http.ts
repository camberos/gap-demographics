import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';


import 'rxjs/add/operator/toPromise';

import { Demographics } from './demographics';

@Injectable()
export class DemographicsService {

  private demographicsUrl = 'http://119.9.52.47:3000/api/data/byradius?lat=-37.787445&lng=145.124866&radius=2&classificationids=b01,b28,s1';  // URL to web api
  //private demographicsUrl = "app/demographics.json"
  private headers = new Headers({'Content-Type': 'application/json'});


  constructor(private http: Http) { }

  getDemographics(): Promise<Demographics[]> {
    return this.http.get(this.demographicsUrl)
               .toPromise()
               .then(response => response.json() as Demographics[])
               .catch(this.handleError);
  }

  // Error handling
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
  return Promise.reject(error.message || error);
}



}
