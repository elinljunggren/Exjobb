import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a routerLink="/start" routerLinkActive="active">Start</a>
      <a routerLink="/area" routerLinkActive="active">Your Area</a>
      <a routerLink="/account" routerLinkActive="active">Account</a>
      <a routerLink="/history" routerLinkActive="active">History</a>
      <a routerLink="/top-list" routerLinkActive="active">Top List</a>
    </nav>

    <router-outlet></router-outlet>
    `
})
export class AppComponent {
  title = 'App';
}
