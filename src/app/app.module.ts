import { NgModule }               from '@angular/core';
import { BrowserModule }          from '@angular/platform-browser';
import { FormsModule }            from '@angular/forms';
import { HttpModule }             from '@angular/http';
import { RouterModule, Routes }   from '@angular/router';

import { AppRoutingModule }       from './app-routing.module';

import { AppComponent }           from './app.component';
import { HistoryComponent}        from './history/history.component';
import { PageNotFoundComponent }  from './not-found.component';

import { CustomerService }        from './customer.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    AppRoutingModule
],
  declarations: [
    AppComponent,
    HistoryComponent,
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
