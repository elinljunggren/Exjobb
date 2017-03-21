import { Component } from '@angular/core';

import { CustomerService } from '../customer.service';

declare var CircleChart: any;

@Component({
  selector: 'my-start',
  templateUrl: './app/start/start.component.html',
  styleUrls: [ './app/start/start.component.css' ]
})

export class StartComponent {
  myLast: String;

  constructor(private customerService: CustomerService) {
    this.myLast = "08:11, Residual";
    setTimeout(() => {
      let paths = [
          {label: 'paper', name: 'paper', cls: 'paper', color: '#FFC107', value: 0.30},
          {label: 'residual', name: 'residual', cls: 'residual', color: '#EF5350', value: 0.52},
          {label: 'plastic', name: 'plastic', cls: 'plastic', color: '#4FC3F7', value: 0.18},
      ]
      new CircleChart({
        $container: document.getElementById('donut'),
        ringProportion: 0.42,
        middleCircleColor: '#FFFFFF',
        background: '#FFFFFF',
        definition: paths
      });
    });
  }

}
