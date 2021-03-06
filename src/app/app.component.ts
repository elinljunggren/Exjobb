import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <header>
      <span id="navButton" (click)="openNav()">&#9776;</span> {{title}}
      <!--<div id="headR" style="font-size:30px;cursor:pointer" (click)="openNav()"> &#9776; {{title}} </div> -->
    </header>
    <!--  <nav>-->
    <div id="mySidenav" class="sidenav">
        <a href="javascript:void(0)" class="closebtn" (click)="closeNav()">&times;</a>

        <a routerLink="/start" routerLinkActive="active">Start</a>
        <a routerLink="/area" routerLinkActive="active">Your Area</a>
        <a routerLink="/account" routerLinkActive="active">Account</a>
        <a routerLink="/history" routerLinkActive="active">History</a>
        <a routerLink="/top-list" routerLinkActive="active">Top List</a>
    </div>
    <!--    </nav>   --->
    <main>
      <router-outlet></router-outlet>
    </main>
    `
})
export class AppComponent {
  title = 'App';
  constructor (){}
  /* Set the width of the side navigation to 250px */
   openNav() {
      document.getElementById("mySidenav").style.width = "250px";
      document.getElementById("mainView").style.marginLeft = "250px";
    }

  /* Set the width of the side navigation to 0 */
   closeNav() {
      document.getElementById("mySidenav").style.width = "0";
      document.getElementById("mainView").style.marginLeft = "0";
    }

}
