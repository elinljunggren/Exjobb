import { Component } from '@angular/core';

import { CustomerService } from '../customer.service';

@Component({
  selector: 'my-start',
  templateUrl: './app/start/start.component.html'
})

export class StartComponent {

  constructor(private customerService: CustomerService) {}

}
