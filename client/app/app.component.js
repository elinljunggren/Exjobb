(function(app) {
  app.AppComponent =
    ng.core.Component({
      selector: 'my-app',
      templateUrl: './app/start.html',
      providers: [CustomerService],
      directives: [ng.router.ROUTER_DIRECTIVES]
      //providers: [ng.router.ROUTER_PROVIDERS, ng.http.HTTP_PROVIDERS, CustomerService]
    })
    .Class({
      constructor: [
        CustomerService, ng.router.Router, ng.http.Http, function(customerService, router, http) {
          this._customerService = customerService
          this._router = router
          this._http = http
        }
      ],
      getDisposals: function(customer) {
        this._customerService.getDisposals(this._http, customer)
          .subscribe(disposals => this.clickMessage = JSON.stringify(disposals))
      },
      gotoHistory: function() {
          this._router.navigate(['/history']);
      }
    })
})(window.app || (window.app = {}))
