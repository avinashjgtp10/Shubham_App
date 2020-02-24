webpackJsonp([13],{

/***/ 120:
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

/***/ 121:
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

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminAssignEnggPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reusable_component_loader_page_loader__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_toast_toast__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__swimlane_ngx_datatable__ = __webpack_require__(225);
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
    function AdminAssignEnggPage(toast, rest, navCtrl, navParams) {
        this.toast = toast;
        this.rest = rest;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.machinType = [];
        this.allcomplaint = [];
        this.getAllEngg = [];
        this.userObj = {};
        this.isSearchEng = true;
        this.ColumnMode = __WEBPACK_IMPORTED_MODULE_5__swimlane_ngx_datatable__["a" /* ColumnMode */];
        this.SelectionType = __WEBPACK_IMPORTED_MODULE_5__swimlane_ngx_datatable__["c" /* SelectionType */];
        this.columns = [
            { name: "name", prop: 'c_id' },
            { name: 'Summary' },
            { name: 'Company' }
        ];
    }
    AdminAssignEnggPage.prototype.ionViewDidLoad = function () {
        this.initializeItems();
        this.initializeUser();
        this.loadPage.showLoader();
    };
    AdminAssignEnggPage.prototype.updateComplaint = function (user) {
        var _this = this;
        var data = {
            status: 3,
            complaintId: this.userObj.c_id,
            assignTo: user.u_id
        };
        this.rest.assignComplaint(data).subscribe(function (result) {
            if (result.status === "success") {
                _this.isSearchEng = true;
                _this.initializeItems();
                _this.toast.showToast("Success!");
            }
        });
    };
    AdminAssignEnggPage.prototype.asign = function (event) {
        this.userObj = event;
        this.isSearchEng = false;
    };
    AdminAssignEnggPage.prototype.getEngg = function (ev) {
        this.initializeUser();
        var val = ev.target.value;
        if (val && val.trim() != '') {
            this.getAllEngg = this.getAllEngg.filter(function (item) {
                return parseInt(item.u_id) === parseInt(val) || (item.u_email.toLowerCase().indexOf(val.toLowerCase())) > -1 ||
                    (item.u_name.toLowerCase().indexOf(val.toLowerCase())) > -1;
            });
        }
    };
    AdminAssignEnggPage.prototype.initializeUser = function () {
        var _this = this;
        this.rest.getAllUsers().subscribe(function (allUser) {
            _this.getAllEngg = allUser.data.filter(function (el) {
                return parseInt(el.u_role) === 3;
            });
        });
    };
    AdminAssignEnggPage.prototype.getItems = function (ev) {
        this.initializeItems();
        var val = ev.target.value;
        if (val && val.trim() != '') {
            this.allcomplaint = this.allcomplaint.filter(function (item) {
                return parseInt(item.c_id) === parseInt(val) || (item.c_desc.toLowerCase().indexOf(val.toLowerCase())) > -1;
            });
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
                            ele.Machine_type = el.Value;
                        }
                    });
                });
                console.log(JSON.stringify(_this.allcomplaint));
                _this.loadPage.hideLoader();
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
            selector: 'page-admin-assign-engg',template:/*ion-inline-start:"/Users/avinash/Apps/complaints_tracker/App/Shubham_App/src/pages/admin-assign-engg/admin-assign-engg.html"*/'<!--\n  Generated template for the AdminAssignEnggPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header *ngIf="isSearchEng" id="backBtn">\n  <ion-navbar>\n    <ion-title>Assign Complaint</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-header *ngIf="!isSearchEng" id="searchEngg">\n  <ion-navbar>\n    <ion-title>Search Engineer</ion-title>\n    <button ion-button color="light" (click)="isSearchEng = true" *ngIf="!isSearchEng">Close</button>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <page-loader></page-loader>\n  <b *ngIf="allcomplaint.length === 0" style="text-align: center;    display: block;font-size: 2em; color:red;">Data not\n    Found</b>\n  <section *ngIf="allcomplaint.length > 0">\n    <section *ngIf="isSearchEng">\n\n      <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n      \n      <section>\n          <ngx-datatable\n          class="material"\n          [rows]="allcomplaint"\n          [columnMode]="ColumnMode.force"\n          [columns]="columns"\n          [headerHeight]="50"\n          [footerHeight]="50"\n          rowHeight="auto"\n          [limit]="5"\n          [selected]="selected"\n          [selectionType]="SelectionType.single"\n          (activate)="onActivate($event)"\n          (select)="onSelect($event)"\n        >\n        </ngx-datatable>\n          <!-- <ngx-datatable\n       [sortType]="\'multi\'"\n       [headerHeight]="50"\n       [footerHeight]="50"\n       [rowHeight]="50"\n       [rows]="allcomplaint"\n       [columns]="columns"\n       [columnMode]="\'force\'"\n       [limit]="10">\n       <ngx-datatable-column name="Name"></ngx-datatable-column>\n       <ngx-datatable-column name="Gender"></ngx-datatable-column>\n       <ngx-datatable-column name="Company"></ngx-datatable-column>\n       <ngx-datatable-column *ngFor="let column of allcomplaint; let i = index;" name="Action" prop="">\n          <ng-template let-value="value" let-row="row"  ngx-datatable-cell-template>\n            <span>\n              <button style="background-color:red;height:15px;" (click)=\'asign(row)\'>Assign</button>\n            </span>\n          </ng-template>\n        </ngx-datatable-column>\n     </ngx-datatable> -->\n        <!-- <table>\n          <thead>\n            <tr>\n              <th>C.NO</th>\n              <th>Complaint</th>\n              <th>Date</th>\n              <th>Type of Machine</th>\n              <th>Action</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor="let complaint of allcomplaint">\n              <td>{{complaint.c_id}}</td>\n              <td>{{complaint.c_desc}}</td>\n              <td>{{complaint.c_date}}</td>\n              <td>{{complaint.Machine_type}}</td>\n              <td> <button (click)="asign(complaint)"> Assign </button> </td>\n            </tr>\n          </tbody>\n        </table> -->\n      </section>\n    </section>\n    <section *ngIf="!isSearchEng">\n      <ion-searchbar (ionInput)="getEngg($event)"></ion-searchbar>\n      <table>\n        <thead>\n          <tr>\n            <th>U.no</th>\n            <th>Name</th>\n            <th>Mobile Number</th>\n            <th>Email</th>\n            <th>Action</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor="let user of getAllEngg">\n            <td>{{user.u_id}}</td>\n            <td>{{user.u_name}}</td>\n            <td>{{user.u_mobile}}</td>\n            <td>{{user.u_email}}</td>\n            <td> <button (click)="updateComplaint(user)"> Assign </button> </td>\n          </tr>\n        </tbody>\n      </table>\n    </section>\n  </section>\n</ion-content>'/*ion-inline-end:"/Users/avinash/Apps/complaints_tracker/App/Shubham_App/src/pages/admin-assign-engg/admin-assign-engg.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__providers_toast_toast__["a" /* ToastProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], AdminAssignEnggPage);
    return AdminAssignEnggPage;
}());

//# sourceMappingURL=admin-assign-engg.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminCreateCustomerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__validators_password_validator__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_rest_rest__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_toast_toast__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_mock_data__ = __webpack_require__(320);
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
        this.password_type = "password";
        this.cpassword_type = "password";
        this.validation_messages = __WEBPACK_IMPORTED_MODULE_6__app_mock_data__["a" /* MockData */].adminCreateCustomerValidationMessage;
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
    AdminCreateCustomerPage.prototype.changePaswordType = function () {
        this.password_type = this.password_type === "text" ? "password" : "text";
    };
    AdminCreateCustomerPage.prototype.changecPaswordType = function () {
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
            address: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](""),
            u_MachinePurchased: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required),
            alter: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]("", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].minLength(10), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].pattern("[0-9]+")]),
            name: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required),
            email: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].compose([
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
            ])),
            matching_passwords: this.matching_passwords_group,
            phone: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].minLength(10), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].pattern("[0-9]+")])
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
            "u_role": 1,
            "u_roleType": null,
            "u_joinDate": new Date()
        };
        this.rest.isCustomer().subscribe(function (result) {
            var i = result.data.findIndex(function (obj) {
                return obj.u_email === Obj.u_email;
            });
            if (i === -1) {
                _this.rest.createCustomer(Obj).subscribe(function (result) {
                    if (result.status === "success") {
                        _this.toast.showToast("Customer Details saved");
                        _this.validations_form.reset();
                    }
                });
            }
            else {
                _this.toast.showToast("Customer Email-id already exist");
            }
        });
    };
    AdminCreateCustomerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-admin-create-customer',template:/*ion-inline-start:"/Users/avinash/Apps/complaints_tracker/App/Shubham_App/src/pages/admin-create-customer/admin-create-customer.html"*/'<!--\n  Generated template for the AdminCreateCustomerPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Create Customer</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list lines="none">\n    <form [formGroup]="validations_form" (ngSubmit)="onSubmit(validations_form.value)">\n\n      <ion-item>\n        <ion-label floating>Customer Name<span style="color:red">*</span></ion-label>\n        <ion-input type="text" formControlName="name"></ion-input>\n      </ion-item>\n      <div class="validation-errors">\n        <ng-container *ngFor="let validation of validation_messages.name">\n          <div class="error-message"\n            *ngIf="validations_form.get(\'name\').hasError(validation.type) && (validations_form.get(\'name\').dirty || validations_form.get(\'name\').touched)">\n            <ion-icon name="information-circle-outline"></ion-icon> {{ validation.message }}\n          </div>\n        </ng-container>\n      </div>\n\n      <ion-item>\n        <ion-label floating>Mobile Number<span style="color:red">*</span></ion-label>\n        <ion-input type="text" formControlName="phone"></ion-input>\n      </ion-item>\n      <div class="validation-errors">\n        <ng-container *ngFor="let validation of validation_messages.phone">\n          <div class="error-message"\n            *ngIf="validations_form.get(\'phone\').hasError(validation.type) && (validations_form.get(\'phone\').dirty || validations_form.get(\'phone\').touched)">\n            <ion-icon name="information-circle-outline"></ion-icon> {{ validation.message }}\n          </div>\n        </ng-container>\n      </div>\n\n\n      <ion-item>\n        <ion-label floating>Alternative Contact number</ion-label>\n        <ion-input type="text" formControlName="alter"></ion-input>\n      </ion-item>\n      <div class="validation-errors">\n        <ng-container *ngFor="let validation of validation_messages.alter">\n          <div class="error-message"\n            *ngIf="validations_form.get(\'alter\').hasError(validation.type) && (validations_form.get(\'alter\').dirty || validations_form.get(\'alter\').touched)">\n            <ion-icon name="information-circle-outline"></ion-icon> {{ validation.message }}\n          </div>\n        </ng-container>\n      </div>\n\n\n      <ion-item>\n        <ion-label floating>Email<span style="color:red">*</span></ion-label>\n        <ion-input type="email" formControlName="email"></ion-input>\n      </ion-item>\n      <div class="validation-errors">\n        <ng-container *ngFor="let validation of validation_messages.email">\n          <div class="error-message"\n            *ngIf="validations_form.get(\'email\').hasError(validation.type) && (validations_form.get(\'email\').dirty || validations_form.get(\'email\').touched)">\n            <ion-icon name="information-circle-outline"></ion-icon> {{ validation.message }}\n          </div>\n        </ng-container>\n      </div>\n\n      <ion-item>\n        <ion-label floating>Address<span style="color:red">*</span></ion-label>\n        <ion-textarea formControlName="address"></ion-textarea>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Machine purchased<span style="color:red">*</span></ion-label>\n        <ion-select formControlName="u_MachinePurchased">\n          <ion-option *ngFor="let mach of typesOfMachin" [value]="mach">\n            {{mach}}</ion-option>\n        </ion-select>\n      </ion-item>\n      <div class="validation-errors">\n        <ng-container *ngFor="let validation of validation_messages.u_MachinePurchased">\n          <div class="error-message"\n            *ngIf="validations_form.get(\'u_MachinePurchased\').hasError(validation.type) && (validations_form.get(\'u_MachinePurchased\').dirty || validations_form.get(\'u_MachinePurchased\').touched)">\n            <ion-icon name="information-circle-outline"></ion-icon> {{ validation.message }}\n          </div>\n        </ng-container>\n      </div>\n\n      <ion-item>\n        <ion-label>Date of purchase<span style="color:red">*</span></ion-label>\n        <ion-input type="Date" formControlName="u_dateOf_Purchased"></ion-input>\n      </ion-item>\n      <div class="validation-errors">\n        <ng-container *ngFor="let validation of validation_messages.u_dateOf_Purchased">\n          <div class="error-message"\n            *ngIf="validations_form.get(\'u_dateOf_Purchased\').hasError(validation.type) && (validations_form.get(\'u_dateOf_Purchased\').dirty || validations_form.get(\'u_dateOf_Purchased\').touched)">\n            <ion-icon name="information-circle-outline"></ion-icon> {{ validation.message }}\n          </div>\n        </ng-container>\n      </div>\n\n      <div formGroupName="matching_passwords">\n        <ion-item>\n          <ion-label position="floating" color="primary">Password<span style="color:red">*</span></ion-label>\n          <ion-input [type]="password_type" formControlName="u_password"></ion-input>\n          <ion-icon name="eye" item-right (click)="changePaswordType()" ></ion-icon>  \n        </ion-item>\n        <div class="validation-errors">\n          <ng-container *ngFor="let validation of validation_messages.u_password">\n            <div class="error-message" *ngIf="validations_form.get(\'matching_passwords\').get(\'u_password\').hasError(validation.type) && (validations_form.get(\'matching_passwords\').get(\'u_password\').dirty || validations_form.get(\'matching_passwords\').get(\'u_password\').touched)">\n              <ion-icon name="information-circle-outline"></ion-icon> {{ validation.message }}\n            </div>\n          </ng-container>\n        </div>\n  \n        <ion-item>\n          <ion-label position="floating" color="primary">Confirm Password<span style="color:red">*</span></ion-label>\n          <ion-input [type]="cpassword_type" formControlName="u_cpassword"></ion-input>\n          <ion-icon name="eye" item-right (click)="changecPaswordType()" ></ion-icon> \n        </ion-item>\n        <div class="validation-errors">\n          <ng-container *ngFor="let validation of validation_messages.u_cpassword">\n            <div class="error-message" *ngIf="validations_form.get(\'matching_passwords\').get(\'u_cpassword\').hasError(validation.type) && (validations_form.get(\'matching_passwords\').get(\'u_cpassword\').dirty || validations_form.get(\'matching_passwords\').get(\'u_cpassword\').touched)">\n              <ion-icon name="information-circle-outline"></ion-icon> {{ validation.message }}\n            </div>\n          </ng-container>\n        </div>\n      </div>\n      <!-- These validations are for the form group -->\n      <div class="validation-errors">\n        <ng-container *ngFor="let validation of validation_messages.matching_passwords">\n          <div class="error-message" *ngIf="validations_form.get(\'matching_passwords\').hasError(validation.type) && (validations_form.get(\'matching_passwords\').get(\'u_cpassword\').dirty || validations_form.get(\'matching_passwords\').get(\'u_cpassword\').touched)">\n            <ion-icon name="information-circle-outline"></ion-icon> {{ validation.message }}\n          </div>\n        </ng-container>\n      </div>\n\n      <button full color="primary" class="submit-btn" expand="full" type="submit"\n        [disabled]="!validations_form.valid">Submit</button>\n    </form>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/avinash/Apps/complaints_tracker/App/Shubham_App/src/pages/admin-create-customer/admin-create-customer.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__providers_toast_toast__["a" /* ToastProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], AdminCreateCustomerPage);
    return AdminCreateCustomerPage;
}());

//# sourceMappingURL=admin-create-customer.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminCreateEnggPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__validators_password_validator__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_rest_rest__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_toast_toast__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_mock_data__ = __webpack_require__(320);
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
        this.validation_messages = __WEBPACK_IMPORTED_MODULE_6__app_mock_data__["a" /* MockData */].adminEnggValidationMsg;
        this.password_type = "password";
        this.cpassword_type = "password";
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
            alter: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]("", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].minLength(10), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].pattern("[0-9]+")]),
            name: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required),
            email: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].compose([
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
            ])),
            matching_passwords: this.matching_passwords_group,
            phone: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].minLength(10), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].pattern("[0-9]+")])
        });
    };
    AdminCreateEnggPage.prototype.changePaswordType = function () {
        this.password_type = this.password_type === "text" ? "password" : "text";
    };
    AdminCreateEnggPage.prototype.changecPaswordType = function () {
        this.cpassword_type = this.cpassword_type === "text" ? "password" : "text";
    };
    AdminCreateEnggPage.prototype.onSubmit = function (values) {
        var _this = this;
        console.log("Hello", values);
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
        console.log(JSON.stringify(Obj));
        this.rest.isCustomer().subscribe(function (result) {
            var i = result.data.findIndex(function (obj) {
                return obj.u_email === Obj.u_email;
            });
            if (i === -1) {
                _this.rest.createCustomer(Obj).subscribe(function (result) {
                    if (result.status === "success") {
                        _this.toast.showToast("Engineer Details saved");
                        _this.validations_form.reset();
                    }
                });
            }
            else {
                _this.toast.showToast("Engineer Email-id already exist");
            }
        });
    };
    AdminCreateEnggPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-admin-create-engg',template:/*ion-inline-start:"/Users/avinash/Apps/complaints_tracker/App/Shubham_App/src/pages/admin-create-engg/admin-create-engg.html"*/'<!--\n  Generated template for the AdminCreateCustomerPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Create Service Enginner</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list lines="none">\n    <form [formGroup]="validations_form" (ngSubmit)="onSubmit(validations_form.value)">\n\n      <ion-item>\n        <ion-label floating>Enter Name<span style="color:red">*</span></ion-label>\n        <ion-input type="text" formControlName="name"></ion-input>\n      </ion-item>\n      <div class="validation-errors">\n        <ng-container *ngFor="let validation of validation_messages.name">\n          <div class="error-message"\n            *ngIf="validations_form.get(\'name\').hasError(validation.type) && (validations_form.get(\'name\').dirty || validations_form.get(\'name\').touched)">\n            <ion-icon name="information-circle-outline"></ion-icon> {{ validation.message }}\n          </div>\n        </ng-container>\n      </div>\n\n      <ion-item>\n        <ion-label floating>Mobile Number<span style="color:red">*</span></ion-label>\n        <ion-input type="text" formControlName="phone"></ion-input>\n      </ion-item>\n      <div class="validation-errors">\n        <ng-container *ngFor="let validation of validation_messages.phone">\n          <div class="error-message"\n            *ngIf="validations_form.get(\'phone\').hasError(validation.type) && (validations_form.get(\'phone\').dirty || validations_form.get(\'phone\').touched)">\n            <ion-icon name="information-circle-outline"></ion-icon> {{ validation.message }}\n          </div>\n        </ng-container>\n      </div>\n\n\n      <ion-item>\n        <ion-label floating>Alternative Contact number</ion-label>\n        <ion-input type="text" formControlName="alter"></ion-input>\n      </ion-item>\n      <div class="validation-errors">\n        <ng-container *ngFor="let validation of validation_messages.alter">\n          <div class="error-message"\n            *ngIf="validations_form.get(\'alter\').hasError(validation.type) && (validations_form.get(\'alter\').dirty || validations_form.get(\'alter\').touched)">\n            <ion-icon name="information-circle-outline"></ion-icon> {{ validation.message }}\n          </div>\n        </ng-container>\n      </div>\n\n\n      <ion-item>\n        <ion-label floating>Email<span style="color:red">*</span></ion-label>\n        <ion-input type="email" formControlName="email"></ion-input>\n      </ion-item>\n      <div class="validation-errors">\n        <ng-container *ngFor="let validation of validation_messages.email">\n          <div class="error-message"\n            *ngIf="validations_form.get(\'email\').hasError(validation.type) && (validations_form.get(\'email\').dirty || validations_form.get(\'email\').touched)">\n            <ion-icon name="information-circle-outline"></ion-icon> {{ validation.message }}\n          </div>\n        </ng-container>\n      </div>\n\n      <ion-item>\n        <ion-label floating>Address<span style="color:red">*</span></ion-label>\n        <ion-textarea formControlName="address"></ion-textarea>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Engg Type<span style="color:red">*</span></ion-label>\n        <ion-select formControlName="engg_type">\n          <ion-option *ngFor="let mach of typesOfMachin" [value]="mach.key">\n            {{mach.value}}</ion-option>\n        </ion-select>\n      </ion-item>\n      <div class="validation-errors">\n        <ng-container *ngFor="let validation of validation_messages.engg_type">\n          <div class="error-message"\n            *ngIf="validations_form.get(\'engg_type\').hasError(validation.type) && (validations_form.get(\'engg_type\').dirty || validations_form.get(\'engg_type\').touched)">\n            <ion-icon name="information-circle-outline"></ion-icon> {{ validation.message }}\n          </div>\n        </ng-container>\n      </div>\n\n      <ion-item>\n        <ion-label>Date of Joining<span style="color:red">*</span></ion-label>\n        <ion-input type="Date" formControlName="u_Joining_date"></ion-input>\n      </ion-item>\n      <div class="validation-errors">\n        <ng-container *ngFor="let validation of validation_messages.u_Joining_date">\n          <div class="error-message"\n            *ngIf="validations_form.get(\'u_Joining_date\').hasError(validation.type) && (validations_form.get(\'u_Joining_date\').dirty || validations_form.get(\'u_Joining_date\').touched)">\n            <ion-icon name="information-circle-outline"></ion-icon> {{ validation.message }}\n          </div>\n        </ng-container>\n      </div>\n\n      <div formGroupName="matching_passwords">\n        <ion-item>\n          <ion-label position="floating" color="primary">Password<span style="color:red">*</span></ion-label>\n          <ion-input [type]="password_type" formControlName="u_password"></ion-input>\n          <ion-icon name="eye" item-right (click)="changePaswordType()" ></ion-icon> \n        </ion-item>\n        <div class="validation-errors">\n          <ng-container *ngFor="let validation of validation_messages.u_password">\n            <div class="error-message" *ngIf="validations_form.get(\'matching_passwords\').get(\'u_password\').hasError(validation.type) && (validations_form.get(\'matching_passwords\').get(\'u_password\').dirty || validations_form.get(\'matching_passwords\').get(\'u_password\').touched)">\n              <ion-icon name="information-circle-outline"></ion-icon> {{ validation.message }}\n            </div>\n          </ng-container>\n        </div>\n  \n        <ion-item>\n          <ion-label position="floating" color="primary">Confirm Password<span style="color:red">*</span></ion-label>\n          <ion-input [type]="cpassword_type" formControlName="u_cpassword"></ion-input>\n          <ion-icon name="eye" item-right (click)="changecPaswordType()" ></ion-icon> \n        </ion-item>\n        <div class="validation-errors">\n          <ng-container *ngFor="let validation of validation_messages.u_cpassword">\n            <div class="error-message" *ngIf="validations_form.get(\'matching_passwords\').get(\'u_cpassword\').hasError(validation.type) && (validations_form.get(\'matching_passwords\').get(\'u_cpassword\').dirty || validations_form.get(\'matching_passwords\').get(\'u_cpassword\').touched)">\n              <ion-icon name="information-circle-outline"></ion-icon> {{ validation.message }}\n            </div>\n          </ng-container>\n        </div>\n      </div>\n      <!-- These validations are for the form group -->\n      <div class="validation-errors">\n        <ng-container *ngFor="let validation of validation_messages.matching_passwords">\n          <div class="error-message" *ngIf="validations_form.get(\'matching_passwords\').hasError(validation.type) && (validations_form.get(\'matching_passwords\').get(\'u_cpassword\').dirty || validations_form.get(\'matching_passwords\').get(\'u_cpassword\').touched)">\n            <ion-icon name="information-circle-outline"></ion-icon> {{ validation.message }}\n          </div>\n        </ng-container>\n      </div>\n\n      <button full color="primary" class="submit-btn" expand="full" type="submit"\n        [disabled]="!validations_form.valid">Submit</button>\n    </form>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/avinash/Apps/complaints_tracker/App/Shubham_App/src/pages/admin-create-engg/admin-create-engg.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__providers_toast_toast__["a" /* ToastProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], AdminCreateEnggPage);
    return AdminCreateEnggPage;
}());

//# sourceMappingURL=admin-create-engg.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminDashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__admin_create_customer_admin_create_customer__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__admin_create_engg_admin_create_engg__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__admin_assign_engg_admin_assign_engg__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__admin_view_previous_admin_view_previous__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__cust_details_cust_details__ = __webpack_require__(167);
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
                event1: "viewComplaint",
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
            console.log(value);
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__admin_create_customer_admin_create_customer__["a" /* AdminCreateCustomerPage */], { user_id: this.navParams.get("user_id") });
        }
        if (value === "custDetails") {
            console.log(value);
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__cust_details_cust_details__["a" /* CustDetailsPage */], { user_id: this.navParams.get("user_id") });
        }
        if (value === "assignEnginner") {
            console.log(value);
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
    };
    AdminDashboardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-admin-dashboard',template:/*ion-inline-start:"/Users/avinash/Apps/complaints_tracker/App/Shubham_App/src/pages/admin-dashboard/admin-dashboard.html"*/'<header-component (onClick)="goToHome($event)" [label]="label"></header-component>\n<ion-content>\n  <section class="container">\n    <ion-grid *ngFor="let d of tabData">\n      <tab [imgSrc1]="d.url" [imgSrc2]="d.url1" [title]="d.title" [title1]="d.title1" (onChange)="tabEvent(d.event)" (onChange1)="tabEvent2(d.event1)"></tab>\n    </ion-grid>\n  </section>\n</ion-content>'/*ion-inline-end:"/Users/avinash/Apps/complaints_tracker/App/Shubham_App/src/pages/admin-dashboard/admin-dashboard.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], AdminDashboardPage);
    return AdminDashboardPage;
}());

//# sourceMappingURL=admin-dashboard.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnggDashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__engg_accept_complaint_engg_accept_complaint__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__engg_view_previous_engg_view_previous__ = __webpack_require__(162);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], EnggDashboardPage);
    return EnggDashboardPage;
}());

//# sourceMappingURL=engg-dashboard.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnggAcceptComplaintPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__engg_view_complaint_engg_view_complaint__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__ = __webpack_require__(23);
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
    EnggAcceptComplaintPage.prototype.action = function (Obj) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__engg_view_complaint_engg_view_complaint__["a" /* EnggViewComplaintPage */], { ObjData: Obj });
    };
    EnggAcceptComplaintPage.prototype.ionViewWillUnload = function () {
    };
    EnggAcceptComplaintPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-engg-accept-complaint',template:/*ion-inline-start:"/Users/avinash/Apps/complaints_tracker/App/Shubham_App/src/pages/engg-accept-complaint/engg-accept-complaint.html"*/'<!--\n  Generated template for the AcceptComplaintPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Accept Complaint</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <!-- <ion-searchbar></ion-searchbar> -->\n  <!-- <ion-grid>\n    <ion-row>\n      <ion-col>\n        <div>\n          Comp. No.\n        </div>\n      </ion-col>\n      <ion-col>\n        <div>\n          Comp. Date\n        </div>\n      </ion-col>\n      <ion-col>\n        <div>\n          Action\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-row *ngFor="let c of complaintData">\n      <ion-col>\n        <div>\n          {{c.c_id}}\n        </div>\n      </ion-col>\n      <ion-col>\n        <div>\n          {{c.c_date}}\n        </div>\n      </ion-col>\n      <ion-col>\n        <div>\n          <button (click)="action(c)" ion-button>View</button>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid> -->\n\n  <table>\n    <thead>\n      <th> C.No</th>\n      <th> Complaint</th>\n      <th> Complaint Date </th>\n      <th> Action</th>\n    </thead>\n    <tbody>\n      <tr *ngFor="let c of complaintData">\n        <td> {{c.c_id}}</td>\n        <td>\n          {{c.c_desc}}\n        </td>\n        <td> {{c.c_date}}</td>\n        <td> <button (click)="action(c)" ion-button>View</button> </td>\n      </tr>\n    </tbody>\n  </table>\n</ion-content>'/*ion-inline-end:"/Users/avinash/Apps/complaints_tracker/App/Shubham_App/src/pages/engg-accept-complaint/engg-accept-complaint.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], EnggAcceptComplaintPage);
    return EnggAcceptComplaintPage;
}());

//# sourceMappingURL=engg-accept-complaint.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnggViewComplaintPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_toast_toast__ = __webpack_require__(43);
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
        console.log("Assigned user details");
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_toast_toast__["a" /* ToastProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], EnggViewComplaintPage);
    return EnggViewComplaintPage;
}());

//# sourceMappingURL=engg-view-complaint.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnggViewPreviousPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(23);
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
            console.log(JSON.stringify(data));
            _this.complaintData = data.data.filter(function (el) {
                if (el.c_assignTo === _this.navParams.get("user_id")) {
                    if (el.c_status === 2) {
                        return el;
                    }
                }
                ;
            });
            console.log(JSON.stringify(_this.complaintData));
        });
    };
    EnggViewPreviousPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-engg-view-previous',template:/*ion-inline-start:"/Users/avinash/Apps/complaints_tracker/App/Shubham_App/src/pages/engg-view-previous/engg-view-previous.html"*/'<!--\n  Generated template for the AcceptComplaintPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Closed Complaint</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <!-- <ion-searchbar></ion-searchbar> -->\n  <table>\n    <thead>\n      <th> C.No</th>\n      <th> Complaint</th>\n      <th> Complaint Date </th>\n      <th> Action</th>\n    </thead>\n    <tbody>\n      <tr *ngFor="let c of complaintData">\n        <td> {{c.c_id}}</td>\n        <td>\n          {{c.c_desc}}\n        </td>\n        <td> {{c.c_date}}</td>\n        <td> {{c.e_desc}} </td>\n      </tr>\n    </tbody>\n  </table>\n\n\n</ion-content>'/*ion-inline-end:"/Users/avinash/Apps/complaints_tracker/App/Shubham_App/src/pages/engg-view-previous/engg-view-previous.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], EnggViewPreviousPage);
    return EnggViewPreviousPage;
}());

//# sourceMappingURL=engg-view-previous.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustDashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cust_raise_complaint_cust_raise_complaint__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cust_view_complaint_cust_view_complaint__ = __webpack_require__(165);
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
            selector: 'page-cust-dashboard',template:/*ion-inline-start:"/Users/avinash/Apps/complaints_tracker/App/Shubham_App/src/pages/cust-dashboard/cust-dashboard.html"*/'<!--\n  Generated template for the CustDashboardPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<header-component (onClick)="goToHome($event)" [label]="label"></header-component>\n\n<ion-content>\n  <section class="container">\n    <div class="raise" (click)="raise()">\n      <img src="../../assets/imgs/raise.png" />\n      <label>Raise Complaint</label>\n    </div>\n    <div class="view" (click)="view()"> \n      <img src="../../assets/imgs/viewComplaint.png" />\n      <label>View Previos Complaint</label>\n    </div>\n  </section>\n</ion-content>'/*ion-inline-end:"/Users/avinash/Apps/complaints_tracker/App/Shubham_App/src/pages/cust-dashboard/cust-dashboard.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], CustDashboardPage);
    return CustDashboardPage;
}());

//# sourceMappingURL=cust-dashboard.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustRaiseComplaintPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_toast_toast__ = __webpack_require__(43);
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
            selector: 'page-cust-raise-complaint',template:/*ion-inline-start:"/Users/avinash/Apps/complaints_tracker/App/Shubham_App/src/pages/cust-raise-complaint/cust-raise-complaint.html"*/'<!--\n  Generated template for the CustRaiseComplaintPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Raise Complaint</ion-title>\n  </ion-navbar>\n</ion-header>\n\n  <ion-content>\n    <ion-list lines="none">\n      <form [formGroup]="validations_form" (ngSubmit)="onSubmit(validations_form.value)">\n\n        <ion-item>\n          <ion-label floating>Descrption</ion-label>\n          <ion-textarea formControlName="name"></ion-textarea>\n        </ion-item>\n        <div class="validation-errors">\n          <ng-container *ngFor="let validation of validation_messages.name">\n            <div class="error-message"\n              *ngIf="validations_form.get(\'name\').hasError(validation.type) && (validations_form.get(\'name\').dirty || validations_form.get(\'name\').touched)">\n              <ion-icon name="information-circle-outline"></ion-icon> {{ validation.message }}\n            </div>\n          </ng-container>\n        </div>\n\n\n  \n\n        <ion-item>\n          <ion-label>Engg Type</ion-label>\n          <ion-select formControlName="engg_type">\n            <ion-option *ngFor="let mach of typesOfMachin" [value]="mach.key">\n              {{mach.value}}</ion-option>\n          </ion-select>\n        </ion-item>\n        <div class="validation-errors">\n          <ng-container *ngFor="let validation of validation_messages.engg_type">\n            <div class="error-message"\n              *ngIf="validations_form.get(\'engg_type\').hasError(validation.type) && (validations_form.get(\'engg_type\').dirty || validations_form.get(\'engg_type\').touched)">\n              <ion-icon name="information-circle-outline"></ion-icon> {{ validation.message }}\n            </div>\n          </ng-container>\n        </div>\n\n        <ion-item>\n          <ion-label>Problem Starting Date</ion-label>\n          <ion-input type="Date" formControlName="u_Joining_date"></ion-input>\n        </ion-item>\n        <div class="validation-errors">\n          <ng-container *ngFor="let validation of validation_messages.u_Joining_date">\n            <div class="error-message"\n              *ngIf="validations_form.get(\'u_Joining_date\').hasError(validation.type) && (validations_form.get(\'u_Joining_date\').dirty || validations_form.get(\'u_Joining_date\').touched)">\n              <ion-icon name="information-circle-outline"></ion-icon> {{ validation.message }}\n            </div>\n          </ng-container>\n        </div>\n\n        <button full color="primary" class="submit-btn" expand="full" type="submit"\n          [disabled]="!validations_form.valid">Submit</button>\n      </form>\n    </ion-list>\n\n</ion-content>'/*ion-inline-end:"/Users/avinash/Apps/complaints_tracker/App/Shubham_App/src/pages/cust-raise-complaint/cust-raise-complaint.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__providers_toast_toast__["a" /* ToastProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], CustRaiseComplaintPage);
    return CustRaiseComplaintPage;
}());

//# sourceMappingURL=cust-raise-complaint.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustViewComplaintPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_settings__ = __webpack_require__(120);
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
    CustViewComplaintPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cust-view-complaint',template:/*ion-inline-start:"/Users/avinash/Apps/complaints_tracker/App/Shubham_App/src/pages/cust-view-complaint/cust-view-complaint.html"*/'<!--\n  Generated template for the CustViewComplaintPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Previous Complaint</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content >\n<b *ngIf="complaintData.length === 0"> Data not available</b>\n  <section *ngIf="complaintData.length > 0">\n   \n    <table>\n        <thead>\n          <th> C.No</th>\n          <th> Complaint</th>\n          <th> Complaint Date </th>\n          <th> Status</th>\n        </thead>\n        <tbody>\n          <tr *ngFor="let c of complaintData">\n            <td> {{c.c_id}}</td>\n            <td>\n              {{c.c_desc}}\n            </td>\n            <td> {{c.c_date | convertMachinName}}</td>\n            <td> {{c.c_status}} </td>\n          </tr>\n        </tbody>\n      </table>\n  </section>\n</ion-content>\n'/*ion-inline-end:"/Users/avinash/Apps/complaints_tracker/App/Shubham_App/src/pages/cust-view-complaint/cust-view-complaint.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], CustViewComplaintPage);
    return CustViewComplaintPage;
}());

//# sourceMappingURL=cust-view-complaint.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminViewPreviousPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_settings__ = __webpack_require__(120);
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
    function AdminViewPreviousPage(rest, navCtrl, navParams) {
        this.rest = rest;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.allcomplaint = [];
    }
    AdminViewPreviousPage.prototype.ionViewDidLoad = function () {
        this.initializeItems();
        console.log('ionViewDidLoad AdminViewPreviousPage');
    };
    AdminViewPreviousPage.prototype.initializeItems = function () {
        var _this = this;
        console.log("Calling..");
        this.rest.getAllComplaint().subscribe(function (result) {
            _this.allcomplaint = result.data;
            _this.allcomplaint = _this.allcomplaint.filter(function (ele) {
                __WEBPACK_IMPORTED_MODULE_3__app_app_settings__["a" /* AppSettings */].status.forEach(function (e) {
                    // console.log(e);
                    if (parseInt(e.id) === parseInt(ele.c_status)) {
                        ele.c_status = e.value;
                    }
                });
                return ele;
            });
        });
    };
    AdminViewPreviousPage.prototype.getItems = function (ev) {
        // Reset items back to all of the items
        this.initializeItems();
        // set val to the value of the searchbar
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.allcomplaint = this.allcomplaint.filter(function (item) {
                if (parseInt(item.c_id) === parseInt(val)) {
                    return parseInt(item.c_id) === parseInt(val);
                }
            });
        }
        console.log("hfg");
    };
    AdminViewPreviousPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-admin-view-previous',template:/*ion-inline-start:"/Users/avinash/Apps/complaints_tracker/App/Shubham_App/src/pages/admin-view-previous/admin-view-previous.html"*/'<!--\n  Generated template for the AdminViewPreviousPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>View</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n    <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n  <table>\n    <thead>\n      <th> C.No</th>\n      <th> Complaint</th>\n      <th> Complaint Date </th>\n      <th> Status </th>\n    </thead>\n    <tbody>\n      <tr *ngFor="let c of allcomplaint">\n        <td> {{c.c_id}}</td>\n        <td>\n          {{c.c_desc}}\n        </td>\n        <td> {{c.c_date | convertMachinName}}</td>\n        <td> {{c.c_status}} </td>\n      </tr>\n    </tbody>\n  </table>\n</ion-content>'/*ion-inline-end:"/Users/avinash/Apps/complaints_tracker/App/Shubham_App/src/pages/admin-view-previous/admin-view-previous.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], AdminViewPreviousPage);
    return AdminViewPreviousPage;
}());

//# sourceMappingURL=admin-view-previous.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(23);
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
    function CustDetailsPage(navCtrl, service, navParams) {
        this.navCtrl = navCtrl;
        this.service = service;
        this.navParams = navParams;
    }
    CustDetailsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.service.getAllUsers().subscribe(function (data) {
            _this.userDetail = data.data.filter(function (el) {
                return el.u_role === 1;
            });
        });
    };
    CustDetailsPage.prototype.filterList = function (event) {
        var searchterm = event.data;
        if (!searchterm) {
            return;
        }
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
    };
    CustDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cust-details',template:/*ion-inline-start:"/Users/avinash/Apps/complaints_tracker/App/Shubham_App/src/pages/cust-details/cust-details.html"*/'<!--\n  Generated template for the CustDetailsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Customer Details</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-searchbar  (ionInput)="filterList($event)"></ion-searchbar>\n  <div *ngFor="let d of userDetail">\n  <ion-card>\n    <ion-card-header>\n     <h2><b> {{d.u_name}}</b> </h2>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-row>\n        <ion-col>Email</ion-col>\n        <ion-col>{{d.u_email}}</ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>Address</ion-col>\n        <ion-col>{{d.u_address}}</ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>Password</ion-col>\n        <ion-col>{{d.u_password}}</ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>Machine Purchased</ion-col>\n        <ion-col>{{d.u_MachinePurchased}}</ion-col>\n      </ion-row>\n      \n    </ion-card-content>\n  </ion-card>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/avinash/Apps/complaints_tracker/App/Shubham_App/src/pages/cust-details/cust-details.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _c || Object])
    ], CustDetailsPage);
    return CustDetailsPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=cust-details.js.map

/***/ }),

/***/ 178:
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
webpackEmptyAsyncContext.id = 178;

/***/ }),

/***/ 222:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/admin-assign-engg/admin-assign-engg.module": [
		698,
		12
	],
	"../pages/admin-create-customer/admin-create-customer.module": [
		699,
		11
	],
	"../pages/admin-create-engg/admin-create-engg.module": [
		700,
		10
	],
	"../pages/admin-dashboard/admin-dashboard.module": [
		701,
		9
	],
	"../pages/admin-view-previous/admin-view-previous.module": [
		702,
		8
	],
	"../pages/cust-dashboard/cust-dashboard.module": [
		703,
		7
	],
	"../pages/cust-details/cust-details.module": [
		704,
		6
	],
	"../pages/cust-raise-complaint/cust-raise-complaint.module": [
		705,
		5
	],
	"../pages/cust-view-complaint/cust-view-complaint.module": [
		706,
		4
	],
	"../pages/engg-accept-complaint/engg-accept-complaint.module": [
		707,
		3
	],
	"../pages/engg-dashboard/engg-dashboard.module": [
		708,
		2
	],
	"../pages/engg-view-complaint/engg-view-complaint.module": [
		709,
		1
	],
	"../pages/engg-view-previous/engg-view-previous.module": [
		710,
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
webpackAsyncContext.id = 222;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_settings__ = __webpack_require__(120);
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
    RestProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], RestProvider);
    return RestProvider;
}());

//# sourceMappingURL=rest.js.map

/***/ }),

/***/ 319:
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

/***/ 320:
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

/***/ 321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoaderProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(14);
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

/***/ 365:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(370);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 370:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(692);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_engg_dashboard_engg_dashboard__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_rest_rest__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_engg_view_complaint_engg_view_complaint__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_engg_accept_complaint_engg_accept_complaint__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_engg_view_previous_engg_view_previous__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_admin_dashboard_admin_dashboard__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_admin_create_customer_admin_create_customer__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_admin_create_engg_admin_create_engg__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_admin_assign_engg_admin_assign_engg__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_admin_view_previous_admin_view_previous__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_cust_dashboard_cust_dashboard__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_cust_raise_complaint_cust_raise_complaint__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_cust_view_complaint_cust_view_complaint__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__swimlane_ngx_datatable__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_cust_details_cust_details__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__angular_common_http__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_loader_loader__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__providers_toast_toast__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__reusable_component_header_header_component__ = __webpack_require__(693);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__reusable_component_loader_page_loader__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_tab_tab__ = __webpack_require__(694);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_components_show_password_components_show_password__ = __webpack_require__(695);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pipes_convert_machin_name_convert_machin_name__ = __webpack_require__(696);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__directives_directives_show_password_directives_show_password__ = __webpack_require__(697);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















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
                __WEBPACK_IMPORTED_MODULE_21__pages_cust_details_cust_details__["a" /* CustDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_29__pipes_convert_machin_name_convert_machin_name__["a" /* ConvertMachinNamePipe */],
                __WEBPACK_IMPORTED_MODULE_28__components_components_show_password_components_show_password__["a" /* ComponentsShowPasswordComponent */],
                __WEBPACK_IMPORTED_MODULE_30__directives_directives_show_password_directives_show_password__["a" /* DirectivesShowPasswordDirective */],
                __WEBPACK_IMPORTED_MODULE_27__components_tab_tab__["a" /* TabComponent */],
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_engg_dashboard_engg_dashboard__["a" /* EnggDashboardPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_engg_view_complaint_engg_view_complaint__["a" /* EnggViewComplaintPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_engg_accept_complaint_engg_accept_complaint__["a" /* EnggAcceptComplaintPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_engg_view_previous_engg_view_previous__["a" /* EnggViewPreviousPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_admin_dashboard_admin_dashboard__["a" /* AdminDashboardPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_admin_create_engg_admin_create_engg__["a" /* AdminCreateEnggPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_admin_create_customer_admin_create_customer__["a" /* AdminCreateCustomerPage */],
                __WEBPACK_IMPORTED_MODULE_26__reusable_component_loader_page_loader__["a" /* PageLoader */],
                __WEBPACK_IMPORTED_MODULE_15__pages_admin_assign_engg_admin_assign_engg__["a" /* AdminAssignEnggPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_admin_view_previous_admin_view_previous__["a" /* AdminViewPreviousPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_cust_dashboard_cust_dashboard__["a" /* CustDashboardPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_cust_view_complaint_cust_view_complaint__["a" /* CustViewComplaintPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_cust_raise_complaint_cust_raise_complaint__["a" /* CustRaiseComplaintPage */],
                __WEBPACK_IMPORTED_MODULE_25__reusable_component_header_header_component__["a" /* HeaderComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/admin-assign-engg/admin-assign-engg.module#AdminAssignEnggPageModule', name: 'AdminAssignEnggPage', segment: 'admin-assign-engg', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/admin-create-customer/admin-create-customer.module#AdminCreateCustomerPageModule', name: 'AdminCreateCustomerPage', segment: 'admin-create-customer', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/admin-create-engg/admin-create-engg.module#AdminCreateEnggPageModule', name: 'AdminCreateEnggPage', segment: 'admin-create-engg', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/admin-dashboard/admin-dashboard.module#AdminDashboardPageModule', name: 'AdminDashboardPage', segment: 'admin-dashboard', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/admin-view-previous/admin-view-previous.module#AdminViewPreviousPageModule', name: 'AdminViewPreviousPage', segment: 'admin-view-previous', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cust-dashboard/cust-dashboard.module#CustDashboardPageModule', name: 'CustDashboardPage', segment: 'cust-dashboard', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cust-details/cust-details.module#CustDetailsPageModule', name: 'CustDetailsPage', segment: 'cust-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cust-raise-complaint/cust-raise-complaint.module#CustRaiseComplaintPageModule', name: 'CustRaiseComplaintPage', segment: 'cust-raise-complaint', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cust-view-complaint/cust-view-complaint.module#CustViewComplaintPageModule', name: 'CustViewComplaintPage', segment: 'cust-view-complaint', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/engg-accept-complaint/engg-accept-complaint.module#EnggAcceptComplaintPageModule', name: 'EnggAcceptComplaintPage', segment: 'engg-accept-complaint', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/engg-dashboard/engg-dashboard.module#EnggDashboardPageModule', name: 'EnggDashboardPage', segment: 'engg-dashboard', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/engg-view-complaint/engg-view-complaint.module#EnggViewComplaintPageModule', name: 'EnggViewComplaintPage', segment: 'engg-view-complaint', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/engg-view-previous/engg-view-previous.module#EnggViewPreviousPageModule', name: 'EnggViewPreviousPage', segment: 'engg-view-previous', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_22__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_20__swimlane_ngx_datatable__["b" /* NgxDatatableModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_engg_dashboard_engg_dashboard__["a" /* EnggDashboardPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_cust_details_cust_details__["a" /* CustDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_engg_view_complaint_engg_view_complaint__["a" /* EnggViewComplaintPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_engg_accept_complaint_engg_accept_complaint__["a" /* EnggAcceptComplaintPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_engg_view_previous_engg_view_previous__["a" /* EnggViewPreviousPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_admin_dashboard_admin_dashboard__["a" /* AdminDashboardPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_admin_create_engg_admin_create_engg__["a" /* AdminCreateEnggPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_admin_create_customer_admin_create_customer__["a" /* AdminCreateCustomerPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_admin_assign_engg_admin_assign_engg__["a" /* AdminAssignEnggPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_admin_view_previous_admin_view_previous__["a" /* AdminViewPreviousPage */],
                __WEBPACK_IMPORTED_MODULE_26__reusable_component_loader_page_loader__["a" /* PageLoader */],
                __WEBPACK_IMPORTED_MODULE_17__pages_cust_dashboard_cust_dashboard__["a" /* CustDashboardPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_cust_view_complaint_cust_view_complaint__["a" /* CustViewComplaintPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_cust_raise_complaint_cust_raise_complaint__["a" /* CustRaiseComplaintPage */],
                __WEBPACK_IMPORTED_MODULE_25__reusable_component_header_header_component__["a" /* HeaderComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_8__providers_rest_rest__["a" /* RestProvider */],
                __WEBPACK_IMPORTED_MODULE_23__providers_loader_loader__["a" /* LoaderProvider */],
                __WEBPACK_IMPORTED_MODULE_24__providers_toast_toast__["a" /* ToastProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToastProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(14);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* ToastController */]])
    ], ToastProvider);
    return ToastProvider;
}());

//# sourceMappingURL=toast.js.map

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__engg_dashboard_engg_dashboard__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_loader_loader__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_toast_toast__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__admin_dashboard_admin_dashboard__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__reusable_component_loader_page_loader__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__cust_dashboard_cust_dashboard__ = __webpack_require__(163);
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
        console.log(this.password_type);
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
        console.log(this.validations_form.get('email'));
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
            selector: 'page-home',template:/*ion-inline-start:"/Users/avinash/Apps/complaints_tracker/App/Shubham_App/src/pages/home/home.html"*/'<ion-content >\n  <page-loader></page-loader>\n  <form class="loginScreen" [formGroup]="validations_form"   (ngSubmit)="login(validations_form.value)" >\n      <ion-grid>\n        <ion-row color="primary" justify-content-center>\n          <ion-col align-self-center size-md="6" size-lg="5" size-xs="12">\n            <div text-center>\n              <h3>login</h3>\n            </div>\n            <div padding>\n\n              <ion-item>\n                <ion-input  type="email" placeholder="your@email.com" formControlName="email"></ion-input>\n              </ion-item>\n              <div class="validation-errors">\n                <ng-container *ngFor="let validation of validation_messages.email">\n                  <div class="error-message"\n                    *ngIf="validations_form.get(\'email\').hasError(validation.type) && (validations_form.get(\'email\').dirty || validations_form.get(\'email\').touched)">\n                    <ion-icon name="information-circle-outline"></ion-icon> {{ validation.message }}\n                  </div>\n                </ng-container>\n              </div>\n              <ion-item>\n                <ion-input  [type]="password_type" placeholder="Password" formControlName="password" ></ion-input>\n                <ion-icon name="eye" item-right (click)="changePaswordType()" ></ion-icon>\n              </ion-item>\n              <div class="validation-errors">\n                  <ng-container *ngFor="let validation of validation_messages.password">\n                    <div class="error-message"\n                      *ngIf="validations_form.get(\'password\').hasError(validation.type) && (validations_form.get(\'password\').dirty || validations_form.get(\'password\').touched)">\n                      <ion-icon name="information-circle-outline"></ion-icon> {{ validation.message }}\n                    </div>\n                  </ng-container>\n                </div>\n            </div>\n            <div padding>\n                <button full color="primary" class="submit-btn" expand="full" type="submit"\n                [disabled]="!validations_form.valid">Submit</button>\n                    \n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </form>\n</ion-content>\n'/*ion-inline-end:"/Users/avinash/Apps/complaints_tracker/App/Shubham_App/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_7__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_5__providers_toast_toast__["a" /* ToastProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_loader_loader__["a" /* LoaderProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__["a" /* RestProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 692:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(361);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 693:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
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
            selector: 'header-component',template:/*ion-inline-start:"/Users/avinash/Apps/complaints_tracker/App/Shubham_App/src/reusable_component/header/header_component.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>\n            <ion-icon ios="ios-home" md="md-home"> {{label}} </ion-icon>\n\n        </ion-title>\n        <ion-buttons right>\n            <button ion-button icon-only (click)="onClickButton($event)">\n                <ion-icon ios="ios-log-out" md="md-log-out"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>'/*ion-inline-end:"/Users/avinash/Apps/complaints_tracker/App/Shubham_App/src/reusable_component/header/header_component.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], HeaderComponent);
    return HeaderComponent;
}());

//# sourceMappingURL=header_component.js.map

/***/ }),

/***/ 694:
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

/***/ 695:
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
        console.log(this.password_type);
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

/***/ 696:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConvertMachinNamePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_rest_rest__ = __webpack_require__(23);
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
        console.log(value);
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

/***/ 697:
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

/***/ })

},[365]);
//# sourceMappingURL=main.js.map