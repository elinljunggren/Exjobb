import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Disposal }   from './disposal'

@Injectable()
export class CustomerService {

  constructor(private http: Http) { }

  getCustomer(id: number): Promise <string> {
    const url = `/customer/${id}`;
    return this.http.get(url)
               .toPromise()
               .then(response => response.json() as string)
               .catch(this.handleError);
  }

  getDisposals(id: number): Promise <Disposal[]>{
    const url = `/disposals/${id}`;
    return this.http.get(url)
               .toPromise()
               .then(res => res.json() as Disposal[])
               .catch(this.handleError);
  }

  getDisposalsByDate( id: number, startDate: Date, endDate: Date): Promise<Disposal[]> {
    const url = `/disposals/${id}/${startDate}/${endDate}`;
    return this.http.get(url)
               .toPromise()
               .then(res => res.json() as Disposal[])
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Error in customer service', error);
    return Promise.reject(error.message || error);
  }
}
