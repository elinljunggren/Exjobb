import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HistoryComponent }      from './history/history.component';
import { PageNotFoundComponent } from './not-found.component'

const routes: Routes = [
  {path: '', redirectTo: '/history', pathMatch: 'full'},
  {path: 'history', component: HistoryComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
