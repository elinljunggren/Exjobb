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
    getDisposals: function(customer) {
      this._customerService.getDisposals(this._http, customer)
        .subscribe(disposals => this.disposals = disposals)
    },
    getDisposalsByDate: function(customer, startDate, endDate) {
      this._customerService.getDisposalsByDate(this._http, customer, startDate, endDate)
      .subscribe(disposals => this.disposals = disposals)
      //!startDate && !endDate && this._customerService.getDisposals(this._http, customer)
      //.subscribe(disposals => this.disposals = disposals)
    },
    gotoHistory: function() {
      this._router.navigate(['/history']);
    }

  })
})(window.app || (window.app = {}))
