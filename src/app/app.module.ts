import { NgModule }               from '@angular/core';
import { BrowserModule }          from '@angular/platform-browser';
import { FormsModule }            from '@angular/forms';
import { HttpModule }             from '@angular/http';
import { RouterModule, Routes }   from '@angular/router';

import { AppRoutingModule }       from './app-routing.module';

import { AppComponent }           from './app.component';
import { StartComponent }         from './start/start.component';
import { AreaComponent }          from './area/area.component';
import { AccountComponent }       from './account/account.component';
import { HistoryComponent }       from './history/history.component';
import { GraphComponent }         from './history/graph.component';
import { TopListComponent }       from './top-list/top-list.component';
import { PageNotFoundComponent }  from './not-found.component';
import { NgbModule }              from '@ng-bootstrap/ng-bootstrap';

import { CustomerService }        from './customer.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    AppRoutingModule,
    NgbModule.forRoot()
],
  declarations: [
    AppComponent,
    StartComponent,
    AreaComponent,
    AccountComponent,
    HistoryComponent,
    GraphComponent,
    TopListComponent,
    PageNotFoundComponent
  ],
  providers: [
    CustomerService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
