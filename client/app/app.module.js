(function(app) {
  app.AppModule =
    ng.core.NgModule({
      imports: [ ng.platformBrowser.BrowserModule, ng.forms.FormsModule, ng.http.HttpModule, ng.router.RouterModule, app.routing ],
      declarations: [ app.HistoryComponent, app.AppComponent ],
      bootstrap: [ app.AppComponent ]
    })
    .Class({
      constructor: function() {}
    })
})(window.app || (window.app = {}))
