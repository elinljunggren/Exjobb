import { Component } from '@angular/core';

import { Disposal } from '../disposal';
import { CustomerService } from '../customer.service';

declare var vis: any;

@Component({
  selector: 'history-graph',
  templateUrl: './app/history/graph.component.html'
})

export class GraphComponent {
  disposals: Disposal[] = [];
  enddate: Date;
  startdate: Date;

  constructor(private customerService: CustomerService) {
    this.enddate = new Date()
    this.startdate = new Date()
    this.startdate.setMonth(this.enddate.getMonth() - 6)

    setTimeout(() => {
      var container = document.getElementById('visualization');
      var items = [
        {x: '2014-06-11', y: 10},
        {x: '2014-06-12', y: 25},
        {x: '2014-06-13', y: 30},
        {x: '2014-06-14', y: 10},
        {x: '2014-06-15', y: 15},
        {x: '2014-06-16', y: 30}
      ];

      var dataset = new vis.DataSet(items);
      var options = {
        start: '2014-06-10',
        end: '2014-06-18'
      };
      var graph2d = new vis.Graph2d(container, dataset, options);
    });
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
