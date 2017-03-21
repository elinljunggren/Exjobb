import { Component } from '@angular/core';

import { CustomerService } from '../customer.service';

@Component({
  selector: 'my-account',
  templateUrl: './app/account/account.component.html'
})

export class AccountComponent {
  id: String;

  constructor(private customerService: CustomerService) {
    this.id = "FakeID"
  }

}
