import { Component } from '@angular/core';
import {NgbTabsetConfig} from '@ng-bootstrap/ng-bootstrap';

import { GraphComponent } from './graph.component';

import { Disposal } from '../disposal';
import { CustomerService } from '../customer.service';

declare var t : any;

@Component({
  selector: 'my-history',
  templateUrl: './app/history/history.component.html',
  providers: [NgbTabsetConfig]
})

export class HistoryComponent {
  disposals: Disposal[] = [];
  enddate: Date;
  startdate: Date;

  constructor(private customerService: CustomerService, config: NgbTabsetConfig) {
    this.enddate = new Date()
    this.startdate = new Date()
    this.startdate.setMonth(this.enddate.getMonth() - 6)

    config.justify = 'center';
    //config.type = 'pills';
    //var t = document.getElementById("ngbTabset")
    //t.select('listTab')
  }

  getDisposals(customer: number) {
    this.customerService.getDisposals(customer)
      .then(disposals => this.disposals = disposals)
  }

  getDisposalsByDate(customer: number, startDate: Date, endDate: Date) {
    this.customerService.getDisposalsByDate(customer, startDate, endDate)
    .then(disposals => this.disposals = disposals)
  }

}
