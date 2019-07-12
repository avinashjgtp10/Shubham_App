webpackJsonp([3],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnggAcceptComplaintPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__engg_view_complaint_engg_view_complaint__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__ = __webpack_require__(78);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the EnggAcceptComplaintPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EnggAcceptComplaintPage = /** @class */ (function () {
    function EnggAcceptComplaintPage(navCtrl, _rest, navParams) {
        this.navCtrl = navCtrl;
        this._rest = _rest;
        this.navParams = navParams;
        this.complaintData = [{ c_no: 1, c_date: '24-06-2019' }, { c_no: 2, c_date: '22-06-2019' }, { c_no: 3, c_date: '23-05-2019' }, { c_no: 4, c_date: '19-06-2019' }, { c_no: 5, c_date: '24-06-2019' }, { c_no: 6, c_date: '02-06-2019' }, { c_no: 8, c_date: '10-06-2019' }, { c_no: 9, c_date: '23-06-2019' }];
    }
    EnggAcceptComplaintPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log("Id", this.navParams.get("user_id"));
        this._rest.getAllComplaint().subscribe(function (data) {
            _this.complaintData = data.data.filter(function (el) {
                if (el.c_assignTo === _this.navParams.get("user_id")) {
                    if (el.c_status === 3 || el.c_status === 1) {
                        return el;
                    }
                }
                ;
            });
        });
    };
    EnggAcceptComplaintPage.prototype.action = function (Obj) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__engg_view_complaint_engg_view_complaint__["a" /* EnggViewComplaintPage */], { ObjData: Obj });
    };
    EnggAcceptComplaintPage.prototype.ionViewWillUnload = function () {
    };
    EnggAcceptComplaintPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-engg-accept-complaint',template:/*ion-inline-start:"/Users/avinash/Apps/complaints_tracker/App/Shubham_App/src/pages/engg-accept-complaint/engg-accept-complaint.html"*/'<!--\n  Generated template for the AcceptComplaintPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Accept Complaint</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-searchbar></ion-searchbar>\n    <ion-grid>\n        <ion-row>\n          <ion-col>\n            <div>\n             Comp. No.\n            </div>\n          </ion-col>\n          <ion-col>\n            <div>\n            Comp. Date\n            </div>\n          </ion-col>\n          <ion-col>\n              <div>\n              Action\n              </div>\n            </ion-col>\n        </ion-row>\n        <ion-row *ngFor="let c of complaintData">\n          <ion-col>\n            <div>\n                {{c.c_id}}\n            </div>\n          </ion-col>\n          <ion-col>\n            <div>\n             {{c.c_date}}\n            </div>\n          </ion-col>\n          <ion-col>\n            <div>\n            <button (click)="action(c)" ion-button>View</button>\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/avinash/Apps/complaints_tracker/App/Shubham_App/src/pages/engg-accept-complaint/engg-accept-complaint.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], EnggAcceptComplaintPage);
    return EnggAcceptComplaintPage;
}());

//# sourceMappingURL=engg-accept-complaint.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnggViewComplaintPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the EnggViewComplaintPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EnggViewComplaintPage = /** @class */ (function () {
    function EnggViewComplaintPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.filterData = {};
        this.enggData = {};
        this.complaintData = [];
    }
    EnggViewComplaintPage.prototype.ionViewDidLoad = function () {
        this.filterData = this.navParams.get('ObjData');
    };
    EnggViewComplaintPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-engg-view-complaint',template:/*ion-inline-start:"/Users/avinash/Apps/complaints_tracker/App/Shubham_App/src/pages/engg-view-complaint/engg-view-complaint.html"*/'<!--\n  Generated template for the EnggViewVomplaintPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Complaint</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <form (ngSubmit)="enggForm()">\n      <ion-grid>\n          <ion-row>\n            <ion-col col-5>\n              <div>\n                  Complaint ID:\n              </div>\n            </ion-col>\n            <ion-col>\n              <div>\n                  {{filterData.c_id}}\n              </div>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n              <ion-col col-5>\n                <div>\n                    User name:\n                </div>\n              </ion-col>\n              <ion-col>\n                <div>\n                    Testing\n                </div>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col col-5>\n                  <div>\n                      Mobile Number\n                  </div>\n                </ion-col>\n                <ion-col>\n                  <div>\n                      +91-8987898767\n                  </div>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                  <ion-col col-5> \n                    <div>\n                        Email\n                    </div>\n                  </ion-col>\n                  <ion-col>\n                    <div>\n                        abc@gmail.com\n                    </div>\n                  </ion-col>\n                </ion-row>\n          <ion-row>\n              <ion-col col-5>\n                <div>\n                    Description\n                </div>\n              </ion-col>\n              <ion-col>\n                <div>\n                    {{filterData.c_desc}}\n                </div>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col col-5>\n                  <div>\n                      Complaint Date\n                  </div>\n                </ion-col>\n                <ion-col>\n                  <div>\n                      {{filterData.c_date}}\n                  </div>\n                </ion-col>\n              </ion-row>\n                <ion-row>\n                    <ion-col col-5>\n                      <div>\n                    Photos\n                      </div>\n                    </ion-col>\n                    <ion-col>\n                      <div>\n                          N/A\n                      </div>\n                    </ion-col>\n                  </ion-row>\n                  <ion-row>\n                      <ion-col col-5>\n                        <div>\n                      Status\n                        </div>\n                      </ion-col>\n                      <ion-col>\n                        <div>\n                            {{filterData.c_status}}\n                        </div>\n                      </ion-col>\n                    </ion-row>\n                    <ion-row>\n                        <ion-col col-5> \n                          <div>\n                        Comments:\n                          </div>\n                        </ion-col>\n                        <ion-col>\n                          <div>\n                              <ion-textarea placeholder="Enter your comments" name="description"></ion-textarea>\n                          </div>\n                        </ion-col>\n                      </ion-row>\n                      <ion-row>\n                          <ion-col col-5>\n                            <div>\nChange Status:\n                            </div>\n                          </ion-col>\n                          <ion-col>\n                            <div>\n                                <ion-select class="statusChange">\n                                    <ion-option value="bacon" selected="true">Pending</ion-option>\n                                    <ion-option value="olives">Close</ion-option>\n                  \n                                  </ion-select>\n                                       </div>\n                          </ion-col>\n                        </ion-row>\n        </ion-grid> \n    <button ion-button type="submit" block>Add Data</button>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/Users/avinash/Apps/complaints_tracker/App/Shubham_App/src/pages/engg-view-complaint/engg-view-complaint.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], EnggViewComplaintPage);
    return EnggViewComplaintPage;
}());

//# sourceMappingURL=engg-view-complaint.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnggDashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__engg_accept_complaint_engg_accept_complaint__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the EnggDashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EnggDashboardPage = /** @class */ (function () {
    function EnggDashboardPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    EnggDashboardPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EnggDashboardPage', this.navParams.get("user_id"));
    };
    EnggDashboardPage.prototype.acceptComplaint = function (event) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__engg_accept_complaint_engg_accept_complaint__["a" /* EnggAcceptComplaintPage */], { user_id: this.navParams.get("user_id") });
    };
    EnggDashboardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-engg-dashboard',template:/*ion-inline-start:"/Users/avinash/Apps/complaints_tracker/App/Shubham_App/src/pages/engg-dashboard/engg-dashboard.html"*/'<!--\n  Generated template for the AdminDashboardPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>\n        <ion-icon ios="ios-home" md="md-home"> Home</ion-icon>\n      </ion-title>\n    <ion-buttons right>\n      <button ion-button icon-only >\n        <ion-icon ios="ios-log-out" md="md-log-out"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n<section>\n  <div class="container" (click)="acceptComplaint($event)">\n    <div class="box">\n    <img src="../../assets/icon/fileaccept.png">\n    <label>Accpet complaint</label>\n    </div>\n  </div>\n  <hr>\n  <div class="container">\n      <div class="box">\n      <img src="../../assets/icon/filesearch.png">\n      <label>View previous complaint</label>\n      </div>\n  </div>\n\n</section>\n</ion-content>\n'/*ion-inline-end:"/Users/avinash/Apps/complaints_tracker/App/Shubham_App/src/pages/engg-dashboard/engg-dashboard.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], EnggDashboardPage);
    return EnggDashboardPage;
}());

//# sourceMappingURL=engg-dashboard.js.map

/***/ }),

/***/ 115:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 115;

/***/ }),

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/engg-accept-complaint/engg-accept-complaint.module": [
		281,
		2
	],
	"../pages/engg-dashboard/engg-dashboard.module": [
		282,
		1
	],
	"../pages/engg-view-complaint/engg-view-complaint.module": [
		283,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 157;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__engg_dashboard_engg_dashboard__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_loader_loader__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_toast_toast__ = __webpack_require__(203);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, toast, loader, rest) {
        this.navCtrl = navCtrl;
        this.toast = toast;
        this.loader = loader;
        this.rest = rest;
        this.config = [
            { id: 1,
                username: "engg@gmail.com",
                password: 'engg123',
                role: 2 },
            { id: 2,
                username: "user@gmail.com",
                password: 'user123',
                role: 1 },
            { id: 3,
                username: "admin@gmail.com",
                password: 'admin',
                role: 3 },
        ];
    }
    HomePage.prototype.ionViewDidLoad = function () {
        this.rest.getAllComplaint().subscribe(function (data) {
            console.log(data);
        });
    };
    HomePage.prototype.login = function (form) {
        var _this = this;
        this.loader.presentLoading();
        var value = form.value;
        this.rest.userLogin(value.email, value.password).subscribe(function (data) {
            _this.loader.stoploading();
            if (data.status === "success" && data.data.u_role === 3) {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__engg_dashboard_engg_dashboard__["a" /* EnggDashboardPage */], { user_id: data.data.u_id });
            }
            if (data.status === "success" && data.data.u_role === 2) {
                console.log("admin");
            }
            if (data.status === "success" && data.data.u_role === 1) {
                console.log("client");
            }
            if (data.status === "error") {
                _this.toast.showToast("Wrong Password");
                console.log("error");
            }
            else {
                console.log('error!');
            }
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/avinash/Apps/complaints_tracker/App/Shubham_App/src/pages/home/home.html"*/'<ion-content padding>\n  <form class="loginScreen"  #loginForm="ngForm" (ngSubmit)="login(loginForm)">\n      <ion-grid>\n        <ion-row color="primary" justify-content-center>\n          <ion-col align-self-center size-md="6" size-lg="5" size-xs="12">\n            <div text-center>\n              <h3>login</h3>\n            </div>\n            <div padding>\n\n              <ion-item>\n                <ion-input name="email" type="email" placeholder="your@email.com" ngModel required></ion-input>\n              </ion-item>\n              <ion-item>\n                <ion-input name="password" type="password" placeholder="Password" ngModel required></ion-input>\n              </ion-item>\n            </div>\n            <div padding>\n                <button ion-button full type="submit">Submit</button>\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </form>\n</ion-content>\n'/*ion-inline-end:"/Users/avinash/Apps/complaints_tracker/App/Shubham_App/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_5__providers_toast_toast__["a" /* ToastProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_loader_loader__["a" /* LoaderProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__["a" /* RestProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoaderProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the LoaderProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var LoaderProvider = /** @class */ (function () {
    function LoaderProvider(http, loadingController) {
        this.http = http;
        this.loadingController = loadingController;
        console.log('Hello LoaderProvider Provider');
        this.loading = this.loadingController.create({
            content: 'Please Wait....'
        });
    }
    LoaderProvider.prototype.presentLoading = function () {
        this.loading.present();
    };
    LoaderProvider.prototype.stoploading = function () {
        this.loading.dismiss();
    };
    LoaderProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* LoadingController */]])
    ], LoaderProvider);
    return LoaderProvider;
}());

//# sourceMappingURL=loader.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToastProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the ToastProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ToastProvider = /** @class */ (function () {
    function ToastProvider(http, toastCtrl) {
        this.http = http;
        this.toastCtrl = toastCtrl;
        console.log('Hello ToastProvider Provider');
    }
    ToastProvider.prototype.showToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000
        });
        toast.present();
    };
    ToastProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* ToastController */]])
    ], ToastProvider);
    return ToastProvider;
}());

//# sourceMappingURL=toast.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(225);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_engg_dashboard_engg_dashboard__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_rest_rest__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_engg_view_complaint_engg_view_complaint__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_engg_accept_complaint_engg_accept_complaint__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_common_http__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_loader_loader__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_toast_toast__ = __webpack_require__(203);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











//http call



var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_engg_dashboard_engg_dashboard__["a" /* EnggDashboardPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_engg_view_complaint_engg_view_complaint__["a" /* EnggViewComplaintPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_engg_accept_complaint_engg_accept_complaint__["a" /* EnggAcceptComplaintPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/engg-accept-complaint/engg-accept-complaint.module#EnggAcceptComplaintPageModule', name: 'EnggAcceptComplaintPage', segment: 'engg-accept-complaint', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/engg-dashboard/engg-dashboard.module#EnggDashboardPageModule', name: 'EnggDashboardPage', segment: 'engg-dashboard', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/engg-view-complaint/engg-view-complaint.module#EnggViewComplaintPageModule', name: 'EnggViewComplaintPage', segment: 'engg-view-complaint', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_11__angular_common_http__["b" /* HttpClientModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_engg_dashboard_engg_dashboard__["a" /* EnggDashboardPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_engg_view_complaint_engg_view_complaint__["a" /* EnggViewComplaintPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_engg_accept_complaint_engg_accept_complaint__["a" /* EnggAcceptComplaintPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_8__providers_rest_rest__["a" /* RestProvider */],
                __WEBPACK_IMPORTED_MODULE_12__providers_loader_loader__["a" /* LoaderProvider */],
                __WEBPACK_IMPORTED_MODULE_13__providers_toast_toast__["a" /* ToastProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 255:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppSettings; });
var AppSettings = /** @class */ (function () {
    function AppSettings() {
    }
    AppSettings.baseUrl = "https://thawing-eyrie-14958.herokuapp.com/";
    return AppSettings;
}());

//# sourceMappingURL=app.settings.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(201);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/avinash/Apps/complaints_tracker/App/Shubham_App/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/avinash/Apps/complaints_tracker/App/Shubham_App/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_settings__ = __webpack_require__(255);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var RestProvider = /** @class */ (function () {
    function RestProvider(http) {
        this.http = http;
        console.log('Hello RestProvider Provider');
    }
    RestProvider.prototype.userLogin = function (username, pass) {
        var headers = new Headers();
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
        headers.append('Accept', 'application/json');
        headers.append('content-type', 'application/json');
        var data = {
            "email": username,
            "password": pass
        };
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__app_app_settings__["a" /* AppSettings */].baseUrl + 'users/login', data);
    };
    RestProvider.prototype.getAllComplaint = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__app_app_settings__["a" /* AppSettings */].baseUrl + 'complaint/gelAllcomplaint');
    };
    RestProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], RestProvider);
    return RestProvider;
}());

//# sourceMappingURL=rest.js.map

/***/ })

},[204]);
//# sourceMappingURL=main.js.map