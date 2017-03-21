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
var StartComponent = (function () {
    function StartComponent(customerService) {
        this.customerService = customerService;
        this.myLast = "08:11, Residual";
        setTimeout(function () {
            var paths = [
                { label: 'paper', name: 'paper', cls: 'paper', color: '#FFC107', value: 0.30 },
                { label: 'residual', name: 'residual', cls: 'residual', color: '#EF5350', value: 0.52 },
                { label: 'plastic', name: 'plastic', cls: 'plastic', color: '#4FC3F7', value: 0.18 },
            ];
            new CircleChart({
                $container: document.getElementById('donut'),
                ringProportion: 0.42,
                middleCircleColor: '#FFFFFF',
                background: '#FFFFFF',
                definition: paths
            });
        });
    }
    StartComponent = __decorate([
        core_1.Component({
            selector: 'my-start',
            templateUrl: './app/start/start.component.html',
            styleUrls: ['./app/start/start.component.css']
        }), 
        __metadata('design:paramtypes', [customer_service_1.CustomerService])
    ], StartComponent);
    return StartComponent;
}());
exports.StartComponent = StartComponent;
//# sourceMappingURL=start.component.js.map