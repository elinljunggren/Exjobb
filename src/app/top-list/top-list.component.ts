import { Component } from '@angular/core';

import { CustomerService } from '../customer.service';

@Component({
  selector: 'my-top-list',
  templateUrl: './app/top-list/top-list.component.html'
})

export class TopListComponent {

  constructor(private customerService: CustomerService) {}

}
