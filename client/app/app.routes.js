(function(app) {
  app.routing = ng.router.RouterModule.forRoot([
    {path: '', redirectTo: '/', pathMatch: 'full'},
    {path: 'history', component: app.HistoryComponent}
  ]);
})(window.app || (window.app = {}));
