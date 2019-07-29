webpackJsonp([6],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminCreateCustomerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__validators_password_validator__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_rest_rest__ = __webpack_require__(41);
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
    function AdminCreateCustomerPage(navCtrl, rest, formBuilder, navParams) {
        this.navCtrl = navCtrl;
        this.rest = rest;
        this.formBuilder = formBuilder;
        this.navParams = navParams;
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
        this.validation_messages = {
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
                { type: 'pattern', message: 'Please wnter a valid email.' }
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
    }
    AdminCreateCustomerPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AdminCreateCustomerPage');
    };
    AdminCreateCustomerPage.prototype.ngOnInit = function () {
        this.matching_passwords_group = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormGroup */]({
            u_password: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].compose([
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].minLength(5),
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
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
        console.log("Hello", values);
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
        this.rest.createCustomer(Obj).subscribe(function (result) {
            if (result.status === "success") {
                alert("success");
            }
        });
    };
    AdminCreateCustomerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-admin-create-customer',template:/*ion-inline-start:"D:\Avinash\Mobile_App_learning\Shubham_App\src\pages\admin-create-customer\admin-create-customer.html"*/'<!--\n\n  Generated template for the AdminCreateCustomerPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Create Customer</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-list lines="none">\n\n    <form [formGroup]="validations_form" (ngSubmit)="onSubmit(validations_form.value)">\n\n\n\n      <ion-item>\n\n        <ion-label floating>Customer Name</ion-label>\n\n        <ion-input type="text" formControlName="name"></ion-input>\n\n      </ion-item>\n\n      <div class="validation-errors">\n\n        <ng-container *ngFor="let validation of validation_messages.name">\n\n          <div class="error-message"\n\n            *ngIf="validations_form.get(\'name\').hasError(validation.type) && (validations_form.get(\'name\').dirty || validations_form.get(\'name\').touched)">\n\n            <ion-icon name="information-circle-outline"></ion-icon> {{ validation.message }}\n\n          </div>\n\n        </ng-container>\n\n      </div>\n\n\n\n      <ion-item>\n\n        <ion-label floating>Mobile Number</ion-label>\n\n        <ion-input type="text" formControlName="phone"></ion-input>\n\n      </ion-item>\n\n      <div class="validation-errors">\n\n        <ng-container *ngFor="let validation of validation_messages.phone">\n\n          <div class="error-message"\n\n            *ngIf="validations_form.get(\'phone\').hasError(validation.type) && (validations_form.get(\'phone\').dirty || validations_form.get(\'phone\').touched)">\n\n            <ion-icon name="information-circle-outline"></ion-icon> {{ validation.message }}\n\n          </div>\n\n        </ng-container>\n\n      </div>\n\n\n\n\n\n      <ion-item>\n\n        <ion-label floating>Alternative Contact number</ion-label>\n\n        <ion-input type="text" formControlName="alter"></ion-input>\n\n      </ion-item>\n\n      <div class="validation-errors">\n\n        <ng-container *ngFor="let validation of validation_messages.alter">\n\n          <div class="error-message"\n\n            *ngIf="validations_form.get(\'alter\').hasError(validation.type) && (validations_form.get(\'alter\').dirty || validations_form.get(\'alter\').touched)">\n\n            <ion-icon name="information-circle-outline"></ion-icon> {{ validation.message }}\n\n          </div>\n\n        </ng-container>\n\n      </div>\n\n\n\n\n\n      <ion-item>\n\n        <ion-label floating>Email</ion-label>\n\n        <ion-input type="email" formControlName="email"></ion-input>\n\n      </ion-item>\n\n      <div class="validation-errors">\n\n        <ng-container *ngFor="let validation of validation_messages.email">\n\n          <div class="error-message"\n\n            *ngIf="validations_form.get(\'email\').hasError(validation.type) && (validations_form.get(\'email\').dirty || validations_form.get(\'email\').touched)">\n\n            <ion-icon name="information-circle-outline"></ion-icon> {{ validation.message }}\n\n          </div>\n\n        </ng-container>\n\n      </div>\n\n\n\n      <ion-item>\n\n        <ion-label floating>Address</ion-label>\n\n        <ion-textarea formControlName="address"></ion-textarea>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label>Machine purchased</ion-label>\n\n        <ion-select formControlName="u_MachinePurchased">\n\n          <ion-option *ngFor="let mach of typesOfMachin" [value]="mach">\n\n            {{mach}}</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n      <div class="validation-errors">\n\n        <ng-container *ngFor="let validation of validation_messages.u_MachinePurchased">\n\n          <div class="error-message"\n\n            *ngIf="validations_form.get(\'u_MachinePurchased\').hasError(validation.type) && (validations_form.get(\'u_MachinePurchased\').dirty || validations_form.get(\'u_MachinePurchased\').touched)">\n\n            <ion-icon name="information-circle-outline"></ion-icon> {{ validation.message }}\n\n          </div>\n\n        </ng-container>\n\n      </div>\n\n\n\n      <ion-item>\n\n        <ion-label>Date of purchase</ion-label>\n\n        <ion-input type="Date" formControlName="u_dateOf_Purchased"></ion-input>\n\n      </ion-item>\n\n      <div class="validation-errors">\n\n        <ng-container *ngFor="let validation of validation_messages.u_MachinePurchased">\n\n          <div class="error-message"\n\n            *ngIf="validations_form.get(\'u_dateOf_Purchased\').hasError(validation.type) && (validations_form.get(\'u_dateOf_Purchased\').dirty || validations_form.get(\'u_dateOf_Purchased\').touched)">\n\n            <ion-icon name="information-circle-outline"></ion-icon> {{ validation.message }}\n\n          </div>\n\n        </ng-container>\n\n      </div>\n\n\n\n      <div formGroupName="matching_passwords">\n\n        <ion-item>\n\n          <ion-label position="floating" color="primary">Password</ion-label>\n\n          <ion-input type="password" formControlName="u_password"></ion-input>\n\n        </ion-item>\n\n        <div class="validation-errors">\n\n          <ng-container *ngFor="let validation of validation_messages.u_password">\n\n            <div class="error-message" *ngIf="validations_form.get(\'matching_passwords\').get(\'u_password\').hasError(validation.type) && (validations_form.get(\'matching_passwords\').get(\'u_password\').dirty || validations_form.get(\'matching_passwords\').get(\'u_password\').touched)">\n\n              <ion-icon name="information-circle-outline"></ion-icon> {{ validation.message }}\n\n            </div>\n\n          </ng-container>\n\n        </div>\n\n  \n\n        <ion-item>\n\n          <ion-label position="floating" color="primary">Confirm Password</ion-label>\n\n          <ion-input type="password" formControlName="u_cpassword"></ion-input>\n\n        </ion-item>\n\n        <div class="validation-errors">\n\n          <ng-container *ngFor="let validation of validation_messages.u_cpassword">\n\n            <div class="error-message" *ngIf="validations_form.get(\'matching_passwords\').get(\'u_cpassword\').hasError(validation.type) && (validations_form.get(\'matching_passwords\').get(\'u_cpassword\').dirty || validations_form.get(\'matching_passwords\').get(\'u_cpassword\').touched)">\n\n              <ion-icon name="information-circle-outline"></ion-icon> {{ validation.message }}\n\n            </div>\n\n          </ng-container>\n\n        </div>\n\n      </div>\n\n      <!-- These validations are for the form group -->\n\n      <div class="validation-errors">\n\n        <ng-container *ngFor="let validation of validation_messages.matching_passwords">\n\n          <div class="error-message" *ngIf="validations_form.get(\'matching_passwords\').hasError(validation.type) && (validations_form.get(\'matching_passwords\').get(\'u_cpassword\').dirty || validations_form.get(\'matching_passwords\').get(\'u_cpassword\').touched)">\n\n            <ion-icon name="information-circle-outline"></ion-icon> {{ validation.message }}\n\n          </div>\n\n        </ng-container>\n\n      </div>\n\n\n\n      <button full color="primary" class="submit-btn" expand="full" type="submit"\n\n        [disabled]="!validations_form.valid">Submit</button>\n\n    </form>\n\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"D:\Avinash\Mobile_App_learning\Shubham_App\src\pages\admin-create-customer\admin-create-customer.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__providers_rest_rest__["a" /* RestProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_rest_rest__["a" /* RestProvider */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _d || Object])
    ], AdminCreateCustomerPage);
    return AdminCreateCustomerPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=admin-create-customer.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminDashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__admin_create_customer_admin_create_customer__ = __webpack_require__(102);
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
    }
    AdminDashboardPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AdminDashboardPage');
    };
    AdminDashboardPage.prototype.createComplaint = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__admin_create_customer_admin_create_customer__["a" /* AdminCreateCustomerPage */], { user_id: this.navParams.get("user_id") });
    };
    AdminDashboardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-admin-dashboard',template:/*ion-inline-start:"D:\Avinash\Mobile_App_learning\Shubham_App\src\pages\admin-dashboard\admin-dashboard.html"*/'<!--\n\n  Generated template for the AdminDashboardPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      <ion-icon ios="ios-home" md="md-home"> Home</ion-icon>\n\n    </ion-title>\n\n    <ion-buttons right>\n\n      <button ion-button icon-only>\n\n        <ion-icon ios="ios-log-out" md="md-log-out"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <section class="container">\n\n    <ion-grid>\n\n      <ion-row class="firstContainer">\n\n        <ion-col class="createCustomer" (click)="createComplaint()">\n\n          <img src="../../assets/imgs/creatCust.jpeg">\n\n          Create Customer\n\n        </ion-col>\n\n        <ion-col class="createEngg">\n\n          <img src="../../assets/imgs/serviceEngg.png">\n\n          Create Service Enginner\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row class="firstContainer">\n\n          <ion-col class="createCustomer">\n\n            <img src="../../assets/imgs/assignService.png">\n\n            Assign Enginner\n\n          </ion-col>\n\n          <ion-col class="createEngg">\n\n            <img src="../../assets/imgs/viewComplaint.png">\n\n           View Complaint\n\n          </ion-col>\n\n        </ion-row>\n\n    </ion-grid>\n\n    <!-- <section class="firstContainer">\n\n      <div class="createCustomer">\n\n\n\n      </div>\n\n      <div class="createEngg">\n\n\n\n      </div>\n\n\n\n    </section> -->\n\n  </section>\n\n</ion-content>'/*ion-inline-end:"D:\Avinash\Mobile_App_learning\Shubham_App\src\pages\admin-dashboard\admin-dashboard.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], AdminDashboardPage);
    return AdminDashboardPage;
}());

//# sourceMappingURL=admin-dashboard.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnggAcceptComplaintPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__engg_view_complaint_engg_view_complaint__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__ = __webpack_require__(41);
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
            selector: 'page-engg-accept-complaint',template:/*ion-inline-start:"D:\Avinash\Mobile_App_learning\Shubham_App\src\pages\engg-accept-complaint\engg-accept-complaint.html"*/'<!--\n\n  Generated template for the AcceptComplaintPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Accept Complaint</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <!-- <ion-searchbar></ion-searchbar> -->\n\n  <!-- <ion-grid>\n\n    <ion-row>\n\n      <ion-col>\n\n        <div>\n\n          Comp. No.\n\n        </div>\n\n      </ion-col>\n\n      <ion-col>\n\n        <div>\n\n          Comp. Date\n\n        </div>\n\n      </ion-col>\n\n      <ion-col>\n\n        <div>\n\n          Action\n\n        </div>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row *ngFor="let c of complaintData">\n\n      <ion-col>\n\n        <div>\n\n          {{c.c_id}}\n\n        </div>\n\n      </ion-col>\n\n      <ion-col>\n\n        <div>\n\n          {{c.c_date}}\n\n        </div>\n\n      </ion-col>\n\n      <ion-col>\n\n        <div>\n\n          <button (click)="action(c)" ion-button>View</button>\n\n        </div>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid> -->\n\n\n\n  <table>\n\n    <thead>\n\n      <th> C.No</th>\n\n      <th> Complaint</th>\n\n      <th> Complaint Date </th>\n\n      <th> Action</th>\n\n    </thead>\n\n    <tbody>\n\n      <tr *ngFor="let c of complaintData">\n\n        <td> {{c.c_id}}</td>\n\n        <td>\n\n          {{c.c_desc}}\n\n        </td>\n\n        <td> {{c.c_date}}</td>\n\n        <td> <button (click)="action(c)" ion-button>View</button> </td>\n\n      </tr>\n\n    </tbody>\n\n  </table>\n\n</ion-content>'/*ion-inline-end:"D:\Avinash\Mobile_App_learning\Shubham_App\src\pages\engg-accept-complaint\engg-accept-complaint.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], EnggAcceptComplaintPage);
    return EnggAcceptComplaintPage;
}());

//# sourceMappingURL=engg-accept-complaint.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnggViewComplaintPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_toast_toast__ = __webpack_require__(79);
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
            selector: 'page-engg-view-complaint',template:/*ion-inline-start:"D:\Avinash\Mobile_App_learning\Shubham_App\src\pages\engg-view-complaint\engg-view-complaint.html"*/'<!--\n\n  Generated template for the EnggViewVomplaintPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Complaint Details</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <form (ngSubmit)="addData()">\n\n    <ion-grid>\n\n      <ion-row>\n\n        <ion-col col-5>\n\n          <div>\n\n            Complaint ID:\n\n          </div>\n\n        </ion-col>\n\n        <ion-col>\n\n          <div>\n\n            {{filterData.c_id}}\n\n          </div>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-5>\n\n          <div>\n\n            User name:\n\n          </div>\n\n        </ion-col>\n\n        <ion-col>\n\n          <div>\n\n            {{filterData.c_name}}\n\n          </div>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-5>\n\n          <div>\n\n            Mobile Number\n\n          </div>\n\n        </ion-col>\n\n        <ion-col>\n\n          <div>\n\n            {{filterData.u_mobile}}\n\n          </div>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-5>\n\n          <div>\n\n            Alternative Mobile:\n\n          </div>\n\n        </ion-col>\n\n        <ion-col>\n\n          <div>\n\n            {{filterData.u_altermobile}}\n\n          </div>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-5>\n\n          <div>\n\n            Email\n\n          </div>\n\n        </ion-col>\n\n        <ion-col>\n\n          <div>\n\n            {{filterData.u_email}}\n\n          </div>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-5>\n\n          <div>\n\n            Description\n\n          </div>\n\n        </ion-col>\n\n        <ion-col>\n\n          <div>\n\n            {{filterData.c_desc}}\n\n          </div>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-5>\n\n          <div>\n\n            Complaint Date\n\n          </div>\n\n        </ion-col>\n\n        <ion-col>\n\n          <div>\n\n            {{filterData.c_date}}\n\n          </div>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-5>\n\n          <div>\n\n            Photos\n\n          </div>\n\n        </ion-col>\n\n        <ion-col>\n\n          <div>\n\n            N/A\n\n          </div>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-5>\n\n          <div>\n\n            Status\n\n          </div>\n\n        </ion-col>\n\n        <ion-col>\n\n          <div>\n\n            {{filterData.c_status}}\n\n          </div>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-5>\n\n          <div>\n\n            Comments:\n\n          </div>\n\n        </ion-col>\n\n        <ion-col>\n\n          <div>\n\n            <ion-textarea placeholder="Enter your comments" name="description" [(ngModel)]="filterData.e_desc">\n\n            </ion-textarea>\n\n          </div>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-5>\n\n          <div>\n\n            Change Status:\n\n          </div>\n\n        </ion-col>\n\n        <ion-col>\n\n          <div>\n\n            <ion-select class="statusChange" [ngModelOptions]="{standalone: true}" [(ngModel)]="filterData.c_status">\n\n              <ion-option value="3" selected="true">Pending</ion-option>\n\n              <ion-option value="2">Close</ion-option>\n\n\n\n            </ion-select>\n\n          </div>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n    <button ion-button type="submit" block [disabled]="!filterData.e_desc">Add Data</button>\n\n  </form>\n\n</ion-content>'/*ion-inline-end:"D:\Avinash\Mobile_App_learning\Shubham_App\src\pages\engg-view-complaint\engg-view-complaint.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_toast_toast__["a" /* ToastProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], EnggViewComplaintPage);
    return EnggViewComplaintPage;
}());

//# sourceMappingURL=engg-view-complaint.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnggDashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__engg_accept_complaint_engg_accept_complaint__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__engg_view_previous_engg_view_previous__ = __webpack_require__(107);
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
    EnggDashboardPage.prototype.previousComplaint = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__engg_view_previous_engg_view_previous__["a" /* EnggViewPreviousPage */], { user_id: this.navParams.get("user_id") });
    };
    EnggDashboardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-engg-dashboard',template:/*ion-inline-start:"D:\Avinash\Mobile_App_learning\Shubham_App\src\pages\engg-dashboard\engg-dashboard.html"*/'<!--\n\n  Generated template for the AdminDashboardPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n        <ion-icon ios="ios-home" md="md-home"> Home</ion-icon>\n\n      </ion-title>\n\n    <ion-buttons right>\n\n      <button ion-button icon-only >\n\n        <ion-icon ios="ios-log-out" md="md-log-out"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n<section>\n\n  <div class="container" (click)="acceptComplaint($event)">\n\n    <div class="box">\n\n    <img src="../../assets/icon/fileaccept.png">\n\n    <label>Accpet complaint</label>\n\n    </div>\n\n  </div>\n\n  <hr>\n\n  <div class="container" (click)="previousComplaint()">\n\n      <div class="box">\n\n      <img src="../../assets/icon/filesearch.png">\n\n      <label>View previous complaint</label>\n\n      </div>\n\n  </div>\n\n\n\n</section>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Avinash\Mobile_App_learning\Shubham_App\src\pages\engg-dashboard\engg-dashboard.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], EnggDashboardPage);
    return EnggDashboardPage;
}());

//# sourceMappingURL=engg-dashboard.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnggViewPreviousPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(41);
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
            selector: 'page-engg-view-previous',template:/*ion-inline-start:"D:\Avinash\Mobile_App_learning\Shubham_App\src\pages\engg-view-previous\engg-view-previous.html"*/'<!--\n\n  Generated template for the AcceptComplaintPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Closed Complaint</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <!-- <ion-searchbar></ion-searchbar> -->\n\n  <table>\n\n    <thead>\n\n      <th> C.No</th>\n\n      <th> Complaint</th>\n\n      <th> Complaint Date </th>\n\n      <th> Action</th>\n\n    </thead>\n\n    <tbody>\n\n      <tr *ngFor="let c of complaintData">\n\n        <td> {{c.c_id}}</td>\n\n        <td>\n\n          {{c.c_desc}}\n\n        </td>\n\n        <td> {{c.c_date}}</td>\n\n        <td> {{c.e_desc}} </td>\n\n      </tr>\n\n    </tbody>\n\n  </table>\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"D:\Avinash\Mobile_App_learning\Shubham_App\src\pages\engg-view-previous\engg-view-previous.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], EnggViewPreviousPage);
    return EnggViewPreviousPage;
}());

//# sourceMappingURL=engg-view-previous.js.map

/***/ }),

/***/ 119:
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
webpackEmptyAsyncContext.id = 119;

/***/ }),

/***/ 161:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/admin-create-customer/admin-create-customer.module": [
		285,
		5
	],
	"../pages/admin-dashboard/admin-dashboard.module": [
		286,
		4
	],
	"../pages/engg-accept-complaint/engg-accept-complaint.module": [
		287,
		3
	],
	"../pages/engg-dashboard/engg-dashboard.module": [
		288,
		2
	],
	"../pages/engg-view-complaint/engg-view-complaint.module": [
		289,
		1
	],
	"../pages/engg-view-previous/engg-view-previous.module": [
		290,
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
webpackAsyncContext.id = 161;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__engg_dashboard_engg_dashboard__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_loader_loader__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_toast_toast__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__admin_dashboard_admin_dashboard__ = __webpack_require__(103);
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
    }
    HomePage.prototype.ionViewDidLoad = function () {
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
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__admin_dashboard_admin_dashboard__["a" /* AdminDashboardPage */], { user_id: data.data.u_id });
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
            selector: 'page-home',template:/*ion-inline-start:"D:\Avinash\Mobile_App_learning\Shubham_App\src\pages\home\home.html"*/'<ion-content padding>\n\n  <form class="loginScreen"  #loginForm="ngForm" (ngSubmit)="login(loginForm)">\n\n      <ion-grid>\n\n        <ion-row color="primary" justify-content-center>\n\n          <ion-col align-self-center size-md="6" size-lg="5" size-xs="12">\n\n            <div text-center>\n\n              <h3>login</h3>\n\n            </div>\n\n            <div padding>\n\n\n\n              <ion-item>\n\n                <ion-input name="email" type="email" placeholder="your@email.com" ngModel required></ion-input>\n\n              </ion-item>\n\n              <ion-item>\n\n                <ion-input name="password" type="password" placeholder="Password" ngModel required></ion-input>\n\n              </ion-item>\n\n            </div>\n\n            <div padding>\n\n                <button ion-button full type="submit">Submit</button>\n\n            </div>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n    </form>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Avinash\Mobile_App_learning\Shubham_App\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_5__providers_toast_toast__["a" /* ToastProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_loader_loader__["a" /* LoaderProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__["a" /* RestProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoaderProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
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

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(228);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_engg_dashboard_engg_dashboard__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_rest_rest__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_engg_view_complaint_engg_view_complaint__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_engg_accept_complaint_engg_accept_complaint__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_engg_view_previous_engg_view_previous__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_admin_dashboard_admin_dashboard__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_admin_create_customer_admin_create_customer__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_common_http__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_loader_loader__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_toast_toast__ = __webpack_require__(79);
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
                __WEBPACK_IMPORTED_MODULE_10__pages_engg_accept_complaint_engg_accept_complaint__["a" /* EnggAcceptComplaintPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_engg_view_previous_engg_view_previous__["a" /* EnggViewPreviousPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_admin_dashboard_admin_dashboard__["a" /* AdminDashboardPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_admin_create_customer_admin_create_customer__["a" /* AdminCreateCustomerPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/admin-create-customer/admin-create-customer.module#AdminCreateCustomerPageModule', name: 'AdminCreateCustomerPage', segment: 'admin-create-customer', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/admin-dashboard/admin-dashboard.module#AdminDashboardPageModule', name: 'AdminDashboardPage', segment: 'admin-dashboard', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/engg-accept-complaint/engg-accept-complaint.module#EnggAcceptComplaintPageModule', name: 'EnggAcceptComplaintPage', segment: 'engg-accept-complaint', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/engg-dashboard/engg-dashboard.module#EnggDashboardPageModule', name: 'EnggDashboardPage', segment: 'engg-dashboard', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/engg-view-complaint/engg-view-complaint.module#EnggViewComplaintPageModule', name: 'EnggViewComplaintPage', segment: 'engg-view-complaint', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/engg-view-previous/engg-view-previous.module#EnggViewPreviousPageModule', name: 'EnggViewPreviousPage', segment: 'engg-view-previous', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_14__angular_common_http__["b" /* HttpClientModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_engg_dashboard_engg_dashboard__["a" /* EnggDashboardPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_engg_view_complaint_engg_view_complaint__["a" /* EnggViewComplaintPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_engg_accept_complaint_engg_accept_complaint__["a" /* EnggAcceptComplaintPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_engg_view_previous_engg_view_previous__["a" /* EnggViewPreviousPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_admin_dashboard_admin_dashboard__["a" /* AdminDashboardPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_admin_create_customer_admin_create_customer__["a" /* AdminCreateCustomerPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_8__providers_rest_rest__["a" /* RestProvider */],
                __WEBPACK_IMPORTED_MODULE_15__providers_loader_loader__["a" /* LoaderProvider */],
                __WEBPACK_IMPORTED_MODULE_16__providers_toast_toast__["a" /* ToastProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 253:
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

/***/ 259:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppSettings; });
var AppSettings = /** @class */ (function () {
    function AppSettings() {
    }
    //  public static baseUrl:string="https://thawing-eyrie-14958.herokuapp.com/";
    AppSettings.baseUrl = "http://localhost:3000/";
    return AppSettings;
}());

//# sourceMappingURL=app.settings.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(205);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\Avinash\Mobile_App_learning\Shubham_App\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"D:\Avinash\Mobile_App_learning\Shubham_App\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_settings__ = __webpack_require__(259);
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
    RestProvider.prototype.getCustomerDetails = function (id) {
        var data = {
            "u_id": id
        };
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__app_app_settings__["a" /* AppSettings */].baseUrl + 'users/getAll', data);
    };
    RestProvider.prototype.updateComplaint = function (updatedate) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__app_app_settings__["a" /* AppSettings */].baseUrl + 'complaint/updateComplaint', updatedate);
    };
    RestProvider.prototype.createCustomer = function (userData) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__app_app_settings__["a" /* AppSettings */].baseUrl + 'users/createUser', userData);
    };
    RestProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
    ], RestProvider);
    return RestProvider;
    var _a;
}());

//# sourceMappingURL=rest.js.map

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToastProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
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

/***/ })

},[207]);
//# sourceMappingURL=main.js.map