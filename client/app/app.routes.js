(function(app) {
    app.routing = ng.router.RouterModule.forRoot([
    {path: '', redirectTo: '/history', pathMatch: 'full'},
    //{ path: '/history', name: 'History', component: app.HistoryComponent, useAsDefault: true },
    {path: 'history', component: app.HistoryComponent}
  ])
})(window.app || (window.app = {}))
