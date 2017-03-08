(function(app) {
  app.AppComponent =
    ng.core.Component({
      selector: 'my-app',
      templateUrl: './app/app.component.html',
      providers: [CustomerService],
      directives: [ng.router.ROUTER_DIRECTIVES]
      //providers: [ng.router.ROUTER_PROVIDERS, ng.http.HTTP_PROVIDERS, CustomerService]
    })
    .Class({
      constructor : function(){}
      /*constructor: [
        CustomerService, ng.router.Router, ng.http.Http, function(customerService, router, http) {
          this._customerService = customerService
          this._router = router
          this._http = http
        }
      ]
      */
    })
})(window.app || (window.app = {}))
