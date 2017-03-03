(function(app) {
  app.AppComponent =
    ng.core.Component({
      selector: 'my-app',
      templateUrl: './app/start.html'  //'<h1>Hello Angular</h1>'
    })
    .Class({
      constructor: function() {},
      getDisposals: function(customer) {
         this.clickMessage = customer;
      }
    });
})(window.app || (window.app = {}));
