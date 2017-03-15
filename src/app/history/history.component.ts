import { Component } from '@angular/core';

import { Disposal } from '../disposal';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'my-history',
  templateUrl: './app/history/history.component.html'
})

export class HistoryComponent {
  disposals: Disposal[] = [];
  enddate: Date;
  startdate: Date;

  constructor(private customerService: CustomerService) {
    this.enddate = new Date()
    this.startdate = new Date()
    this.startdate.setMonth(this.enddate.getMonth() - 6)
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
