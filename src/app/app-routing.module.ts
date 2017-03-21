import { NgModule }               from '@angular/core';
import { RouterModule, Routes }   from '@angular/router';

import { StartComponent}          from './start/start.component';
import { AreaComponent}           from './area/area.component';
import { AccountComponent}        from './account/account.component';
import { HistoryComponent}        from './history/history.component';
import { TopListComponent}        from './top-list/top-list.component';
import { PageNotFoundComponent }  from './not-found.component';

const routes: Routes = [
  {path: '', redirectTo: '/start', pathMatch: 'full'},
  {path: 'start', component: StartComponent},
  {path: 'area', component: AreaComponent},
  {path: 'account', component: AccountComponent},
  {path: 'history', component: HistoryComponent},
  {path: 'top-list', component: TopListComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
