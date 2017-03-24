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
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'App';
    }
    /* Set the width of the side navigation to 250px */
    AppComponent.prototype.openNav = function () {
        document.getElementById("mySidenav").style.width = "250px";
        document.getElementById("mainView").style.marginLeft = "250px";
    };
    /* Set the width of the side navigation to 0 */
    AppComponent.prototype.closeNav = function () {
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("mainView").style.marginLeft = "0";
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n    <h1>{{title}}</h1>\n  <!--  <nav>-->\n  <div id=\"mySidenav\" class=\"sidenav\">\n  <a href=\"javascript:void(0)\" class=\"closebtn\" (click)=\"closeNav()\">&times;</a>\n\n      <a routerLink=\"/start\" routerLinkActive=\"active\">Start</a>\n      <a routerLink=\"/area\" routerLinkActive=\"active\">Your Area</a>\n      <a routerLink=\"/account\" routerLinkActive=\"active\">Account</a>\n      <a routerLink=\"/history\" routerLinkActive=\"active\">History</a>\n      <a routerLink=\"/top-list\" routerLinkActive=\"active\">Top List</a>\n    </div>\n<!--    </nav>-\n    <button (click)=\"openNav()\">open</button>-->\n    <span style=\"font-size:30px;cursor:pointer\" (click)=\"openNav()\">&#9776; </span>\n\n    <router-outlet></router-outlet>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map
