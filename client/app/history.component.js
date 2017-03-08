(function(app){
  app.HistoryComponent =
  ng.core.Component({
    selector: 'my-history',
    templateUrl: './app/history/history.component.html',
    providers: [ CustomerService ]
  //  directives: [ng.router.ROUTER_DIRECTIVES]
  })
  .Class({
    constructor: [
      CustomerService, ng.router.Router, ng.http.Http, function(customerService, router, http) {
        this._customerService = customerService
        this._router = router
        this._http = http
      }
    ],
    getDisposals: function(customer, startDate, endDate) {
      this._customerService.getDisposals(this._http, customer, '2016-02-23 06:26:18', '2016-11-21 11:48:45')
      .subscribe(disposals => this.disposals = disposals)
      //!startDate && !endDate && this._customerService.getDisposals(this._http, customer)
      //.subscribe(disposals => this.disposals = disposals)
    },
    gotoHistory: function() {
      this._router.navigate(['/history']);
    }

  })
})(window.app || (window.app = {}))
