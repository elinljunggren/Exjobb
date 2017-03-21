import { Component } from '@angular/core';

import { CustomerService } from '../customer.service';

@Component({
  selector: 'my-area',
  templateUrl: './app/area/area.component.html'
})

export class AreaComponent {

  constructor(private customerService: CustomerService) {}

}
