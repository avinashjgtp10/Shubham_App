webpackJsonp([17],{

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppSettings; });
var AppSettings = /** @class */ (function () {
    function AppSettings() {
    }
    AppSettings.baseUrl = "https://thawing-eyrie-14958.herokuapp.com/";
    //public static baseUrl: string = "http://localhost:3000/";
    AppSettings.status = [{ id: 1, value: "Open" }, { id: 2, value: "Close" }, { id: 3, value: "Pending" }];
    return AppSettings;
}());

//# sourceMappingURL=app.settings.js.map

/***/ }),

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswordValidator; });
var PasswordValidator = /** @class */ (function () {
    function PasswordValidator() {
    }
    // Inspired on: http://plnkr.co/edit/Zcbg2T3tOxYmhxs7vaAm?p=preview
    PasswordValidator.areEqual = function (formGroup) {
        var val;
        var valid = true;
        for (var key in formGroup.controls) {
            if (formGroup.controls.hasOwnProperty(key)) {
                var control = formGroup.controls[key];
                if (val === undefined) {
                    val = control.value;
                }
                else {
                    if (val !== control.value) {
                        valid = false;
                        break;
                    }
                }
            }
        }
        if (valid) {
            return null;
        }
        return {
            areEqual: true
        };
    };
    return PasswordValidator;
}());

//# sourceMappingURL=password.validator.js.map

/***/ }),

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MockData; });
var MockData = /** @class */ (function () {
    function MockData() {
    }
    //public static validationPasswordPattern:string='^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]+$'
    MockData.validationPasswordPattern = '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]+$';
    MockData.adminCreateCustomerValidationMessage = {
        'u_dateOf_Purchased': [
            { type: 'required', message: 'Date is required.' }
        ],
        'u_MachinePurchased': [
            { type: 'required', message: 'Machine name is required.' }
        ],
        'service_period': [
            { type: 'required', message: 'Please select service period.' }
        ],
        'warrenty_period': [
            { type: 'required', message: 'Please select warrenty period.' }
        ],
        'purchase_condation': [
            {
                type: 'required', message: 'Purchase condation is required.'
            }
        ],
        'name': [
            { type: 'required', message: 'Name is required.' }
        ],
        'Machine_No': [
            { type: 'required', message: 'Machine Number is required.' }
        ],
        'lastname': [
            { type: 'required', message: 'Last name is required.' }
        ],
        'email': [
            { type: 'required', message: 'Email is required.' },
            { type: 'pattern', message: 'Please enter a valid email.' }
        ],
        'phone': [
            { type: 'required', message: 'Phone is required.' },
            { type: 'maxLength', message: 'The phone is incorrect' },
            { type: 'pattern', message: 'The phone is incorrect' },
            { type: 'minLength', message: 'The phone is incorrect' }
        ],
        'alter': [
            { type: 'maxLength', message: 'The phone is incorrect' },
            { type: 'pattern', message: 'The phone is incorrect' }
        ],
        'u_password': [
            { type: 'required', message: 'Password is required.' },
            { type: 'minlength', message: 'Password must be at least 5 characters long.' },
            { type: 'pattern', message: 'Your password must contain at least one uppercase, one lowercase, and one number.' }
        ],
        'u_cpassword': [
            { type: 'required', message: 'Confirm password is required.' }
        ],
        'matching_passwords': [
            { type: 'areEqual', message: 'Password mismatch.' }
        ],
        'terms': [
            { type: 'pattern', message: 'You must accept terms and conditions.' }
        ],
    };
    MockData.adminEnggValidationMsg = {
        'u_Joining_date': [
            { type: 'required', message: 'Date is required.' }
        ],
        'engg_type': [
            { type: 'required', message: 'Machine name is required.' }
        ],
        'name': [
            { type: 'required', message: 'Name is required.' }
        ],
        'lastname': [
            { type: 'required', message: 'Last name is required.' }
        ],
        'email': [
            { type: 'required', message: 'Email is required.' },
            { type: 'pattern', message: 'Please enter a valid email.' }
        ],
        'phone': [
            { type: 'required', message: 'Phone is required.' },
            { type: 'maxLength', message: 'The phone is incorrect' },
            { type: 'pattern', message: 'The phone is incorrect' }
        ],
        'alter': [
            { type: 'maxLength', message: 'The phone is incorrect' },
            { type: 'pattern', message: 'The phone is incorrect' }
        ],
        'u_password': [
            { type: 'required', message: 'Password is required.' },
            { type: 'minlength', message: 'Password must be at least 5 characters long.' },
            { type: 'pattern', message: 'Your password must contain at least one uppercase, one lowercase, and one number.' }
        ],
        'u_cpassword': [
            { type: 'required', message: 'Confirm password is required.' }
        ],
        'matching_passwords': [
            { type: 'areEqual', message: 'Password mismatch.' }
        ],
        'terms': [
            { type: 'pattern', message: 'You must accept terms and conditions.' }
        ],
    };
    return MockData;
}());

//# sourceMappingURL=mock-data.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminAssignEnggPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reusable_component_loader_page_loader__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__swimlane_ngx_datatable__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__assign_engg_modal_assign_engg_modal__ = __webpack_require__(160);
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
 * Generated class for the AdminAssignEnggPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AdminAssignEnggPage = /** @class */ (function () {
    function AdminAssignEnggPage(modalCtrl, rest, navCtrl, navParams) {
        this.modalCtrl = modalCtrl;
        this.rest = rest;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.machinType = [];
        this.allcomplaint = [];
        this.userObj = {};
        this.isSearchEng = true;
        this.ColumnMode = __WEBPACK_IMPORTED_MODULE_4__swimlane_ngx_datatable__["a" /* ColumnMode */];
        this.SelectionType = __WEBPACK_IMPORTED_MODULE_4__swimlane_ngx_datatable__["c" /* SelectionType */];
        this.columns = [
            { name: "name", prop: 'c_id' },
            { name: 'Summary' },
            { name: 'Company' }
        ];
    }
    AdminAssignEnggPage.prototype.ionViewDidLoad = function () {
        this.initializeItems();
        this.loadPage.showLoader();
    };
    AdminAssignEnggPage.prototype.asign = function (event) {
        var _this = this;
        var enggModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__assign_engg_modal_assign_engg_modal__["a" /* AssignEnggModalPage */], { complaintData: event });
        enggModal.onDidDismiss(function (data) {
            _this.initializeItems();
        });
        enggModal.present();
    };
    AdminAssignEnggPage.prototype.getItems = function (ev) {
        var val = ev.target.value;
        if (val && val.trim() != '') {
            this.allcomplaint = this.allcomplaint.filter(function (item) {
                return parseInt(item.c_id) === parseInt(val) || (item.c_desc.toLowerCase().indexOf(val.toLowerCase())) > -1;
            });
        }
        if (val.length === 0) {
            this.initializeItems();
        }
    };
    AdminAssignEnggPage.prototype.initializeItems = function () {
        var _this = this;
        this.rest.getAllComplaint().subscribe(function (result) {
            _this.allcomplaint = result.data;
            _this.allcomplaint = _this.allcomplaint.filter(function (ele) {
                _this.rest.getMachineType().subscribe(function (result) {
                    _this.machinType = result.data;
                    _this.machinType.forEach(function (el) {
                        if (ele.Machine_type === el.id) {
                            _this.loadPage.hideLoader();
                            ele.Machine_type = el.Value;
                        }
                    });
                });
                return ele.c_status === 1;
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_3__reusable_component_loader_page_loader__["a" /* PageLoader */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__reusable_component_loader_page_loader__["a" /* PageLoader */])
    ], AdminAssignEnggPage.prototype, "loadPage", void 0);
    AdminAssignEnggPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-admin-assign-engg',template:/*ion-inline-start:"/Users/avinash/Apps/complaints_tracker/App/Shubham_App/src/pages/admin-assign-engg/admin-assign-engg.html"*/'<!--\n  Generated template for the AdminAssignEnggPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header *ngIf="isSearchEng" id="backBtn">\n  <ion-navbar>\n    <ion-title>Assign Complaint</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-header *ngIf="!isSearchEng" id="searchEngg">\n  <ion-navbar>\n    <ion-title>Search Engineer</ion-title>\n    <button ion-button   color="light" (click)="isSearchEng = true" *ngIf="!isSearchEng">Close</button>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <page-loader></page-loader>\n  \n      <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n      <b *ngIf="allcomplaint.length === 0" style="text-align: center;    display: block;font-size: 2em; color:red;">Data not\n        Found</b>\n      <section *ngIf="allcomplaint.length >= 1">\n        <div *ngFor="let c of allcomplaint">\n          <ion-card>\n            <ion-card-header>\n              <h2><b> {{c.c_id}}</b> </h2>\n            </ion-card-header>\n            <ion-card-content>\n              <ion-row>\n                <ion-col> {{c.c_desc}} </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col>Date:</ion-col>\n                <ion-col>{{c.c_date | convertMachinName}}</ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col>Type of Machine:</ion-col>\n                <ion-col>{{c.Machine_type}}</ion-col>\n              </ion-row>\n              <ion-row>\n                  <button full ion-button float="right" expand="full" (click)="asign(c)">Assign Engineer</button>\n              </ion-row>\n            </ion-card-content>\n          </ion-card>\n        </div>\n      </section>\n   \n</ion-content>'/*ion-inline-end:"/Users/avinash/Apps/complaints_tracker/App/Shubham_App/src/pages/admin-assign-engg/admin-assign-engg.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], AdminAssignEnggPage);
    return AdminAssignEnggPage;
}());

//# sourceMappingURL=admin-assign-engg.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AssignEnggModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_toast_toast__ = __webpack_require__(28);
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
 * Generated class for the AssignEnggModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AssignEnggModalPage = /** @class */ (function () {
    function AssignEnggModalPage(navCtrl, viewCtrl, toast, rest, navParams) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.toast = toast;
        this.rest = rest;
        this.navParams = navParams;
        this.getAllEngg = [];
        this.complaintData = navParams.get('complaintData');
    }
    AssignEnggModalPage.prototype.ionViewDidLoad = function () {
        this.initializeUser();
        console.log('ionViewDidLoad AssignEnggModalPage');
    };
    AssignEnggModalPage.prototype.initializeUser = function () {
        var _this = this;
        this.rest.getAllUsers().subscribe(function (allUser) {
            _this.getAllEngg = allUser.data.filter(function (el) {
                return parseInt(el.u_role) === 3;
            });
        });
    };
    AssignEnggModalPage.prototype.getEngg = function (ev) {
        var val = ev.target.value;
        if (val && val.trim() != '') {
            this.getAllEngg = this.getAllEngg.filter(function (item) {
                return parseInt(item.u_id) === parseInt(val) || (item.u_email.toLowerCase().indexOf(val.toLowerCase())) > -1 ||
                    (item.u_name.toLowerCase().indexOf(val.toLowerCase())) > -1;
            });
        }
        if (val.length === 0) {
            this.initializeUser();
        }
    };
    AssignEnggModalPage.prototype.updateComplaint = function (user) {
        var _this = this;
        var data = {
            status: 3,
            complaintId: this.complaintData.c_id,
            assignTo: user.u_id
        };
        this.rest.assignComplaint(data).subscribe(function (result) {
            if (result.status === "success") {
                _this.toast.showToast("Success!");
                _this.closeModal();
            }
        });
    };
    AssignEnggModalPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss({ status: "dismiss" });
    };
    AssignEnggModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-assign-engg-modal',template:/*ion-inline-start:"/Users/avinash/Apps/complaints_tracker/App/Shubham_App/src/pages/assign-engg-modal/assign-engg-modal.html"*/'<!--\n  Generated template for the AssignEnggModalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Assign to Engineer</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="closeModal()">\n          <ion-icon item-right name="ios-close-outline"></ion-icon>\n      </button>\n  </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n    <ion-searchbar (ionInput)="getEngg($event)"></ion-searchbar>\n    <b *ngIf="getAllEngg.length === 0" style="text-align: center;    display: block;font-size: 2em; color:red;">Data not\n      Found</b>\n\n      <div *ngFor="let user of getAllEngg">\n        <ion-card>\n          <ion-card-header>\n            <h2><b> {{user.u_id}} </b> </h2>\n          </ion-card-header>\n          <ion-card-content>\n                  <ion-row>\n              <ion-col>Name:</ion-col>\n              <ion-col>{{user.u_name}}</ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col>Email:</ion-col>\n              <ion-col>{{user.u_email}}</ion-col>\n            </ion-row>\n            <ion-row>\n                <button full ion-button float="right" expand="full" (click)="updateComplaint(user)">Assign TO Engineer</button>\n            </ion-row>\n          </ion-card-content>\n        </ion-card>\n      </div>\n</ion-content>\n'/*ion-inline-end:"/Users/avinash/Apps/complaints_tracker/App/Shubham_App/src/pages/assign-engg-modal/assign-engg-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_toast_toast__["a" /* ToastProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], AssignEnggModalPage);
    return AssignEnggModalPage;
}());

//# sourceMappingURL=assign-engg-modal.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminCreateCustomerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__validators_password_validator__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_rest_rest__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_toast_toast__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_mock_data__ = __webpack_require__(136);
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
 * Generated class for the AdminCreateCustomerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AdminCreateCustomerPage = /** @class */ (function () {
    function AdminCreateCustomerPage(toast, navCtrl, rest, formBuilder, navParams) {
        this.toast = toast;
        this.navCtrl = navCtrl;
        this.rest = rest;
        this.formBuilder = formBuilder;
        this.navParams = navParams;
        this.passwordEye = "eye";
        this.cPassEye = "eye";
        this.form = [
            { key: "new", val: 'New', isChecked: true },
            { key: "reCondition", val: 'Re Conditioned', isChecked: false }
        ];
        this.password_type = "password";
        this.cpassword_type = "password";
        this.validation_messages = __WEBPACK_IMPORTED_MODULE_6__app_mock_data__["a" /* MockData */].adminCreateCustomerValidationMessage;
        this.maxDate = new Date().toISOString();
        this.typesOfMachin = [
            "Computerised Embroidery Machines",
            "Reconditioned Barudan  Embroidery Machines",
            "Circular Knitting Machines",
            "Flat knitting Machines",
            "Chain Stitch Machines",
            "Laser Cutting Machines",
            "Dual sequence cording Machines",
            "Cap knitting Machines", "Coller Knitting Machines"
        ];
    }
    AdminCreateCustomerPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AdminCreateCustomerPage');
    };
    AdminCreateCustomerPage.prototype.getMonth = function () {
        var arr = [];
        for (var i = 1; i <= 12; i++) {
            arr.push(i);
        }
        return arr;
    };
    AdminCreateCustomerPage.prototype.changePaswordType = function () {
        this.passwordEye = this.passwordEye === "eye" ? "eye-off" : "eye";
        this.password_type = this.password_type === "text" ? "password" : "text";
    };
    AdminCreateCustomerPage.prototype.changecPaswordType = function () {
        this.cPassEye = this.cPassEye === "eye" ? "eye-off" : "eye";
        this.cpassword_type = this.cpassword_type === "text" ? "password" : "text";
    };
    AdminCreateCustomerPage.prototype.ngOnInit = function () {
        this.matching_passwords_group = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormGroup */]({
            u_password: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].compose([
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].minLength(5),
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].pattern('')
            ])),
            u_cpassword: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required)
        }, function (formGroup) {
            return __WEBPACK_IMPORTED_MODULE_3__validators_password_validator__["a" /* PasswordValidator */].areEqual(formGroup);
        });
        this.validations_form = this.formBuilder.group({
            u_dateOf_Purchased: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required),
            purchase_condation: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](''),
            address: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](""),
            u_MachinePurchased: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required),
            alter: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]("", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].minLength(10), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].maxLength(10), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
            name: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required),
            u_note: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](''),
            service_period: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required),
            warrenty_period: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required),
            Machine_No: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required),
            email: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].compose([
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
            ])),
            matching_passwords: this.matching_passwords_group,
            phone: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].minLength(10), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].maxLength(10), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].pattern("^((\\+91-?)|0)?[0-9]{10}$")])
        });
    };
    AdminCreateCustomerPage.prototype.onSubmit = function (values) {
        var _this = this;
        var Obj = {
            "u_name": values.name,
            "u_mobile": values.phone,
            "u_altermobile": values.alter,
            "u_email": values.email,
            "u_address": values.address,
            "u_MachinePurchased": values.u_MachinePurchased,
            "u_dateOf_Purchased": new Date(values.u_dateOf_Purchased),
            "u_password": values.matching_passwords.u_password,
            "u_cpassword": values.matching_passwords.u_cpassword,
            "u_purchase_con": values.purchase_condation,
            "u_note": values.u_note,
            "u_MachineNo": values.Machine_No,
            "u_ServicePeriod": values.service_period,
            "u_WarrentyPeriod": values.warrenty_period,
            "u_role": 1,
            "u_roleType": null,
            "u_joinDate": new Date()
        };
        this.rest.createCustomer(Obj).subscribe(function (result) {
            if (result.status === "success") {
                _this.toast.showToast("Customer Details saved");
                _this.validations_form.reset();
            }
            if (result.status === "error") {
                _this.toast.showToast(result.message);
            }
        });
    };
    AdminCreateCustomerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-admin-create-customer',template:/*ion-inline-start:"/Users/avinash/Apps/complaints_tracker/App/Shubham_App/src/pages/admin-create-customer/admin-create-customer.html"*/'<!--\n  Generated template for the AdminCreateCustomerPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Create Customer</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list lines="none">\n    <form [formGroup]="validations_form" (ngSubmit)="onSubmit(validations_form.value)">\n\n      <ion-item>\n        <ion-label floating>Customer Name<span style="color:red">*</span></ion-label>\n        <ion-input type="text" formControlName="name"></ion-input>\n      </ion-item>\n      <div class="validation-errors">\n        <ng-container *ngFor="let validation of validation_messages.name">\n          <div class="error-message"\n            *ngIf="validations_form.get(\'name\').hasError(validation.type) && (validations_form.get(\'name\').dirty || validations_form.get(\'name\').touched)">\n            <ion-icon name="information-circle-outline"></ion-icon> {{ validation.message }}\n          </div>\n        </ng-container>\n      </div>\n\n      <ion-item>\n        <ion-label floating>Mobile Number<span style="color:red">*</span></ion-label>\n        <ion-input type="text" formControlName="phone"></ion-input>\n      </ion-item>\n      <div class="validation-errors">\n        <ng-container *ngFor="let validation of validation_messages.phone">\n          <div class="error-message"\n            *ngIf="validations_form.get(\'phone\').hasError(validation.type) && (validations_form.get(\'phone\').dirty || validations_form.get(\'phone\').touched)">\n            <ion-icon name="information-circle-outline"></ion-icon> {{ validation.message }}\n          </div>\n        </ng-container>\n      </div>\n\n\n      <ion-item>\n        <ion-label floating>Alternative Contact number</ion-label>\n        <ion-input type="text" formControlName="alter"></ion-input>\n      </ion-item>\n      <div class="validation-errors">\n        <ng-container *ngFor="let validation of validation_messages.alter">\n          <div class="error-message"\n            *ngIf="validations_form.get(\'alter\').hasError(validation.type) && (validations_form.get(\'alter\').dirty || validations_form.get(\'alter\').touched)">\n            <ion-icon name="information-circle-outline"></ion-icon> {{ validation.message }}\n          </div>\n        </ng-container>\n      </div>\n\n\n      <ion-item>\n        <ion-label floating>Email<span style="color:red">*</span></ion-label>\n        <ion-input type="email" formControlName="email"></ion-input>\n      </ion-item>\n      <div class="validation-errors">\n        <ng-container *ngFor="let validation of validation_messages.email">\n          <div class="error-message"\n            *ngIf="validations_form.get(\'email\').hasError(validation.type) && (validations_form.get(\'email\').dirty || validations_form.get(\'email\').touched)">\n            <ion-icon name="information-circle-outline"></ion-icon> {{ validation.message }}\n          </div>\n        </ng-container>\n      </div>\n\n      <ion-item>\n        <ion-label floating>Address<span style="color:red">*</span></ion-label>\n        <ion-textarea formControlName="address"></ion-textarea>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Machine purchased<span style="color:red">*</span></ion-label>\n        <ion-select formControlName="u_MachinePurchased">\n          <ion-option *ngFor="let mach of typesOfMachin" [value]="mach">\n            {{mach}}</ion-option>\n        </ion-select>\n      </ion-item>\n      <div class="validation-errors">\n        <ng-container *ngFor="let validation of validation_messages.u_MachinePurchased">\n          <div class="error-message"\n            *ngIf="validations_form.get(\'u_MachinePurchased\').hasError(validation.type) && (validations_form.get(\'u_MachinePurchased\').dirty || validations_form.get(\'u_MachinePurchased\').touched)">\n            <ion-icon name="information-circle-outline"></ion-icon> {{ validation.message }}\n          </div>\n        </ng-container>\n      </div>\n\n      <ion-list radio-group formControlName="purchase_condation">\n        <ion-list-header>\n          Purchase Type\n        </ion-list-header>\n\n        <ion-item *ngFor="let f of form ">\n          <ion-label>{{f.val}}</ion-label>\n          <ion-radio checked="{{f.isChecked}}" value="{{f.key}}"></ion-radio>\n        </ion-item>\n      </ion-list>\n      <div class="validation-errors">\n        <ng-container *ngFor="let validation of validation_messages.purchase_condation">\n          <div class="error-message"\n            *ngIf="validations_form.get(\'purchase_condation\').hasError(validation.type) && (validations_form.get(\'purchase_condation\').dirty || validations_form.get(\'purchase_condation\').touched)">\n            <ion-icon name="information-circle-outline"></ion-icon> {{ validation.message }}\n          </div>\n        </ng-container>\n      </div>\n\n\n\n\n      <ion-item>\n        <ion-label floating>Note</ion-label>\n        <ion-input type="text" formControlName="u_note"></ion-input>\n      </ion-item>\n\n\n      <ion-item>\n        <ion-label floating>Machine No<span style="color:red">*</span></ion-label>\n        <ion-input type="text" formControlName="Machine_No"></ion-input>\n      </ion-item>\n      <div class="validation-errors">\n        <ng-container *ngFor="let validation of validation_messages.Machine_No">\n          <div class="error-message"\n            *ngIf="validations_form.get(\'Machine_No\').hasError(validation.type) && (validations_form.get(\'Machine_No\').dirty || validations_form.get(\'Machine_No\').touched)">\n            <ion-icon name="information-circle-outline"></ion-icon> {{ validation.message }}\n          </div>\n        </ng-container>\n      </div>\n\n\n      <ion-item>\n        <ion-label>Service Period<span style="color:red">*</span></ion-label>\n        <ion-select formControlName="service_period">\n          <ion-option *ngFor="let i of getMonth()" [value]="i">\n            {{i}}</ion-option>\n        </ion-select>\n      </ion-item>\n      <div class="validation-errors">\n        <ng-container *ngFor="let validation of validation_messages.service_period">\n          <div class="error-message"\n            *ngIf="validations_form.get(\'service_period\').hasError(validation.type) && (validations_form.get(\'service_period\').dirty || validations_form.get(\'service_period\').touched)">\n            <ion-icon name="information-circle-outline"></ion-icon> {{ validation.message }}\n          </div>\n        </ng-container>\n      </div>\n\n      <ion-item>\n        <ion-label>Warrenty Period<span style="color:red">*</span></ion-label>\n        <ion-select formControlName="warrenty_period">\n          <ion-option *ngFor="let category of getMonth();let i=index;" [value]=\'category\' [selected]="i===0">\n            {{category}}\n          </ion-option>\n        </ion-select>\n      </ion-item>\n      <div class="validation-errors">\n        <ng-container *ngFor="let validation of validation_messages.warrenty_period">\n          <div class="error-message"\n            *ngIf="validations_form.get(\'warrenty_period\').hasError(validation.type) && (validations_form.get(\'warrenty_period\').dirty || validations_form.get(\'warrenty_period\').touched)">\n            <ion-icon name="information-circle-outline"></ion-icon> {{ validation.message }}\n          </div>\n        </ng-container>\n      </div>\n\n\n      <ion-item>\n        <ion-label>Date of purchase<span style="color:red">*</span></ion-label>\n          <ion-datetime [max]="maxDate" formControlName="u_dateOf_Purchased" display-timezone="utc"></ion-datetime>\n      </ion-item>\n      <div class="validation-errors">\n        <ng-container *ngFor="let validation of validation_messages.u_dateOf_Purchased">\n          <div class="error-message"\n            *ngIf="validations_form.get(\'u_dateOf_Purchased\').hasError(validation.type) && (validations_form.get(\'u_dateOf_Purchased\').dirty || validations_form.get(\'u_dateOf_Purchased\').touched)">\n            <ion-icon name="information-circle-outline"></ion-icon> {{ validation.message }}\n          </div>\n        </ng-container>\n      </div>\n\n      <div formGroupName="matching_passwords">\n        <ion-item>\n          <ion-label position="floating" color="primary">Password<span style="color:red">*</span></ion-label>\n          <ion-input [type]="password_type" formControlName="u_password"></ion-input>\n\n          <button style="width:auto" ion-button clear color="dark" type="button" item-right\n            (click)="changePaswordType()">\n            <ion-icon [name]="passwordEye"> </ion-icon>\n          </button>\n        </ion-item>\n        <div class="validation-errors">\n          <ng-container *ngFor="let validation of validation_messages.u_password">\n            <div class="error-message"\n              *ngIf="validations_form.get(\'matching_passwords\').get(\'u_password\').hasError(validation.type) && (validations_form.get(\'matching_passwords\').get(\'u_password\').dirty || validations_form.get(\'matching_passwords\').get(\'u_password\').touched)">\n              <ion-icon name="information-circle-outline"></ion-icon> {{ validation.message }}\n            </div>\n          </ng-container>\n        </div>\n\n        <ion-item>\n          <ion-label position="floating" color="primary">Confirm Password<span style="color:red">*</span></ion-label>\n          <ion-input [type]="cpassword_type" formControlName="u_cpassword"></ion-input>\n\n          <button ion-button style="width:auto" clear color="dark" type="button" item-right\n            (click)="changecPaswordType()">\n            <ion-icon [name]="cPassEye"> </ion-icon>\n          </button>\n        </ion-item>\n        <div class="validation-errors">\n          <ng-container *ngFor="let validation of validation_messages.u_cpassword">\n            <div class="error-message"\n              *ngIf="validations_form.get(\'matching_passwords\').get(\'u_cpassword\').hasError(validation.type) && (validations_form.get(\'matching_passwords\').get(\'u_cpassword\').dirty || validations_form.get(\'matching_passwords\').get(\'u_cpassword\').touched)">\n              <ion-icon name="information-circle-outline"></ion-icon> {{ validation.message }}\n            </div>\n          </ng-container>\n        </div>\n      </div>\n      <!-- These validations are for the form group -->\n      <div class="validation-errors">\n        <ng-container *ngFor="let validation of validation_messages.matching_passwords">\n          <div class="error-message"\n            *ngIf="validations_form.get(\'matching_passwords\').hasError(validation.type) && (validations_form.get(\'matching_passwords\').get(\'u_cpassword\').dirty || validations_form.get(\'matching_passwords\').get(\'u_cpassword\').touched)">\n            <ion-icon name="information-circle-outline"></ion-icon> {{ validation.message }}\n          </div>\n        </ng-container>\n      </div>\n\n      <button full color="primary" class="submit-btn" expand="full" type="submit"\n        [disabled]="!validations_form.valid">Submit</button>\n    </form>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/avinash/Apps/complaints_tracker/App/Shubham_App/src/pages/admin-create-customer/admin-create-customer.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__providers_toast_toast__["a" /* ToastProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], AdminCreateCustomerPage);
    return AdminCreateCustomerPage;
}());

//# sourceMappingURL=admin-create-customer.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminCreateEnggPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__validators_password_validator__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_rest_rest__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_toast_toast__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_mock_data__ = __webpack_require__(136);
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
 * Generated class for the AdminCreateEnggPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AdminCreateEnggPage = /** @class */ (function () {
    function AdminCreateEnggPage(toast, navCtrl, rest, formBuilder, navParams) {
        this.toast = toast;
        this.navCtrl = navCtrl;
        this.rest = rest;
        this.formBuilder = formBuilder;
        this.navParams = navParams;
        this.passwordEye = "eye";
        this.confirmEye = "eye";
        this.validation_messages = __WEBPACK_IMPORTED_MODULE_6__app_mock_data__["a" /* MockData */].adminEnggValidationMsg;
        this.password_type = "password";
        this.cpassword_type = "password";
        this.maxDate = new Date().toISOString();
        this.typesOfMachin = [{ key: 1, value: "Mechnical" }, { key: 2, value: "Electronic" }, { key: 3, value: "Designing" }];
    }
    AdminCreateEnggPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AdminCreateEnggPage');
    };
    AdminCreateEnggPage.prototype.ngOnInit = function () {
        this.matching_passwords_group = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormGroup */]({
            u_password: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].compose([
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].minLength(5),
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].pattern('')
            ])),
            u_cpassword: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required)
        }, function (formGroup) {
            return __WEBPACK_IMPORTED_MODULE_3__validators_password_validator__["a" /* PasswordValidator */].areEqual(formGroup);
        });
        this.validations_form = this.formBuilder.group({
            u_Joining_date: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required),
            address: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](""),
            engg_type: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required),
            alter: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]("", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].minLength(10), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
            name: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required),
            email: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].compose([
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
            ])),
            matching_passwords: this.matching_passwords_group,
            phone: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].minLength(10), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].pattern("^((\\+91-?)|0)?[0-9]{10}$")])
        });
    };
    AdminCreateEnggPage.prototype.changePaswordType = function () {
        this.passwordEye = this.passwordEye === "eye" ? "eye-off" : "eye";
        this.password_type = this.password_type === "text" ? "password" : "text";
    };
    AdminCreateEnggPage.prototype.changecPaswordType = function () {
        this.confirmEye = this.confirmEye === "eye" ? "eye-off" : "eye";
        this.cpassword_type = this.cpassword_type === "text" ? "password" : "text";
    };
    AdminCreateEnggPage.prototype.onSubmit = function (values) {
        var _this = this;
        var Obj = {
            "u_name": values.name,
            "u_mobile": values.phone,
            "u_altermobile": values.alter,
            "u_email": values.email,
            "u_address": values.address,
            "u_MachinePurchased": null,
            "u_dateOf_Purchased": new Date(values.u_dateOf_Purchased),
            "u_password": values.matching_passwords.u_password,
            "u_cpassword": values.matching_passwords.u_cpassword,
            "u_role": 3,
            "u_roleType": values.engg_type,
            "u_joinDate": values.u_Joining_date
        };
        this.rest.createCustomer(Obj).subscribe(function (result) {
            if (result.status === "success") {
                _this.toast.showToast("Engineer Details saved");
                _this.validations_form.reset();
            }
            if (result.status === "error") {
                _this.toast.showToast(result.message);
            }
        });
    };
    AdminCreateEnggPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-admin-create-engg',template:/*ion-inline-start:"/Users/avinash/Apps/complaints_tracker/App/Shubham_App/src/pages/admin-create-engg/admin-create-engg.html"*/'<!--\n  Generated template for the AdminCreateCustomerPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Create Service Enginner</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list lines="none">\n    <form [formGroup]="validations_form" (ngSubmit)="onSubmit(validations_form.value)">\n\n      <ion-item>\n        <ion-label floating>Enter Name<span style="color:red">*</span></ion-label>\n        <ion-input type="text" formControlName="name"></ion-input>\n      </ion-item>\n      <div class="validation-errors">\n        <ng-container *ngFor="let validation of validation_messages.name">\n          <div class="error-message"\n            *ngIf="validations_form.get(\'name\').hasError(validation.type) && (validations_form.get(\'name\').dirty || validations_form.get(\'name\').touched)">\n            <ion-icon name="information-circle-outline"></ion-icon> {{ validation.message }}\n          </div>\n        </ng-container>\n      </div>\n\n      <ion-item>\n        <ion-label floating>Mobile Number<span style="color:red">*</span></ion-label>\n        <ion-input type="text" formControlName="phone"></ion-input>\n      </ion-item>\n      <div class="validation-errors">\n        <ng-container *ngFor="let validation of validation_messages.phone">\n          <div class="error-message"\n            *ngIf="validations_form.get(\'phone\').hasError(validation.type) && (validations_form.get(\'phone\').dirty || validations_form.get(\'phone\').touched)">\n            <ion-icon name="information-circle-outline"></ion-icon> {{ validation.message }}\n          </div>\n        </ng-container>\n      </div>\n\n\n      <ion-item>\n        <ion-label floating>Alternative Contact number</ion-label>\n        <ion-input type="text" formControlName="alter"></ion-input>\n      </ion-item>\n      <div class="validation-errors">\n        <ng-container *ngFor="let validation of validation_messages.alter">\n          <div class="error-message"\n            *ngIf="validations_form.get(\'alter\').hasError(validation.type) && (validations_form.get(\'alter\').dirty || validations_form.get(\'alter\').touched)">\n            <ion-icon name="information-circle-outline"></ion-icon> {{ validation.message }}\n          </div>\n        </ng-container>\n      </div>\n\n\n      <ion-item>\n        <ion-label floating>Email<span style="color:red">*</span></ion-label>\n        <ion-input type="email" formControlName="email"></ion-input>\n      </ion-item>\n      <div class="validation-errors">\n        <ng-container *ngFor="let validation of validation_messages.email">\n          <div class="error-message"\n            *ngIf="validations_form.get(\'email\').hasError(validation.type) && (validations_form.get(\'email\').dirty || validations_form.get(\'email\').touched)">\n            <ion-icon name="information-circle-outline"></ion-icon> {{ validation.message }}\n          </div>\n        </ng-container>\n      </div>\n\n      <ion-item>\n        <ion-label floating>Address<span style="color:red">*</span></ion-label>\n        <ion-textarea formControlName="address"></ion-textarea>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Engg Type<span style="color:red">*</span></ion-label>\n        <ion-select formControlName="engg_type">\n          <ion-option *ngFor="let mach of typesOfMachin" [value]="mach.key">\n            {{mach.value}}</ion-option>\n        </ion-select>\n      </ion-item>\n      <div class="validation-errors">\n        <ng-container *ngFor="let validation of validation_messages.engg_type">\n          <div class="error-message"\n            *ngIf="validations_form.get(\'engg_type\').hasError(validation.type) && (validations_form.get(\'engg_type\').dirty || validations_form.get(\'engg_type\').touched)">\n            <ion-icon name="information-circle-outline"></ion-icon> {{ validation.message }}\n          </div>\n        </ng-container>\n      </div>\n\n      <ion-item>\n        <ion-label>Date of Joining<span style="color:red">*</span></ion-label>\n        <!-- <ion-input type="Date" formControlName="u_Joining_date"></ion-input> -->\n        <ion-datetime [max]="maxDate" formControlName="u_Joining_date"  display-timezone="utc"></ion-datetime>\n      </ion-item>\n      <div class="validation-errors">\n        <ng-container *ngFor="let validation of validation_messages.u_Joining_date">\n          <div class="error-message"\n            *ngIf="validations_form.get(\'u_Joining_date\').hasError(validation.type) && (validations_form.get(\'u_Joining_date\').dirty || validations_form.get(\'u_Joining_date\').touched)">\n            <ion-icon name="information-circle-outline"></ion-icon> {{ validation.message }}\n          </div>\n        </ng-container>\n      </div>\n\n      <div formGroupName="matching_passwords">\n        <ion-item>\n          <ion-label position="floating" color="primary">Password<span style="color:red">*</span></ion-label>\n          <ion-input [type]="password_type" formControlName="u_password"></ion-input>\n          <button ion-button  style="width:auto"  clear color="dark" type="button" item-right (click)="changePaswordType()"> <ion-icon [name]="passwordEye"> </ion-icon> </button>\n        </ion-item>\n        <div class="validation-errors">\n          <ng-container *ngFor="let validation of validation_messages.u_password">\n            <div class="error-message" *ngIf="validations_form.get(\'matching_passwords\').get(\'u_password\').hasError(validation.type) && (validations_form.get(\'matching_passwords\').get(\'u_password\').dirty || validations_form.get(\'matching_passwords\').get(\'u_password\').touched)">\n              <ion-icon name="information-circle-outline"></ion-icon> {{ validation.message }}\n            </div>\n          </ng-container>\n        </div>\n  \n        <ion-item>\n          <ion-label position="floating" color="primary">Confirm Password<span style="color:red">*</span></ion-label>\n          <ion-input [type]="cpassword_type" formControlName="u_cpassword"></ion-input>\n          <button ion-button  style="width:auto"  clear color="dark" type="button" item-right (click)="changecPaswordType()"> <ion-icon [name]="confirmEye"> </ion-icon> </button>\n           \n        </ion-item>\n        <div class="validation-errors">\n          <ng-container *ngFor="let validation of validation_messages.u_cpassword">\n            <div class="error-message" *ngIf="validations_form.get(\'matching_passwords\').get(\'u_cpassword\').hasError(validation.type) && (validations_form.get(\'matching_passwords\').get(\'u_cpassword\').dirty || validations_form.get(\'matching_passwords\').get(\'u_cpassword\').touched)">\n              <ion-icon name="information-circle-outline"></ion-icon> {{ validation.message }}\n            </div>\n          </ng-container>\n        </div>\n      </div>\n      <!-- These validations are for the form group -->\n      <div class="validation-errors">\n        <ng-container *ngFor="let validation of validation_messages.matching_passwords">\n          <div class="error-message" *ngIf="validations_form.get(\'matching_passwords\').hasError(validation.type) && (validations_form.get(\'matching_passwords\').get(\'u_cpassword\').dirty || validations_form.get(\'matching_passwords\').get(\'u_cpassword\').touched)">\n            <ion-icon name="information-circle-outline"></ion-icon> {{ validation.message }}\n          </div>\n        </ng-container>\n      </div>\n\n      <button full color="primary" class="submit-btn" expand="full" type="submit"\n        [disabled]="!validations_form.valid">Submit</button>\n    </form>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/avinash/Apps/complaints_tracker/App/Shubham_App/src/pages/admin-create-engg/admin-create-engg.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__providers_toast_toast__["a" /* ToastProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], AdminCreateEnggPage);
    return AdminCreateEnggPage;
}());

//# sourceMappingURL=admin-create-engg.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminDashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__admin_create_customer_admin_create_customer__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__admin_create_engg_admin_create_engg__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__admin_assign_engg_admin_assign_engg__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__admin_view_previous_admin_view_previous__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__cust_details_cust_details__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__engg_details_engg_details__ = __webpack_require__(173);
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
 * Generated class for the AdminDashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AdminDashboardPage = /** @class */ (function () {
    function AdminDashboardPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.label = "Admin";
        this.tabData = [
            { url: "../../assets/imgs/creatCust.jpeg",
                title: "Create Customer",
                title1: "Create Service Enginner",
                event: "createCustomer",
                class: "",
                class1: "",
                event1: "createService",
                url1: "../../assets/imgs/serviceEngg.png" },
            { url: "../../assets/imgs/assignService.png",
                title: "Assign Enginner",
                event: "assignEnginner",
                class: "",
                class1: "",
                event1: "viewComplaint",
                title1: "View Complaint",
                url1: "../../assets/imgs/viewComplaint.png" },
            { url: "../../assets/imgs/cust_details.png",
                title: "Customer Details",
                event: "custDetails",
                class: "",
                class1: "",
                event1: "enggDetails",
                title1: "Engineer Details ",
                url1: "../../assets/imgs/engg_details.png" }
        ];
    }
    AdminDashboardPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AdminDashboardPage');
    };
    AdminDashboardPage.prototype.goToHome = function (event) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
    };
    AdminDashboardPage.prototype.tabEvent = function (value) {
        if (value === "createCustomer") {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__admin_create_customer_admin_create_customer__["a" /* AdminCreateCustomerPage */], { user_id: this.navParams.get("user_id") });
        }
        if (value === "custDetails") {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__cust_details_cust_details__["a" /* CustDetailsPage */], { user_id: this.navParams.get("user_id") });
        }
        if (value === "assignEnginner") {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__admin_assign_engg_admin_assign_engg__["a" /* AdminAssignEnggPage */], { user_id: this.navParams.get("user_id") });
        }
    };
    AdminDashboardPage.prototype.tabEvent2 = function (value) {
        if (value === "createService") {
            console.log(value);
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__admin_create_engg_admin_create_engg__["a" /* AdminCreateEnggPage */], { user_id: this.navParams.get("user_id") });
        }
        if (value === "viewComplaint") {
            console.log(value);
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__admin_view_previous_admin_view_previous__["a" /* AdminViewPreviousPage */], { user_id: this.navParams.get("user_id") });
        }
        if (value === "enggDetails") {
            console.log(value);
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__engg_details_engg_details__["a" /* EnggDetailsPage */], { user_id: this.navParams.get("user_id") });
        }
    };
    AdminDashboardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-admin-dashboard',template:/*ion-inline-start:"/Users/avinash/Apps/complaints_tracker/App/Shubham_App/src/pages/admin-dashboard/admin-dashboard.html"*/'<header-component (onClick)="goToHome($event)" [label]="label"></header-component>\n<ion-content>\n  <section class="container">\n    <ion-grid *ngFor="let d of tabData">\n      <tab [imgSrc1]="d.url" [imgSrc2]="d.url1" [title]="d.title" [title1]="d.title1" (onChange)="tabEvent(d.event)" (onChange1)="tabEvent2(d.event1)"></tab>\n    </ion-grid>\n  </section>\n</ion-content>'/*ion-inline-end:"/Users/avinash/Apps/complaints_tracker/App/Shubham_App/src/pages/admin-dashboard/admin-dashboard.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], AdminDashboardPage);
    return AdminDashboardPage;
}());

//# sourceMappingURL=admin-dashboard.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnggDashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__engg_accept_complaint_engg_accept_complaint__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__engg_view_previous_engg_view_previous__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(65);
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
        this.label = "Enginner";
    }
    EnggDashboardPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EnggDashboardPage', this.navParams.get("user_id"));
    };
    EnggDashboardPage.prototype.acceptComplaint = function (event) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__engg_accept_complaint_engg_accept_complaint__["a" /* EnggAcceptComplaintPage */], { user_id: this.navParams.get("user_id") });
    };
    EnggDashboardPage.prototype.previousComplaint = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__engg_view_previous_engg_view_previous__["a" /* EnggViewPreviousPage */], { user_id: this.navParams.get("user_id") });
    };
    EnggDashboardPage.prototype.goToHome = function (event) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
    };
    EnggDashboardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-engg-dashboard',template:/*ion-inline-start:"/Users/avinash/Apps/complaints_tracker/App/Shubham_App/src/pages/engg-dashboard/engg-dashboard.html"*/'<!--\n  Generated template for the AdminDashboardPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<header-component (onClick)="goToHome($event)" [label]="label"></header-component>\n\n<ion-content padding>\n<section>\n  <div class="container" (click)="acceptComplaint($event)">\n    <div class="box">\n    <img src="../../assets/icon/fileaccept.png">\n    <label>Accpet complaint</label>\n    </div>\n  </div>\n  <hr>\n  <div class="container" (click)="previousComplaint()">\n      <div class="box">\n      <img src="../../assets/icon/filesearch.png">\n      <label>View previous complaint</label>\n      </div>\n  </div>\n\n</section>\n</ion-content>\n'/*ion-inline-end:"/Users/avinash/Apps/complaints_tracker/App/Shubham_App/src/pages/engg-dashboard/engg-dashboard.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], EnggDashboardPage);
    return EnggDashboardPage;
}());

//# sourceMappingURL=engg-dashboard.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnggAcceptComplaintPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__engg_view_complaint_engg_view_complaint__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__ = __webpack_require__(20);
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
        this.complaintData = [];
    }
    EnggAcceptComplaintPage.prototype.ionViewDidLoad = function () {
        this.initializeItems();
    };
    EnggAcceptComplaintPage.prototype.action = function (Obj) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__engg_view_complaint_engg_view_complaint__["a" /* EnggViewComplaintPage */], { ObjData: Obj });
    };
    EnggAcceptComplaintPage.prototype.initializeItems = function () {
        var _this = this;
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
    EnggAcceptComplaintPage.prototype.ionViewWillUnload = function () {
    };
    EnggAcceptComplaintPage.prototype.getItems = function (ev) {
        // set val to the value of the searchbar
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.complaintData = this.complaintData.filter(function (item) {
                if (parseInt(item.c_id) === parseInt(val)) {
                    return parseInt(item.c_id) === parseInt(val);
                }
            });
        }
        if (val.length === 0) {
            this.initializeItems(); // Reset items back to all of the items
        }
    };
    EnggAcceptComplaintPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-engg-accept-complaint',template:/*ion-inline-start:"/Users/avinash/Apps/complaints_tracker/App/Shubham_App/src/pages/engg-accept-complaint/engg-accept-complaint.html"*/'<!--\n  Generated template for the AcceptComplaintPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Accept Complaint</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n  <b *ngIf="complaintData.length === 0" style="text-align: center;    display: block;font-size: 2em; color:red;">Data not\n    Found</b>\n  <div *ngFor="let c of complaintData">\n    <ion-card>\n      <ion-card-header>\n        <h2><b> {{c.c_id}}</b> </h2>\n      </ion-card-header>\n      <ion-card-content>\n        <ion-row>\n          <ion-col> {{c.c_desc}} </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>Date:</ion-col>\n          <ion-col>{{c.c_date | convertMachinName}}</ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>Status:</ion-col>\n          <ion-col>{{c.c_status}}</ion-col>\n        </ion-row>\n        <ion-row>\n          <button (click)="action(c)" ion-button>View</button>\n        </ion-row>\n      </ion-card-content>\n    </ion-card>\n  </div>\n\n\n\n</ion-content>'/*ion-inline-end:"/Users/avinash/Apps/complaints_tracker/App/Shubham_App/src/pages/engg-accept-complaint/engg-accept-complaint.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], EnggAcceptComplaintPage);
    return EnggAcceptComplaintPage;
}());

//# sourceMappingURL=engg-accept-complaint.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnggViewComplaintPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_toast_toast__ = __webpack_require__(28);
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
    function EnggViewComplaintPage(navCtrl, toast, rest, navParams) {
        this.navCtrl = navCtrl;
        this.toast = toast;
        this.rest = rest;
        this.navParams = navParams;
        this.filterData = {
            c_id: "",
            c_assignBy: "",
            c_name: "",
            u_mobile: "",
            u_altermobile: "",
            e_desc: "",
            u_email: "",
            c_status: ""
        };
        this.enggData = {};
        this.complaintData = [];
    }
    EnggViewComplaintPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.filterData = this.navParams.get('ObjData');
        this.rest.getCustomerDetails(this.filterData.c_assignBy).subscribe(function (result) {
            _this.filterData.c_name = result.data.u_name;
            _this.filterData.u_mobile = result.data.u_mobile;
            _this.filterData.u_altermobile = result.data.u_altermobile;
            _this.filterData.u_email = result.data.u_email;
            _this.filterData.e_desc = result.data.e_desc;
        });
    };
    EnggViewComplaintPage.prototype.addData = function () {
        var _this = this;
        var data = {
            status: parseInt(this.filterData.c_status),
            complaintId: this.filterData.c_id,
            e_desc: this.filterData.e_desc
        };
        this.rest.updateComplaint(data).subscribe(function (result) {
            if (result.status === "success") {
                _this.toast.showToast("Success!");
                _this.navCtrl.pop();
            }
        });
        console.log("UserData" + JSON.stringify(this.filterData));
    };
    EnggViewComplaintPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-engg-view-complaint',template:/*ion-inline-start:"/Users/avinash/Apps/complaints_tracker/App/Shubham_App/src/pages/engg-view-complaint/engg-view-complaint.html"*/'<!--\n  Generated template for the EnggViewVomplaintPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Complaint Details</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <form (ngSubmit)="addData()">\n    <ion-grid>\n      <ion-row>\n        <ion-col col-5>\n          <div>\n            Complaint ID:\n          </div>\n        </ion-col>\n        <ion-col>\n          <div>\n            {{filterData.c_id}}\n          </div>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-5>\n          <div>\n            User name:\n          </div>\n        </ion-col>\n        <ion-col>\n          <div>\n            {{filterData.c_name}}\n          </div>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-5>\n          <div>\n            Mobile Number\n          </div>\n        </ion-col>\n        <ion-col>\n          <div>\n            {{filterData.u_mobile}}\n          </div>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-5>\n          <div>\n            Alternative Mobile:\n          </div>\n        </ion-col>\n        <ion-col>\n          <div>\n            {{filterData.u_altermobile}}\n          </div>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-5>\n          <div>\n            Email\n          </div>\n        </ion-col>\n        <ion-col>\n          <div>\n            {{filterData.u_email}}\n          </div>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-5>\n          <div>\n            Description\n          </div>\n        </ion-col>\n        <ion-col>\n          <div>\n            {{filterData.c_desc}}\n          </div>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-5>\n          <div>\n            Complaint Date\n          </div>\n        </ion-col>\n        <ion-col>\n          <div>\n            {{filterData.c_date}}\n          </div>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-5>\n          <div>\n            Photos\n          </div>\n        </ion-col>\n        <ion-col>\n          <div>\n            N/A\n          </div>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-5>\n          <div>\n            Status\n          </div>\n        </ion-col>\n        <ion-col>\n          <div>\n            {{filterData.c_status}}\n          </div>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-5>\n          <div>\n            Comments:\n          </div>\n        </ion-col>\n        <ion-col>\n          <div>\n            <ion-textarea placeholder="Enter your comments" name="description" [(ngModel)]="filterData.e_desc">\n            </ion-textarea>\n          </div>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-5>\n          <div>\n            Change Status:\n          </div>\n        </ion-col>\n        <ion-col>\n          <div>\n            <ion-select class="statusChange" [ngModelOptions]="{standalone: true}" [(ngModel)]="filterData.c_status">\n              <ion-option value="3" selected="true">Pending</ion-option>\n              <ion-option value="2">Close</ion-option>\n\n            </ion-select>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <button ion-button type="submit" block [disabled]="!filterData.e_desc">Add Data</button>\n  </form>\n</ion-content>'/*ion-inline-end:"/Users/avinash/Apps/complaints_tracker/App/Shubham_App/src/pages/engg-view-complaint/engg-view-complaint.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_toast_toast__["a" /* ToastProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], EnggViewComplaintPage);
    return EnggViewComplaintPage;
}());

//# sourceMappingURL=engg-view-complaint.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnggViewPreviousPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(20);
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
 * Generated class for the EnggViewPreviousPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EnggViewPreviousPage = /** @class */ (function () {
    function EnggViewPreviousPage(navCtrl, _rest, navParams) {
        this.navCtrl = navCtrl;
        this._rest = _rest;
        this.navParams = navParams;
        this.complaintData = [];
    }
    EnggViewPreviousPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this._rest.getAllComplaint().subscribe(function (data) {
            _this.complaintData = data.data.filter(function (el) {
                if (el.c_assignTo === _this.navParams.get("user_id")) {
                    if (el.c_status === 2) {
                        return el;
                    }
                }
                ;
            });
        });
    };
    EnggViewPreviousPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-engg-view-previous',template:/*ion-inline-start:"/Users/avinash/Apps/complaints_tracker/App/Shubham_App/src/pages/engg-view-previous/engg-view-previous.html"*/'<!--\n  Generated template for the AcceptComplaintPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Closed Complaint</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <!-- <ion-searchbar></ion-searchbar> -->\n  <table>\n    <thead>\n      <th> C.No</th>\n      <th> Complaint</th>\n      <th> Complaint Date </th>\n      <th> Action</th>\n    </thead>\n    <tbody>\n      <tr *ngFor="let c of complaintData">\n        <td> {{c.c_id}}</td>\n        <td>\n          {{c.c_desc}}\n        </td>\n        <td> {{c.c_date}}</td>\n        <td> {{c.e_desc}} </td>\n      </tr>\n    </tbody>\n  </table>\n\n\n</ion-content>'/*ion-inline-end:"/Users/avinash/Apps/complaints_tracker/App/Shubham_App/src/pages/engg-view-previous/engg-view-previous.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], EnggViewPreviousPage);
    return EnggViewPreviousPage;
}());

//# sourceMappingURL=engg-view-previous.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustDashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cust_raise_complaint_cust_raise_complaint__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cust_view_complaint_cust_view_complaint__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(65);
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
 * Generated class for the CustDashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CustDashboardPage = /** @class */ (function () {
    function CustDashboardPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.label = "Home";
    }
    CustDashboardPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CustDashboardPage');
    };
    CustDashboardPage.prototype.goToHome = function (event) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
    };
    CustDashboardPage.prototype.raise = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__cust_raise_complaint_cust_raise_complaint__["a" /* CustRaiseComplaintPage */], { user_id: this.navParams.get("user_id") });
    };
    CustDashboardPage.prototype.view = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__cust_view_complaint_cust_view_complaint__["a" /* CustViewComplaintPage */], { user_id: this.navParams.get("user_id") });
    };
    CustDashboardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cust-dashboard',template:/*ion-inline-start:"/Users/avinash/Apps/complaints_tracker/App/Shubham_App/src/pages/cust-dashboard/cust-dashboard.html"*/'<!--\n  Generated template for the CustDashboardPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<header-component (onClick)="goToHome($event)" [label]="label"></header-component>\n\n<ion-content>\n  <section class="container">\n    <div class="raise" (click)="raise()">\n      <img src="../../assets/imgs/raise.png" />\n      <label>Raise Complaint</label>\n    </div>\n    <div class="view" (click)="view()"> \n      <img src="../../assets/imgs/viewComplaint.png" />\n      <label>View Previous Complaint</label>\n    </div>\n  </section>\n</ion-content>'/*ion-inline-end:"/Users/avinash/Apps/complaints_tracker/App/Shubham_App/src/pages/cust-dashboard/cust-dashboard.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], CustDashboardPage);
    return CustDashboardPage;
}());

//# sourceMappingURL=cust-dashboard.js.map

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustRaiseComplaintPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_toast_toast__ = __webpack_require__(28);
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
 * Generated class for the CustRaiseComplaintPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CustRaiseComplaintPage = /** @class */ (function () {
    function CustRaiseComplaintPage(toast, navCtrl, rest, formBuilder, navParams) {
        this.toast = toast;
        this.navCtrl = navCtrl;
        this.rest = rest;
        this.formBuilder = formBuilder;
        this.navParams = navParams;
        this.maxDate = new Date().toISOString();
        this.typesOfMachin = [{ key: 1, value: "Mechnical" }, { key: 2, value: "Electronic" }, { key: 3, value: "Designing" }];
        this.validation_messages = {
            'u_Joining_date': [
                { type: 'required', message: 'Date is required.' }
            ],
            'engg_type': [
                { type: 'required', message: 'Machine name is required.' }
            ],
            'name': [
                { type: 'required', message: 'Description is required.' }
            ],
        };
    }
    CustRaiseComplaintPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CustRaiseComplaintPage');
    };
    CustRaiseComplaintPage.prototype.ngOnInit = function () {
        this.validations_form = this.formBuilder.group({
            u_Joining_date: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required),
            engg_type: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required),
            name: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required),
        });
    };
    CustRaiseComplaintPage.prototype.onSubmit = function (values) {
        var _this = this;
        console.log(JSON.stringify(values));
        var data = {
            "c_desc": values.name,
            "c_assignBy": this.navParams.get("user_id"),
            "machine_type": values.engg_type,
            "c_date": values.u_Joining_date,
            "c_status": 1
        };
        this.rest.createComplaint(data).subscribe(function (result) {
            if (result.status === "success") {
                _this.toast.showToast("Your call has been submitted");
                _this.validations_form.reset();
            }
        });
    };
    CustRaiseComplaintPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cust-raise-complaint',template:/*ion-inline-start:"/Users/avinash/Apps/complaints_tracker/App/Shubham_App/src/pages/cust-raise-complaint/cust-raise-complaint.html"*/'<!--\n  Generated template for the CustRaiseComplaintPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Raise Complaint</ion-title>\n  </ion-navbar>\n</ion-header>\n\n  <ion-content>\n    <ion-list lines="none">\n      <form [formGroup]="validations_form" (ngSubmit)="onSubmit(validations_form.value)">\n\n        <ion-item>\n          <ion-label floating>Descrption</ion-label>\n          <ion-textarea formControlName="name"></ion-textarea>\n        </ion-item>\n        <div class="validation-errors">\n          <ng-container *ngFor="let validation of validation_messages.name">\n            <div class="error-message"\n              *ngIf="validations_form.get(\'name\').hasError(validation.type) && (validations_form.get(\'name\').dirty || validations_form.get(\'name\').touched)">\n              <ion-icon name="information-circle-outline"></ion-icon> {{ validation.message }}\n            </div>\n          </ng-container>\n        </div>\n        <ion-item>\n          <ion-label>Engg Type</ion-label>\n          <ion-select formControlName="engg_type">\n            <ion-option *ngFor="let mach of typesOfMachin" [value]="mach.key">\n              {{mach.value}}</ion-option>\n          </ion-select>\n        </ion-item>\n        <div class="validation-errors">\n          <ng-container *ngFor="let validation of validation_messages.engg_type">\n            <div class="error-message"\n              *ngIf="validations_form.get(\'engg_type\').hasError(validation.type) && (validations_form.get(\'engg_type\').dirty || validations_form.get(\'engg_type\').touched)">\n              <ion-icon name="information-circle-outline"></ion-icon> {{ validation.message }}\n            </div>\n          </ng-container>\n        </div>\n\n        <ion-item>\n          <ion-label>Problem Starting Date</ion-label>\n          <ion-datetime [max]="maxDate" formControlName="u_Joining_date" display-timezone="utc"></ion-datetime>\n          \n        </ion-item>\n        <div class="validation-errors">\n          <ng-container *ngFor="let validation of validation_messages.u_Joining_date">\n            <div class="error-message"\n              *ngIf="validations_form.get(\'u_Joining_date\').hasError(validation.type) && (validations_form.get(\'u_Joining_date\').dirty || validations_form.get(\'u_Joining_date\').touched)">\n              <ion-icon name="information-circle-outline"></ion-icon> {{ validation.message }}\n            </div>\n          </ng-container>\n        </div>\n\n        <button full color="primary" class="submit-btn" expand="full" type="submit"\n          [disabled]="!validations_form.valid">Submit</button>\n      </form>\n    </ion-list>\n\n</ion-content>'/*ion-inline-end:"/Users/avinash/Apps/complaints_tracker/App/Shubham_App/src/pages/cust-raise-complaint/cust-raise-complaint.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__providers_toast_toast__["a" /* ToastProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], CustRaiseComplaintPage);
    return CustRaiseComplaintPage;
}());

//# sourceMappingURL=cust-raise-complaint.js.map

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustViewComplaintPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_settings__ = __webpack_require__(123);
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
 * Generated class for the CustViewComplaintPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CustViewComplaintPage = /** @class */ (function () {
    function CustViewComplaintPage(_rest, navCtrl, navParams) {
        this._rest = _rest;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.complaintData = [];
    }
    CustViewComplaintPage.prototype.ionViewDidLoad = function () {
        this.initializeItems();
    };
    CustViewComplaintPage.prototype.initializeItems = function () {
        var _this = this;
        this._rest.getAllComplaint().subscribe(function (data) {
            _this.complaintData = data.data.filter(function (el) {
                if (el.c_assignBy === _this.navParams.get("user_id")) {
                    __WEBPACK_IMPORTED_MODULE_3__app_app_settings__["a" /* AppSettings */].status.forEach(function (s_code) {
                        if (parseInt(el.c_status) === parseInt(s_code.id)) {
                            el.c_status = s_code.value;
                        }
                    });
                    return el;
                }
                ;
            });
        });
    };
    CustViewComplaintPage.prototype.getItems = function (ev) {
        // set val to the value of the searchbar
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.complaintData = this.complaintData.filter(function (item) {
                if (parseInt(item.c_id) === parseInt(val)) {
                    return parseInt(item.c_id) === parseInt(val);
                }
            });
        }
        if (val.length === 0) {
            this.initializeItems(); // Reset items back to all of the items
        }
    };
    CustViewComplaintPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cust-view-complaint',template:/*ion-inline-start:"/Users/avinash/Apps/complaints_tracker/App/Shubham_App/src/pages/cust-view-complaint/cust-view-complaint.html"*/'<!--\n  Generated template for the CustViewComplaintPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Previous Complaint</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content >\n  <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n  <b *ngIf="complaintData.length === 0" style="text-align: center;    display: block;font-size: 2em; color:red;">Data not\n    Found</b>\n  <div *ngFor="let c of complaintData">\n    <ion-card>\n      <ion-card-header>\n        <h2><b> {{c.c_id}}</b> </h2>\n      </ion-card-header>\n      <ion-card-content>\n        <ion-row>\n          <ion-col> {{c.c_desc}} </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>Date:</ion-col>\n          <ion-col>{{c.c_date | convertMachinName}}</ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>Status:</ion-col>\n          <ion-col>{{c.c_status}}</ion-col>\n        </ion-row>\n      </ion-card-content>\n    </ion-card>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/avinash/Apps/complaints_tracker/App/Shubham_App/src/pages/cust-view-complaint/cust-view-complaint.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], CustViewComplaintPage);
    return CustViewComplaintPage;
}());

//# sourceMappingURL=cust-view-complaint.js.map

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminViewPreviousPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_settings__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_toast_toast__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__reusable_component_loader_page_loader__ = __webpack_require__(78);
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
 * Generated class for the AdminViewPreviousPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AdminViewPreviousPage = /** @class */ (function () {
    function AdminViewPreviousPage(toast, alertCtrl, rest, navCtrl, navParams) {
        var _this = this;
        this.toast = toast;
        this.alertCtrl = alertCtrl;
        this.rest = rest;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.allcomplaint = [];
        this.complaintArray = [];
        this.openFilter = false;
        this.customPickerOptionFrom = {
            buttons: [{
                    text: 'Clear',
                    handler: function () {
                        _this.data.startDate = "";
                        _this.data.endDate = "";
                    }
                }]
        };
        this.customPickerOptionEndFrom = {
            buttons: [{
                    text: 'Clear',
                    handler: function () {
                        return _this.data.endDate = "";
                    }
                }]
        };
        this.data = {
            startDate: "",
            endDate: "",
            status: "",
            searchBy: "",
            searchByText: ""
        };
        this.maxDate = new Date().toISOString();
        this.status = __WEBPACK_IMPORTED_MODULE_3__app_app_settings__["a" /* AppSettings */].status;
    }
    AdminViewPreviousPage.prototype.ionViewDidLoad = function () {
        this.initializeItems();
        this.totalRecord = this.allcomplaint.length;
    };
    AdminViewPreviousPage.prototype.onCancel = function (ev) {
        console.log(ev);
    };
    AdminViewPreviousPage.prototype.initializeItems = function () {
        var _this = this;
        this.allcomplaint = [];
        this.rest.getAllComplaint().subscribe(function (result) {
            _this.allcomplaint = result.data;
            _this.allcomplaint = _this.allcomplaint.filter(function (ele) {
                __WEBPACK_IMPORTED_MODULE_3__app_app_settings__["a" /* AppSettings */].status.forEach(function (e) {
                    if (parseInt(e.id) === parseInt(ele.c_status)) {
                        ele.c_status = e.value;
                    }
                });
                return ele;
            });
            _this.complaintArray = _this.allcomplaint;
            _this.totalRecord = _this.allcomplaint.length;
        });
    };
    AdminViewPreviousPage.prototype.getItems = function (ev) {
        var _this = this;
        // set val to the value of the searchbar
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            var arr_1 = [];
            this.rest.getAllUsers().subscribe(function (user) {
                arr_1 = user.data.filter(function (el) {
                    if (el.u_name === val || el.u_MachineNo === val) {
                        return el.u_id;
                    }
                });
                if (arr_1) {
                    _this.allcomplaint = _this.allcomplaint.filter(function (item) {
                        for (var i = 0; i < arr_1.length; i++) {
                            if (parseInt(arr_1[i].u_id) === parseInt(item.c_assignTo)) {
                                return parseInt(arr_1[i].u_id) === parseInt(item.c_assignTo);
                            }
                            if (parseInt(arr_1[i].u_id) === parseInt(item.c_assignBy)) {
                                return parseInt(arr_1[i].u_id) === parseInt(item.c_assignBy);
                            }
                        }
                    });
                }
            });
        }
        if (val.length === 0) {
            this.initializeItems(); // Reset items back to all of the items
        }
    };
    AdminViewPreviousPage.prototype.getRealTimeUserData = function (value) {
        this.rest.getAllUsers().subscribe(function (result) {
        });
    };
    AdminViewPreviousPage.prototype.openFilterModal = function () {
        this.openFilter = !this.openFilter;
        if (!this.openFilter) {
            this.initializeItems();
        }
        else
            (this.filterItem(this.data));
    };
    AdminViewPreviousPage.prototype.filterItem = function (data) {
        this.allcomplaint = this.complaintArray.filter(function (item) {
            if ((data.status !== "") && (data.startDate !== "")) {
                return (item.c_status === data.status) && ((new Date(data.startDate) <= new Date(item.c_date)) && (new Date(data.endDate) >= new Date(item.c_date)));
            }
            else if (data.status && data.startDate === "") {
                return (item.c_status === data.status);
            }
            else if ((data.status === "") && (data.startDate !== "")) {
                return (new Date(data.startDate) <= new Date(item.c_date)) && (new Date(data.endDate) >= new Date(item.c_date));
            }
            //}
        });
    };
    AdminViewPreviousPage.prototype.convertToExcel = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Send Excel to mail',
            inputs: [
                {
                    name: 'email',
                    placeholder: 'Enter your email id '
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Login',
                    handler: function (data) {
                        _this.loadPage.showLoader();
                        var payload = {
                            "email": data.email,
                            "data": _this.allcomplaint
                        };
                        _this.rest.sendDataExcel(payload).subscribe(function (result) {
                            console.log(result);
                            if (result.status === "success") {
                                _this.toast.showToast("email sent successfully");
                                _this.loadPage.hideLoader();
                            }
                            else {
                                _this.toast.showToast("Please enter valid email");
                                _this.loadPage.hideLoader();
                            }
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_5__reusable_component_loader_page_loader__["a" /* PageLoader */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5__reusable_component_loader_page_loader__["a" /* PageLoader */])
    ], AdminViewPreviousPage.prototype, "loadPage", void 0);
    AdminViewPreviousPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-admin-view-previous',template:/*ion-inline-start:"/Users/avinash/Apps/complaints_tracker/App/Shubham_App/src/pages/admin-view-previous/admin-view-previous.html"*/'<!--\n  Generated template for the AdminViewPreviousPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<page-loader></page-loader>\n<ion-header>\n  <ion-navbar>\n    <ion-title>View</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="convertToExcel()" >\n          <ion-icon item-right name="download"></ion-icon>\n      </button>\n  </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  \n  <ion-item>\n    <ion-searchbar [showCancelButton]="shouldShowCancel" (ionCancel)="onCancel($event)" (ionInput)="getItems($event)">\n    </ion-searchbar>\n    <ion-badge item-end (click)="openFilterModal()" >\n      <ion-icon name="funnel"></ion-icon>\n    </ion-badge>\n  </ion-item>\n\n  <div *ngIf="openFilter">\n    <ion-list>\n      <ion-item>\n        <ion-label>Start Date</ion-label>\n        <ion-datetime [max]="maxDate" [pickerOptions]="customPickerOptionFrom" [(ngModel)]="data.startDate"\n          display-timezone="utc">X</ion-datetime>\n      </ion-item>\n      <ion-item>\n        <ion-label>End Date</ion-label>\n        <ion-datetime [max]="maxDate" [min]="data.startDate" [pickerOptions]="customPickerOptionEndFrom"\n          [(ngModel)]="data.endDate" display-timezone="utc" (ionChange)="filterItem(data)" [disabled]="data.startDate">\n        </ion-datetime>\n      </ion-item>\n      <ion-item>\n        <ion-label>Status</ion-label>\n        <ion-select [(ngModel)]="data.status" (ionChange)="filterItem(data)">\n          <ion-option *ngFor="let s of status" [value]="s.value">\n            {{s.value}}</ion-option>\n        </ion-select>\n      </ion-item>\n    </ion-list>\n\n    <ion-list>\n      <ion-item *ngIf="data.searchBy" (input)="filterItem(data)">\n        <ion-input value="" [(ngModel)]="data.searchByText" [placeholder]="data.searchBy"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>Showing {{allcomplaint.length}} of {{totalRecord}} entries</ion-label>\n      </ion-item>\n      <ion-item *ngIf="allcomplaint.length === 0">\n        <ion-label>Data not Found</ion-label>\n      </ion-item>\n    </ion-list>\n  </div>\n\n\n  <div *ngFor="let c of allcomplaint">\n    <ion-card>\n      <ion-card-header>\n        <h2><b> {{c.c_id}}</b> </h2>\n      </ion-card-header>\n      <ion-card-content>\n        <ion-row>\n          <ion-col> {{c.c_desc}} </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>Date:</ion-col>\n          <ion-col>{{c.c_date | convertMachinName}}</ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>Status:</ion-col>\n          <ion-col>{{c.c_status}}</ion-col>\n        </ion-row>\n      </ion-card-content>\n    </ion-card>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/avinash/Apps/complaints_tracker/App/Shubham_App/src/pages/admin-view-previous/admin-view-previous.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__providers_toast_toast__["a" /* ToastProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], AdminViewPreviousPage);
    return AdminViewPreviousPage;
}());

//# sourceMappingURL=admin-view-previous.js.map

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__update_customer_modal_update_customer_modal__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_toast_toast__ = __webpack_require__(28);
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
 * Generated class for the CustDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CustDetailsPage = /** @class */ (function () {
    function CustDetailsPage(navCtrl, toast, modalCtrl, service, alertCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.toast = toast;
        this.modalCtrl = modalCtrl;
        this.service = service;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
    }
    CustDetailsPage.prototype.ionViewDidLoad = function () {
        this.getUserDeatils();
    };
    CustDetailsPage.prototype.getUserDeatils = function () {
        var _this = this;
        this.userDetail = [];
        this.service.getAllUsers().subscribe(function (data) {
            _this.userDetail = data.data.filter(function (el) {
                return el.u_role === 1;
            });
        });
    };
    CustDetailsPage.prototype.filterList = function (event) {
        var searchterm = event.value;
        if (!searchterm) {
            this.getUserDeatils();
            return;
        }
        if (searchterm.length >= 1) {
            this.userDetail = this.userDetail.filter(function (value) {
                if (value.u_name && searchterm) {
                    if (value.u_name.toLowerCase().indexOf(searchterm.toLowerCase()) > -1) {
                        return true;
                    }
                    else {
                        return false;
                    }
                }
            });
        }
    };
    CustDetailsPage.prototype.updateUser = function (uId) {
        var _this = this;
        var updateModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__update_customer_modal_update_customer_modal__["a" /* UpdateCustomerModalPage */], { userId: uId });
        updateModal.onDidDismiss(function (data) {
            _this.getUserDeatils();
        });
        updateModal.present();
    };
    CustDetailsPage.prototype.delete = function (data) {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: "Alert",
            message: "Are you sure you want to delete?",
            buttons: [
                {
                    text: 'No',
                    handler: function () {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: 'Yes',
                    handler: function () {
                        var payload = {
                            "u_id": data.u_id
                        };
                        _this.service.deleteUserByID(payload).subscribe(function (result) {
                            if (result.status === "success") {
                                _this.toast.showToast("Record has been successfully deleted!");
                                _this.getUserDeatils();
                            }
                            else {
                                _this.toast.showToast("Cannot delete");
                            }
                        });
                        console.log('Agree clicked');
                    }
                }
            ]
        });
        confirm.present();
    };
    CustDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cust-details',template:/*ion-inline-start:"/Users/avinash/Apps/complaints_tracker/App/Shubham_App/src/pages/cust-details/cust-details.html"*/'<!--\n  Generated template for the CustDetailsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Customer Details</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-searchbar  (ionChange)="filterList($event)"></ion-searchbar>\n  <div *ngFor="let d of userDetail">\n  <ion-card>\n    <ion-card-header>\n     <span><b> {{d.u_name}}</b> </span>\n     <ion-icon style="float: right;" (click)="delete(d)" name="trash"></ion-icon>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-row>\n        <ion-col>Email</ion-col>\n        <ion-col>{{d.u_email}}</ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>Address</ion-col>\n        <ion-col>{{d.u_address}}</ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>Password</ion-col>\n        <ion-col>{{d.u_password}}</ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>Machine Purchased</ion-col>\n        <ion-col>{{d.u_MachinePurchased}}</ion-col>\n      </ion-row>\n      <ion-row>\n        <button full ion-button float="right" expand="full" (click)="updateUser(d.u_id)">Update</button>\n      </ion-row>\n      \n    </ion-card-content>\n  </ion-card>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/avinash/Apps/complaints_tracker/App/Shubham_App/src/pages/cust-details/cust-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_toast_toast__["a" /* ToastProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], CustDetailsPage);
    return CustDetailsPage;
}());

//# sourceMappingURL=cust-details.js.map

/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnggDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__update_customer_modal_update_customer_modal__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_toast_toast__ = __webpack_require__(28);
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
 * Generated class for the EnggDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EnggDetailsPage = /** @class */ (function () {
    function EnggDetailsPage(navCtrl, toast, modalCtrl, service, alertCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.toast = toast;
        this.modalCtrl = modalCtrl;
        this.service = service;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
    }
    EnggDetailsPage.prototype.ionViewDidLoad = function () {
        this.getUserDeatils();
    };
    EnggDetailsPage.prototype.getUserDeatils = function () {
        var _this = this;
        this.userDetail = [];
        this.service.getAllUsers().subscribe(function (data) {
            _this.userDetail = data.data.filter(function (el) {
                return el.u_role === 3;
            });
        });
    };
    EnggDetailsPage.prototype.filterList = function (event) {
        var searchterm = event.value;
        if (!searchterm) {
            this.getUserDeatils();
            return;
        }
        if (searchterm.length >= 1) {
            this.userDetail = this.userDetail.filter(function (value) {
                if (value.u_name && searchterm) {
                    if (value.u_name.toLowerCase().indexOf(searchterm.toLowerCase()) > -1) {
                        return true;
                    }
                    else {
                        return false;
                    }
                }
            });
        }
    };
    EnggDetailsPage.prototype.updateUser = function (uId) {
        var _this = this;
        var updateModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__update_customer_modal_update_customer_modal__["a" /* UpdateCustomerModalPage */], { userId: uId });
        updateModal.onDidDismiss(function (data) {
            _this.getUserDeatils();
        });
        updateModal.present();
    };
    EnggDetailsPage.prototype.delete = function (data) {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: "Alert",
            message: "Are you sure you want to delete?",
            buttons: [
                {
                    text: 'No',
                    handler: function () {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: 'Yes',
                    handler: function () {
                        var payload = {
                            "u_id": data.u_id
                        };
                        _this.service.deleteUserByID(payload).subscribe(function (result) {
                            if (result.status === "success") {
                                _this.toast.showToast("Record has been successfully deleted!");
                                _this.getUserDeatils();
                            }
                            else {
                                _this.toast.showToast(" Cannot delete !");
                            }
                        });
                        console.log('Agree clicked');
                    }
                }
            ]
        });
        confirm.present();
    };
    EnggDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-engg-details',template:/*ion-inline-start:"/Users/avinash/Apps/complaints_tracker/App/Shubham_App/src/pages/engg-details/engg-details.html"*/'<!--\n  Generated template for the CustDetailsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Engineer Details</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-searchbar  (ionChange)="filterList($event)"></ion-searchbar>\n  <div *ngFor="let d of userDetail">\n  <ion-card>\n    <ion-card-header>\n     <span><b> {{d.u_name}}</b> </span>\n     <ion-icon style="float: right;" (click)="delete(d)" name="trash"></ion-icon>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-row>\n        <ion-col>Email</ion-col>\n        <ion-col>{{d.u_email}}</ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>Address</ion-col>\n        <ion-col>{{d.u_address}}</ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>Password</ion-col>\n        <ion-col>{{d.u_password}}</ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>Machine Purchased</ion-col>\n        <ion-col>{{d.u_MachinePurchased}}</ion-col>\n      </ion-row>\n      <ion-row>\n        <button full ion-button float="right" expand="full" (click)="updateUser(d.u_id)">Update</button>\n      </ion-row>\n      \n    </ion-card-content>\n  </ion-card>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/avinash/Apps/complaints_tracker/App/Shubham_App/src/pages/engg-details/engg-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_toast_toast__["a" /* ToastProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], EnggDetailsPage);
    return EnggDetailsPage;
}());

//# sourceMappingURL=engg-details.js.map

/***/ }),

/***/ 184:
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
webpackEmptyAsyncContext.id = 184;

/***/ }),

/***/ 20:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_settings__ = __webpack_require__(123);
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
    RestProvider.prototype.isCustomer = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__app_app_settings__["a" /* AppSettings */].baseUrl + 'users/getAllCustomer');
    };
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
    RestProvider.prototype.getCustomerDetails = function (id) {
        var data = {
            "u_id": id
        };
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__app_app_settings__["a" /* AppSettings */].baseUrl + 'users/getAll', data);
    };
    RestProvider.prototype.assignComplaint = function (data) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__app_app_settings__["a" /* AppSettings */].baseUrl + 'complaint/assignComplaint', data);
    };
    RestProvider.prototype.updateComplaint = function (updatedate) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__app_app_settings__["a" /* AppSettings */].baseUrl + 'complaint/updateComplaint', updatedate);
    };
    RestProvider.prototype.createCustomer = function (userData) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__app_app_settings__["a" /* AppSettings */].baseUrl + 'users/createUser', userData);
    };
    RestProvider.prototype.getMachineType = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__app_app_settings__["a" /* AppSettings */].baseUrl + 'complaint/getMachineType');
    };
    RestProvider.prototype.getAllUsers = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__app_app_settings__["a" /* AppSettings */].baseUrl + 'users/getAllCustomer');
    };
    RestProvider.prototype.createComplaint = function (data) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__app_app_settings__["a" /* AppSettings */].baseUrl + 'complaint/newComplaint', data);
    };
    RestProvider.prototype.getUserByID = function (uId) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__app_app_settings__["a" /* AppSettings */].baseUrl + 'users/getUserById', uId);
    };
    RestProvider.prototype.updateUserByID = function (data) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__app_app_settings__["a" /* AppSettings */].baseUrl + 'users/updateUserById', data);
    };
    RestProvider.prototype.deleteUserByID = function (data) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__app_app_settings__["a" /* AppSettings */].baseUrl + 'users/deleteUserById', data);
    };
    RestProvider.prototype.sendDataExcel = function (data) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__app_app_settings__["a" /* AppSettings */].baseUrl + 'users/excelToMail', data);
    };
    RestProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], RestProvider);
    return RestProvider;
}());

//# sourceMappingURL=rest.js.map

/***/ }),

/***/ 228:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/admin-assign-engg/admin-assign-engg.module": [
		704,
		16
	],
	"../pages/admin-create-customer/admin-create-customer.module": [
		705,
		15
	],
	"../pages/admin-create-engg/admin-create-engg.module": [
		706,
		14
	],
	"../pages/admin-dashboard/admin-dashboard.module": [
		707,
		13
	],
	"../pages/admin-view-previous/admin-view-previous.module": [
		708,
		12
	],
	"../pages/assign-engg-modal/assign-engg-modal.module": [
		709,
		11
	],
	"../pages/common-cart/common-cart.module": [
		710,
		0
	],
	"../pages/cust-dashboard/cust-dashboard.module": [
		711,
		10
	],
	"../pages/cust-details/cust-details.module": [
		712,
		9
	],
	"../pages/cust-raise-complaint/cust-raise-complaint.module": [
		713,
		8
	],
	"../pages/cust-view-complaint/cust-view-complaint.module": [
		714,
		7
	],
	"../pages/engg-accept-complaint/engg-accept-complaint.module": [
		715,
		6
	],
	"../pages/engg-dashboard/engg-dashboard.module": [
		716,
		5
	],
	"../pages/engg-details/engg-details.module": [
		717,
		4
	],
	"../pages/engg-view-complaint/engg-view-complaint.module": [
		718,
		3
	],
	"../pages/engg-view-previous/engg-view-previous.module": [
		719,
		2
	],
	"../pages/update-customer-modal/update-customer-modal.module": [
		720,
		1
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
webpackAsyncContext.id = 228;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToastProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* ToastController */]])
    ], ToastProvider);
    return ToastProvider;
}());

//# sourceMappingURL=toast.js.map

/***/ }),

/***/ 325:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoaderProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
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
        this.loading = this.loadingController.create({
            content: 'Please Wait....',
            duration: 3000
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* LoadingController */]])
    ], LoaderProvider);
    return LoaderProvider;
}());

//# sourceMappingURL=loader.js.map

/***/ }),

/***/ 368:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(373);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 373:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_email_composer__ = __webpack_require__(695);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_transfer__ = __webpack_require__(696);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_file__ = __webpack_require__(697);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(698);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_home_home__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_engg_dashboard_engg_dashboard__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_rest_rest__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_engg_view_complaint_engg_view_complaint__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_engg_accept_complaint_engg_accept_complaint__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_engg_view_previous_engg_view_previous__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_admin_dashboard_admin_dashboard__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_admin_create_customer_admin_create_customer__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_admin_create_engg_admin_create_engg__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_admin_assign_engg_admin_assign_engg__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_admin_view_previous_admin_view_previous__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_cust_dashboard_cust_dashboard__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_cust_raise_complaint_cust_raise_complaint__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_cust_view_complaint_cust_view_complaint__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__swimlane_ngx_datatable__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_cust_details_cust_details__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_engg_details_engg_details__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_assign_engg_modal_assign_engg_modal__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_update_customer_modal_update_customer_modal__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__angular_common_http__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__providers_loader_loader__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__providers_toast_toast__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__reusable_component_header_header_component__ = __webpack_require__(699);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__reusable_component_loader_page_loader__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__components_tab_tab__ = __webpack_require__(700);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__components_components_show_password_components_show_password__ = __webpack_require__(701);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pipes_convert_machin_name_convert_machin_name__ = __webpack_require__(702);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__directives_directives_show_password_directives_show_password__ = __webpack_require__(703);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


























//Modal


//http call



//Reusable Component




//pipe

//Directives

var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_25__pages_engg_details_engg_details__["a" /* EnggDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_cust_details_cust_details__["a" /* CustDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_35__pipes_convert_machin_name_convert_machin_name__["a" /* ConvertMachinNamePipe */],
                __WEBPACK_IMPORTED_MODULE_34__components_components_show_password_components_show_password__["a" /* ComponentsShowPasswordComponent */],
                __WEBPACK_IMPORTED_MODULE_36__directives_directives_show_password_directives_show_password__["a" /* DirectivesShowPasswordDirective */],
                __WEBPACK_IMPORTED_MODULE_33__components_tab_tab__["a" /* TabComponent */],
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_engg_dashboard_engg_dashboard__["a" /* EnggDashboardPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_engg_view_complaint_engg_view_complaint__["a" /* EnggViewComplaintPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_engg_accept_complaint_engg_accept_complaint__["a" /* EnggAcceptComplaintPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_engg_view_previous_engg_view_previous__["a" /* EnggViewPreviousPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_admin_dashboard_admin_dashboard__["a" /* AdminDashboardPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_admin_create_engg_admin_create_engg__["a" /* AdminCreateEnggPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_admin_create_customer_admin_create_customer__["a" /* AdminCreateCustomerPage */],
                __WEBPACK_IMPORTED_MODULE_32__reusable_component_loader_page_loader__["a" /* PageLoader */],
                __WEBPACK_IMPORTED_MODULE_18__pages_admin_assign_engg_admin_assign_engg__["a" /* AdminAssignEnggPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_admin_view_previous_admin_view_previous__["a" /* AdminViewPreviousPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_cust_dashboard_cust_dashboard__["a" /* CustDashboardPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_cust_view_complaint_cust_view_complaint__["a" /* CustViewComplaintPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_cust_raise_complaint_cust_raise_complaint__["a" /* CustRaiseComplaintPage */],
                __WEBPACK_IMPORTED_MODULE_31__reusable_component_header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_26__pages_assign_engg_modal_assign_engg_modal__["a" /* AssignEnggModalPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_update_customer_modal_update_customer_modal__["a" /* UpdateCustomerModalPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/admin-assign-engg/admin-assign-engg.module#AdminAssignEnggPageModule', name: 'AdminAssignEnggPage', segment: 'admin-assign-engg', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/admin-create-customer/admin-create-customer.module#AdminCreateCustomerPageModule', name: 'AdminCreateCustomerPage', segment: 'admin-create-customer', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/admin-create-engg/admin-create-engg.module#AdminCreateEnggPageModule', name: 'AdminCreateEnggPage', segment: 'admin-create-engg', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/admin-dashboard/admin-dashboard.module#AdminDashboardPageModule', name: 'AdminDashboardPage', segment: 'admin-dashboard', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/admin-view-previous/admin-view-previous.module#AdminViewPreviousPageModule', name: 'AdminViewPreviousPage', segment: 'admin-view-previous', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/assign-engg-modal/assign-engg-modal.module#AssignEnggModalPageModule', name: 'AssignEnggModalPage', segment: 'assign-engg-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/common-cart/common-cart.module#CommonCartPageModule', name: 'CommonCartPage', segment: 'common-cart', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cust-dashboard/cust-dashboard.module#CustDashboardPageModule', name: 'CustDashboardPage', segment: 'cust-dashboard', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cust-details/cust-details.module#CustDetailsPageModule', name: 'CustDetailsPage', segment: 'cust-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cust-raise-complaint/cust-raise-complaint.module#CustRaiseComplaintPageModule', name: 'CustRaiseComplaintPage', segment: 'cust-raise-complaint', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cust-view-complaint/cust-view-complaint.module#CustViewComplaintPageModule', name: 'CustViewComplaintPage', segment: 'cust-view-complaint', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/engg-accept-complaint/engg-accept-complaint.module#EnggAcceptComplaintPageModule', name: 'EnggAcceptComplaintPage', segment: 'engg-accept-complaint', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/engg-dashboard/engg-dashboard.module#EnggDashboardPageModule', name: 'EnggDashboardPage', segment: 'engg-dashboard', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/engg-details/engg-details.module#EnggDetailsPageModule', name: 'EnggDetailsPage', segment: 'engg-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/engg-view-complaint/engg-view-complaint.module#EnggViewComplaintPageModule', name: 'EnggViewComplaintPage', segment: 'engg-view-complaint', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/engg-view-previous/engg-view-previous.module#EnggViewPreviousPageModule', name: 'EnggViewPreviousPage', segment: 'engg-view-previous', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/update-customer-modal/update-customer-modal.module#UpdateCustomerModalPageModule', name: 'UpdateCustomerModalPage', segment: 'update-customer-modal', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_28__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_23__swimlane_ngx_datatable__["b" /* NgxDatatableModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_assign_engg_modal_assign_engg_modal__["a" /* AssignEnggModalPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_engg_dashboard_engg_dashboard__["a" /* EnggDashboardPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_cust_details_cust_details__["a" /* CustDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_engg_details_engg_details__["a" /* EnggDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_engg_view_complaint_engg_view_complaint__["a" /* EnggViewComplaintPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_engg_accept_complaint_engg_accept_complaint__["a" /* EnggAcceptComplaintPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_engg_view_previous_engg_view_previous__["a" /* EnggViewPreviousPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_admin_dashboard_admin_dashboard__["a" /* AdminDashboardPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_admin_create_engg_admin_create_engg__["a" /* AdminCreateEnggPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_admin_create_customer_admin_create_customer__["a" /* AdminCreateCustomerPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_admin_assign_engg_admin_assign_engg__["a" /* AdminAssignEnggPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_admin_view_previous_admin_view_previous__["a" /* AdminViewPreviousPage */],
                __WEBPACK_IMPORTED_MODULE_32__reusable_component_loader_page_loader__["a" /* PageLoader */],
                __WEBPACK_IMPORTED_MODULE_20__pages_cust_dashboard_cust_dashboard__["a" /* CustDashboardPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_cust_view_complaint_cust_view_complaint__["a" /* CustViewComplaintPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_cust_raise_complaint_cust_raise_complaint__["a" /* CustRaiseComplaintPage */],
                __WEBPACK_IMPORTED_MODULE_31__reusable_component_header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_27__pages_update_customer_modal_update_customer_modal__["a" /* UpdateCustomerModalPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_transfer__["a" /* FileTransfer */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_transfer__["b" /* FileTransferObject */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_email_composer__["a" /* EmailComposer */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_11__providers_rest_rest__["a" /* RestProvider */],
                __WEBPACK_IMPORTED_MODULE_29__providers_loader_loader__["a" /* LoaderProvider */],
                __WEBPACK_IMPORTED_MODULE_30__providers_toast_toast__["a" /* ToastProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__engg_dashboard_engg_dashboard__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_loader_loader__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_toast_toast__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__admin_dashboard_admin_dashboard__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__reusable_component_loader_page_loader__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__cust_dashboard_cust_dashboard__ = __webpack_require__(168);
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
    function HomePage(navCtrl, formBuilder, toast, loader, rest) {
        this.navCtrl = navCtrl;
        this.formBuilder = formBuilder;
        this.toast = toast;
        this.loader = loader;
        this.rest = rest;
        this.eyeName = "eye";
        this.password_type = 'password';
        this.validation_messages = {
            'email': [
                { type: 'required', message: 'Email is required.' },
                { type: 'pattern', message: 'Please enter a valid email.' }
            ],
            'password': [
                { type: 'maxLength', message: 'Password length should be grater than 5!' },
                { type: 'required', message: 'Password is required.' }
            ],
        };
    }
    HomePage.prototype.changePaswordType = function () {
        this.eyeName = this.eyeName === "eye" ? "eye-off" : "eye";
        this.password_type = this.password_type === 'text' ? 'password' : 'text';
    };
    HomePage.prototype.ngOnInit = function () {
        this.validations_form = this.formBuilder.group({
            password: new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* FormControl */]("", [__WEBPACK_IMPORTED_MODULE_7__angular_forms__["h" /* Validators */].minLength(3), __WEBPACK_IMPORTED_MODULE_7__angular_forms__["h" /* Validators */].required]),
            email: new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_7__angular_forms__["h" /* Validators */].compose([
                __WEBPACK_IMPORTED_MODULE_7__angular_forms__["h" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_7__angular_forms__["h" /* Validators */].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
            ]))
        });
    };
    HomePage.prototype.login = function (value) {
        var _this = this;
        this.loadPage.showLoader();
        this.rest.userLogin(value.email, value.password).subscribe(function (data) {
            _this.loadPage.hideLoader();
            if (data.status === "success" && data.data.u_role === 3) {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__engg_dashboard_engg_dashboard__["a" /* EnggDashboardPage */], { user_id: data.data.u_id });
            }
            if (data.status === "success" && data.data.u_role === 2) {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__admin_dashboard_admin_dashboard__["a" /* AdminDashboardPage */], { user_id: data.data.u_id });
            }
            if (data.status === "success" && data.data.u_role === 1) {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__cust_dashboard_cust_dashboard__["a" /* CustDashboardPage */], { user_id: data.data.u_id });
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
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_8__reusable_component_loader_page_loader__["a" /* PageLoader */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_8__reusable_component_loader_page_loader__["a" /* PageLoader */])
    ], HomePage.prototype, "loadPage", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/avinash/Apps/complaints_tracker/App/Shubham_App/src/pages/home/home.html"*/'<ion-content >\n  <page-loader></page-loader>\n  <form class="loginScreen" [formGroup]="validations_form"   (ngSubmit)="login(validations_form.value)" >\n      <ion-grid>\n        <ion-row color="primary" justify-content-center>\n          <ion-col align-self-center size-md="6" size-lg="5" size-xs="12">\n            <div text-center>\n              <h3>login</h3>\n            </div>\n            <div padding>\n\n              <ion-item>\n                <ion-input  type="email" placeholder="your@email.com" formControlName="email"></ion-input>\n              </ion-item>\n              <div class="validation-errors">\n                <ng-container *ngFor="let validation of validation_messages.email">\n                  <div class="error-message"\n                    *ngIf="validations_form.get(\'email\').hasError(validation.type) && (validations_form.get(\'email\').dirty || validations_form.get(\'email\').touched)">\n                    <ion-icon name="information-circle-outline"></ion-icon> {{ validation.message }}\n                  </div>\n                </ng-container>\n              </div>\n              <ion-item>\n                <ion-input  [type]="password_type" placeholder="Password" formControlName="password" ></ion-input>\n      \n                <button ion-button clear color="dark" type="button" item-right (click)="changePaswordType()"> <ion-icon [name]="eyeName"> </ion-icon> </button>\n             \n              </ion-item>\n              <div class="validation-errors">\n                  <ng-container *ngFor="let validation of validation_messages.password">\n                    <div class="error-message"\n                      *ngIf="validations_form.get(\'password\').hasError(validation.type) && (validations_form.get(\'password\').dirty || validations_form.get(\'password\').touched)">\n                      <ion-icon name="information-circle-outline"></ion-icon> {{ validation.message }}\n                    </div>\n                  </ng-container>\n                </div>\n            </div>\n            <div padding>\n                <button full color="primary" class="submit-btn" expand="full" type="submit"\n                [disabled]="!validations_form.valid">Submit</button>\n                    \n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </form>\n</ion-content>\n'/*ion-inline-end:"/Users/avinash/Apps/complaints_tracker/App/Shubham_App/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_7__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_5__providers_toast_toast__["a" /* ToastProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_loader_loader__["a" /* LoaderProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__["a" /* RestProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 698:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(65);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 699:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(alertCtrl) {
        this.alertCtrl = alertCtrl;
        this.onClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    HeaderComponent.prototype.onClickButton = function (event) {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Log out',
            message: 'Are you sure you want to log out?',
            buttons: [
                {
                    text: 'No',
                    handler: function () {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: 'Yes',
                    handler: function () {
                        _this.onClick.emit(event);
                    }
                }
            ]
        });
        confirm.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], HeaderComponent.prototype, "label", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", Object)
    ], HeaderComponent.prototype, "onClick", void 0);
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'header-component',template:/*ion-inline-start:"/Users/avinash/Apps/complaints_tracker/App/Shubham_App/src/reusable_component/header/header_component.html"*/'<ion-header>\n    <ion-navbar hideBackButton>\n        <ion-title>\n             {{label}} \n        </ion-title>\n        <ion-buttons right>\n            <button ion-button icon-only (click)="onClickButton($event)">\n                <ion-icon ios="ios-log-out" md="md-log-out"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>'/*ion-inline-end:"/Users/avinash/Apps/complaints_tracker/App/Shubham_App/src/reusable_component/header/header_component.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], HeaderComponent);
    return HeaderComponent;
}());

//# sourceMappingURL=header_component.js.map

/***/ }),

/***/ 700:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
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
 * Generated class for the TabComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var TabComponent = /** @class */ (function () {
    function TabComponent() {
        this.onChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.onChange1 = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        console.log('Hello TabComponent Component');
        this.text = 'Hello World';
    }
    TabComponent.prototype.handleChange = function (event) {
        this.onChange.emit('');
    };
    TabComponent.prototype.handleChange1 = function (event) {
        this.onChange1.emit('');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], TabComponent.prototype, "imgSrc1", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], TabComponent.prototype, "imgSrc2", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], TabComponent.prototype, "title", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], TabComponent.prototype, "title1", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", Object)
    ], TabComponent.prototype, "onChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", Object)
    ], TabComponent.prototype, "onChange1", void 0);
    TabComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'tab',template:/*ion-inline-start:"/Users/avinash/Apps/complaints_tracker/App/Shubham_App/src/components/tab/tab.html"*/'<ion-row class="firstContainer">\n  <ion-col class="createCustomer" *ngIf="imgSrc1" (click)="handleChange($event)">\n    <img [src]="imgSrc1">\n    {{title}}\n  </ion-col> \n  <ion-col class="createEngg" *ngIf="imgSrc2" (click)="handleChange1($event)">\n    <img [src]="imgSrc2">\n    {{title1}}\n  </ion-col>\n</ion-row>\n\n\n<!-- (click)="createComplaint()" (click)="createEngg()" -->'/*ion-inline-end:"/Users/avinash/Apps/complaints_tracker/App/Shubham_App/src/components/tab/tab.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabComponent);
    return TabComponent;
}());

//# sourceMappingURL=tab.js.map

/***/ }),

/***/ 701:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsShowPasswordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
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
 * Generated class for the ComponentsShowPasswordComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var ComponentsShowPasswordComponent = /** @class */ (function () {
    function ComponentsShowPasswordComponent() {
        this.password_type = 'password';
        this.inline = false;
        console.log('Hello ComponentsShowPasswordComponent Component');
        this.text = 'Hello World';
    }
    ComponentsShowPasswordComponent.prototype.changeShow = function () {
        this.password_type = this.password_type === 'text' ? "password" : "text";
    };
    ComponentsShowPasswordComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'show-password',template:/*ion-inline-start:"/Users/avinash/Apps/complaints_tracker/App/Shubham_App/src/components/components-show-password/components-show-password.html"*/'<ion-item *ngIf="inline">\n<ion-input  [type]="password_type" placeholder="Password"  ></ion-input>\n<ion-icon name="eye" item-right  (click)="changeShow()"></ion-icon>\n</ion-item>'/*ion-inline-end:"/Users/avinash/Apps/complaints_tracker/App/Shubham_App/src/components/components-show-password/components-show-password.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], ComponentsShowPasswordComponent);
    return ComponentsShowPasswordComponent;
}());

//# sourceMappingURL=components-show-password.js.map

/***/ }),

/***/ 702:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConvertMachinNamePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_rest_rest__ = __webpack_require__(20);
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
 * Generated class for the ConvertMachinNamePipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var ConvertMachinNamePipe = /** @class */ (function () {
    /**
     * Takes a value and makes it lowercase.
     */
    function ConvertMachinNamePipe(rest) {
        this.rest = rest;
    }
    ConvertMachinNamePipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return this.getDate(value);
    };
    ConvertMachinNamePipe.prototype.getDate = function (val) {
        var d = new Date(val);
        return d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate();
    };
    ConvertMachinNamePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'convertMachinName',
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_rest_rest__["a" /* RestProvider */]])
    ], ConvertMachinNamePipe);
    return ConvertMachinNamePipe;
}());

//# sourceMappingURL=convert-machin-name.js.map

/***/ }),

/***/ 703:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DirectivesShowPasswordDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
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
 * Generated class for the DirectivesShowPasswordDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
var DirectivesShowPasswordDirective = /** @class */ (function () {
    function DirectivesShowPasswordDirective(el) {
        this.el = el;
        this.type = 'password';
        console.log('Hello DirectivesShowPasswordDirective Directive');
    }
    DirectivesShowPasswordDirective.prototype.changeType = function (type) {
        this.type = type;
        this.el.nativeElement.children[0].type = this.type; // change type for input inside the ion-input
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* HostBinding */])(),
        __metadata("design:type", String)
    ], DirectivesShowPasswordDirective.prototype, "type", void 0);
    DirectivesShowPasswordDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: '[show-password]' // Attribute selector
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]])
    ], DirectivesShowPasswordDirective);
    return DirectivesShowPasswordDirective;
}());

//# sourceMappingURL=directives-show-password.js.map

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageLoader; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageLoader = /** @class */ (function () {
    function PageLoader() {
        this.isBusy = false;
    }
    PageLoader.prototype.showLoader = function () {
        this.isBusy = true;
    };
    PageLoader.prototype.hideLoader = function () {
        this.isBusy = false;
    };
    PageLoader = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-loader',template:/*ion-inline-start:"/Users/avinash/Apps/complaints_tracker/App/Shubham_App/src/reusable_component/loader/page_loader.html"*/'<div class="loadContainer" *ngIf="isBusy" > \n        <div class="backdrop"></div>\n        <ion-spinner></ion-spinner>\n    </div>'/*ion-inline-end:"/Users/avinash/Apps/complaints_tracker/App/Shubham_App/src/reusable_component/loader/page_loader.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], PageLoader);
    return PageLoader;
}());

//# sourceMappingURL=page_loader.js.map

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdateCustomerModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_toast_toast__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_mock_data__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__validators_password_validator__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__(22);
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
 * Generated class for the UpdateCustomerModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UpdateCustomerModalPage = /** @class */ (function () {
    function UpdateCustomerModalPage(navCtrl, viewCtrl, toast, formBuilder, rest, navParams) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.toast = toast;
        this.formBuilder = formBuilder;
        this.rest = rest;
        this.navParams = navParams;
        this.passwordEye = "eye";
        this.cPassEye = "eye";
        this.form = [
            { key: "new", val: 'New', isChecked: true },
            { key: "reCondition", val: 'Re Conditioned', isChecked: false }
        ];
        this.password_type = "password";
        this.cpassword_type = "password";
        this.validation_messages = __WEBPACK_IMPORTED_MODULE_4__app_mock_data__["a" /* MockData */].adminCreateCustomerValidationMessage;
        this.maxDate = new Date().toISOString();
    }
    UpdateCustomerModalPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var data = {
            "u_id": this.navParams.get('userId')
        };
        this.rest.getUserByID(data).subscribe(function (result) {
            _this.validations_form.patchValue({
                name: result.data[0].u_name,
                phone: result.data[0].u_mobile,
                alter: result.data[0].u_altermobile,
                email: result.data[0].u_email,
            });
            _this.current_pass = result.data[0].u_password;
        });
    };
    UpdateCustomerModalPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss({ status: "dismiss" });
    };
    UpdateCustomerModalPage.prototype.changePaswordType = function () {
        this.passwordEye = this.passwordEye === "eye" ? "eye-off" : "eye";
        this.password_type = this.password_type === "text" ? "password" : "text";
    };
    UpdateCustomerModalPage.prototype.changecPaswordType = function () {
        this.cPassEye = this.cPassEye === "eye" ? "eye-off" : "eye";
        this.cpassword_type = this.cpassword_type === "text" ? "password" : "text";
    };
    UpdateCustomerModalPage.prototype.ngOnInit = function () {
        this.matching_passwords_group = new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["c" /* FormGroup */]({
            u_password: new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_6__angular_forms__["h" /* Validators */].compose([
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["h" /* Validators */].minLength(5),
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["h" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["h" /* Validators */].pattern('')
            ])),
            u_cpassword: new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_6__angular_forms__["h" /* Validators */].required)
        }, function (formGroup) {
            return __WEBPACK_IMPORTED_MODULE_5__validators_password_validator__["a" /* PasswordValidator */].areEqual(formGroup);
        });
        this.validations_form = this.formBuilder.group({
            // u_dateOf_Purchased: new FormControl('', Validators.required),
            // purchase_condation: new FormControl(''),
            // address: new FormControl(""),
            // u_MachinePurchased: new FormControl('', Validators.required),
            alter: new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["b" /* FormControl */]("", [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["h" /* Validators */].minLength(10), __WEBPACK_IMPORTED_MODULE_6__angular_forms__["h" /* Validators */].maxLength(10), __WEBPACK_IMPORTED_MODULE_6__angular_forms__["h" /* Validators */].pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
            name: new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_6__angular_forms__["h" /* Validators */].required),
            // u_note: new FormControl(''),
            // service_period:new FormControl('',Validators.required),
            // warrenty_period:new FormControl('',Validators.required),
            // Machine_No:new FormControl('', Validators.required),
            email: new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_6__angular_forms__["h" /* Validators */].compose([
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["h" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["h" /* Validators */].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
            ])),
            matching_passwords: this.matching_passwords_group,
            phone: new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["h" /* Validators */].minLength(10), __WEBPACK_IMPORTED_MODULE_6__angular_forms__["h" /* Validators */].maxLength(10), __WEBPACK_IMPORTED_MODULE_6__angular_forms__["h" /* Validators */].pattern("^((\\+91-?)|0)?[0-9]{10}$")])
        });
    };
    UpdateCustomerModalPage.prototype.onSubmit = function (formValue) {
        var _this = this;
        var payload = {
            "u_mobile": formValue.phone,
            "u_password": formValue.matching_passwords.u_password,
            "u_cpassword": formValue.matching_passwords.u_cpassword,
            "u_name": formValue.name,
            "u_id": this.navParams.get('userId'),
            "u_altermobile": formValue.alter
        };
        this.rest.updateUserByID(payload).subscribe(function (result) {
            if (result.status === "success") {
                _this.toast.showToast("Record updated successfully!");
            }
        });
    };
    UpdateCustomerModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-update-customer-modal',template:/*ion-inline-start:"/Users/avinash/Apps/complaints_tracker/App/Shubham_App/src/pages/update-customer-modal/update-customer-modal.html"*/'<!--\n  Generated template for the UpdateCustomerModalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Update User</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="closeModal()">\n          <ion-icon item-right name="ios-close-outline"></ion-icon>\n      </button>\n  </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-list lines="none">\n    <form [formGroup]="validations_form" (ngSubmit)="onSubmit(validations_form.value)">\n\n      <ion-item>\n        <ion-label floating>Customer Name<span style="color:red">*</span></ion-label>\n        <ion-input type="text" formControlName="name" ></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>Mobile Number<span style="color:red">*</span></ion-label>\n        <ion-input type="text" formControlName="phone"></ion-input>\n      </ion-item>\n      <div class="validation-errors">\n        <ng-container *ngFor="let validation of validation_messages.phone">\n          <div class="error-message"\n            *ngIf="validations_form.get(\'phone\').hasError(validation.type) && (validations_form.get(\'phone\').dirty || validations_form.get(\'phone\').touched)">\n            <ion-icon name="information-circle-outline"></ion-icon> {{ validation.message }}\n          </div>\n        </ng-container>\n      </div>\n\n\n      <ion-item>\n        <ion-label floating>Alternative Contact number</ion-label>\n        <ion-input type="text" formControlName="alter"></ion-input>\n      </ion-item>\n      <div class="validation-errors">\n        <ng-container *ngFor="let validation of validation_messages.alter">\n          <div class="error-message"\n            *ngIf="validations_form.get(\'alter\').hasError(validation.type) && (validations_form.get(\'alter\').dirty || validations_form.get(\'alter\').touched)">\n            <ion-icon name="information-circle-outline"></ion-icon> {{ validation.message }}\n          </div>\n        </ng-container>\n      </div>\n\n\n      <ion-item>\n        <ion-label floating>Email<span style="color:red">*</span></ion-label>\n        <ion-input type="email" formControlName="email" disabled></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>Current Password</ion-label>\n        <ion-input type="text" value="{{current_pass}}" disabled></ion-input>\n      </ion-item>\n\n<!-- \n      <ion-item>\n        <ion-label floating>Address<span style="color:red">*</span></ion-label>\n        <ion-textarea formControlName="address"></ion-textarea>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Machine purchased<span style="color:red">*</span></ion-label>\n        <ion-select formControlName="u_MachinePurchased">\n          <ion-option *ngFor="let mach of typesOfMachin" [value]="mach">\n            {{mach}}</ion-option>\n        </ion-select>\n      </ion-item>\n      <div class="validation-errors">\n        <ng-container *ngFor="let validation of validation_messages.u_MachinePurchased">\n          <div class="error-message"\n            *ngIf="validations_form.get(\'u_MachinePurchased\').hasError(validation.type) && (validations_form.get(\'u_MachinePurchased\').dirty || validations_form.get(\'u_MachinePurchased\').touched)">\n            <ion-icon name="information-circle-outline"></ion-icon> {{ validation.message }}\n          </div>\n        </ng-container>\n      </div>\n\n      <ion-list radio-group formControlName="purchase_condation">\n        <ion-list-header>\n          Purchase Type\n        </ion-list-header>\n\n        <ion-item *ngFor="let f of form ">\n          <ion-label>{{f.val}}</ion-label>\n          <ion-radio checked="{{f.isChecked}}" value="{{f.key}}"></ion-radio>\n        </ion-item>\n      </ion-list>\n      <div class="validation-errors">\n        <ng-container *ngFor="let validation of validation_messages.purchase_condation">\n          <div class="error-message"\n            *ngIf="validations_form.get(\'purchase_condation\').hasError(validation.type) && (validations_form.get(\'purchase_condation\').dirty || validations_form.get(\'purchase_condation\').touched)">\n            <ion-icon name="information-circle-outline"></ion-icon> {{ validation.message }}\n          </div>\n        </ng-container>\n      </div>\n\n\n\n\n      <ion-item>\n        <ion-label floating>Note</ion-label>\n        <ion-input type="text" formControlName="u_note"></ion-input>\n      </ion-item>\n\n\n      <ion-item>\n        <ion-label floating>Machine No<span style="color:red">*</span></ion-label>\n        <ion-input type="text" formControlName="Machine_No"></ion-input>\n      </ion-item>\n      <div class="validation-errors">\n        <ng-container *ngFor="let validation of validation_messages.Machine_No">\n          <div class="error-message"\n            *ngIf="validations_form.get(\'Machine_No\').hasError(validation.type) && (validations_form.get(\'Machine_No\').dirty || validations_form.get(\'Machine_No\').touched)">\n            <ion-icon name="information-circle-outline"></ion-icon> {{ validation.message }}\n          </div>\n        </ng-container>\n      </div>\n\n\n      <ion-item>\n        <ion-label>Service Period<span style="color:red">*</span></ion-label>\n        <ion-select formControlName="service_period">\n          <ion-option *ngFor="let i of getMonth()" [value]="i">\n            {{i}}</ion-option>\n        </ion-select>\n      </ion-item>\n      <div class="validation-errors">\n        <ng-container *ngFor="let validation of validation_messages.service_period">\n          <div class="error-message"\n            *ngIf="validations_form.get(\'service_period\').hasError(validation.type) && (validations_form.get(\'service_period\').dirty || validations_form.get(\'service_period\').touched)">\n            <ion-icon name="information-circle-outline"></ion-icon> {{ validation.message }}\n          </div>\n        </ng-container>\n      </div>\n\n      <ion-item>\n        <ion-label>Warrenty Period<span style="color:red">*</span></ion-label>\n        <ion-select formControlName="warrenty_period">\n          <ion-option *ngFor="let category of getMonth();let i=index;" [value]=\'category\' [selected]="i===0">\n            {{category}}\n          </ion-option>\n        </ion-select>\n      </ion-item>\n      <div class="validation-errors">\n        <ng-container *ngFor="let validation of validation_messages.warrenty_period">\n          <div class="error-message"\n            *ngIf="validations_form.get(\'warrenty_period\').hasError(validation.type) && (validations_form.get(\'warrenty_period\').dirty || validations_form.get(\'warrenty_period\').touched)">\n            <ion-icon name="information-circle-outline"></ion-icon> {{ validation.message }}\n          </div>\n        </ng-container>\n      </div>\n\n\n      <ion-item>\n        <ion-label>Date of purchase<span style="color:red">*</span></ion-label>\n          <ion-datetime [max]="maxDate" formControlName="u_dateOf_Purchased" display-timezone="utc"></ion-datetime>\n      </ion-item>\n      <div class="validation-errors">\n        <ng-container *ngFor="let validation of validation_messages.u_dateOf_Purchased">\n          <div class="error-message"\n            *ngIf="validations_form.get(\'u_dateOf_Purchased\').hasError(validation.type) && (validations_form.get(\'u_dateOf_Purchased\').dirty || validations_form.get(\'u_dateOf_Purchased\').touched)">\n            <ion-icon name="information-circle-outline"></ion-icon> {{ validation.message }}\n          </div>\n        </ng-container>\n      </div>-->\n\n      <div formGroupName="matching_passwords">\n        <ion-item>\n          <ion-label position="floating" color="primary">Password<span style="color:red">*</span></ion-label>\n          <ion-input [type]="password_type" formControlName="u_password"></ion-input>\n\n          <button style="width:auto" ion-button clear color="dark" type="button" item-right\n            (click)="changePaswordType()">\n            <ion-icon [name]="passwordEye"> </ion-icon>\n          </button>\n        </ion-item>\n        <div class="validation-errors">\n          <ng-container *ngFor="let validation of validation_messages.u_password">\n            <div class="error-message"\n              *ngIf="validations_form.get(\'matching_passwords\').get(\'u_password\').hasError(validation.type) && (validations_form.get(\'matching_passwords\').get(\'u_password\').dirty || validations_form.get(\'matching_passwords\').get(\'u_password\').touched)">\n              <ion-icon name="information-circle-outline"></ion-icon> {{ validation.message }}\n            </div>\n          </ng-container>\n        </div>\n\n        <ion-item>\n          <ion-label position="floating" color="primary">Confirm Password<span style="color:red">*</span></ion-label>\n          <ion-input [type]="cpassword_type" formControlName="u_cpassword"></ion-input>\n\n          <button ion-button style="width:auto" clear color="dark" type="button" item-right\n            (click)="changecPaswordType()">\n            <ion-icon [name]="cPassEye"> </ion-icon>\n          </button>\n        </ion-item>\n        <div class="validation-errors">\n          <ng-container *ngFor="let validation of validation_messages.u_cpassword">\n            <div class="error-message"\n              *ngIf="validations_form.get(\'matching_passwords\').get(\'u_cpassword\').hasError(validation.type) && (validations_form.get(\'matching_passwords\').get(\'u_cpassword\').dirty || validations_form.get(\'matching_passwords\').get(\'u_cpassword\').touched)">\n              <ion-icon name="information-circle-outline"></ion-icon> {{ validation.message }}\n            </div>\n          </ng-container>\n        </div>\n      </div>\n      <!-- These validations are for the form group --> \n      <div class="validation-errors">\n        <ng-container *ngFor="let validation of validation_messages.matching_passwords">\n          <div class="error-message"\n            *ngIf="validations_form.get(\'matching_passwords\').hasError(validation.type) && (validations_form.get(\'matching_passwords\').get(\'u_cpassword\').dirty || validations_form.get(\'matching_passwords\').get(\'u_cpassword\').touched)">\n            <ion-icon name="information-circle-outline"></ion-icon> {{ validation.message }}\n          </div>\n        </ng-container>\n      </div> \n      <button full ion-button expand="full" type="submit"\n      [disabled]="!validations_form.valid">Update</button>\n    </form>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/avinash/Apps/complaints_tracker/App/Shubham_App/src/pages/update-customer-modal/update-customer-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_toast_toast__["a" /* ToastProvider */],
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], UpdateCustomerModalPage);
    return UpdateCustomerModalPage;
}());

//# sourceMappingURL=update-customer-modal.js.map

/***/ })

},[368]);
//# sourceMappingURL=main.js.map