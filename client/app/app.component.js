(function(app) {
  app.AppComponent =
    ng.core.Component({
      selector: 'my-app',
      template: '<h1>Hello Angular</h1>' //Url: 'hello.html'
    })
    .Class({
      constructor: function() {}
    });
})(window.app || (window.app = {}));
