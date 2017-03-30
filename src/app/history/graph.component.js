"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var customer_service_1 = require('../customer.service');
var GraphComponent = (function () {
    function GraphComponent(customerService) {
        this.customerService = customerService;
        this.disposals = [];
        this.enddate = new Date();
        this.startdate = new Date();
        this.startdate.setMonth(this.enddate.getMonth() - 6);
        setTimeout(function () {
            var container = document.getElementById('visualization');
            var items = [
                { x: '2014-06-11', y: 10 },
                { x: '2014-06-12', y: 25 },
                { x: '2014-06-13', y: 30 },
                { x: '2014-06-14', y: 10 },
                { x: '2014-06-15', y: 15 },
                { x: '2014-06-16', y: 30 }
            ];
            var dataset = new vis.DataSet(items);
            var options = {
                start: '2014-06-10',
                end: '2014-06-18'
            };
            var graph2d = new vis.Graph2d(container, dataset, options);
        });
    }
    GraphComponent.prototype.getDisposals = function (customer) {
        var _this = this;
        this.customerService.getDisposals(customer)
            .then(function (disposals) { return _this.disposals = disposals; });
    };
    GraphComponent.prototype.getDisposalsByDate = function (customer, startDate, endDate) {
        var _this = this;
        this.customerService.getDisposalsByDate(customer, startDate, endDate)
            .then(function (disposals) { return _this.disposals = disposals; });
    };
    GraphComponent = __decorate([
        core_1.Component({
            selector: 'history-graph',
            templateUrl: './app/history/graph.component.html'
        }), 
        __metadata('design:paramtypes', [customer_service_1.CustomerService])
    ], GraphComponent);
    return GraphComponent;
}());
exports.GraphComponent = GraphComponent;
//# sourceMappingURL=graph.component.js.map