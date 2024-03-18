(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_dong-gop_dong-gop_module_ts"],{

/***/ 8316:
/*!*****************************************************!*\
  !*** ./src/app/dong-gop/dong-gop-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DongGopPageRoutingModule: () => (/* binding */ DongGopPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 1124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 4040);
/* harmony import */ var _dong_gop_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dong-gop.page */ 4680);




const routes = [{
  path: '',
  component: _dong_gop_page__WEBPACK_IMPORTED_MODULE_0__.DongGopPage
}];
let DongGopPageRoutingModule = class DongGopPageRoutingModule {};
DongGopPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], DongGopPageRoutingModule);


/***/ }),

/***/ 4660:
/*!*********************************************!*\
  !*** ./src/app/dong-gop/dong-gop.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DongGopPageModule: () => (/* binding */ DongGopPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 1124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 2676);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1904);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8848);
/* harmony import */ var _dong_gop_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dong-gop-routing.module */ 8316);
/* harmony import */ var _dong_gop_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dong-gop.page */ 4680);







let DongGopPageModule = class DongGopPageModule {};
DongGopPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _dong_gop_routing_module__WEBPACK_IMPORTED_MODULE_0__.DongGopPageRoutingModule],
  declarations: [_dong_gop_page__WEBPACK_IMPORTED_MODULE_1__.DongGopPage]
})], DongGopPageModule);


/***/ }),

/***/ 4680:
/*!*******************************************!*\
  !*** ./src/app/dong-gop/dong-gop.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DongGopPage: () => (/* binding */ DongGopPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 1124);
/* harmony import */ var _dong_gop_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dong-gop.page.html?ngResource */ 2732);
/* harmony import */ var _dong_gop_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dong-gop.page.scss?ngResource */ 6064);
/* harmony import */ var _dong_gop_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_dong_gop_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _service_toast_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/toast-service.service */ 7616);
var _DongGopPage;





let DongGopPage = (_DongGopPage = class DongGopPage {
  constructor(toastController) {
    this.toastController = toastController;
    this.TKNH = 101867846041;
    this.TKMOMO = "0394446896";
    this.donggopkimcuong = [{
      name: "Tên hiển thị",
      tengoithuong: "Tên gọi thường",
      loinhan: "Lời nhắn"
    }];
    this.donggopruby = [{
      name: "Tên hiển thị",
      tengoithuong: "Tên gọi thường",
      loinhan: "Lời nhắn"
    }];
    this.donggopvang = [{
      name: "Tên hiển thị",
      tengoithuong: "Tên gọi thường",
      loinhan: "Lời nhắn"
    }];
  }
  ngOnInit() {}
  copyTKNH() {
    try {
      navigator.clipboard.writeText(this.TKNH);
      this.toastController.presentToast({
        message: `Đã copy số TK ngân hàng: ${this.TKNH}`
      });
    } catch (error) {
      this.toastController.presentToast({
        message: `KHÔNG thể số TK ngân hàng`
      });
    }
  }
  copyTKMOMO() {
    try {
      navigator.clipboard.writeText(this.TKMOMO);
      this.toastController.presentToast({
        message: `Đã copy số TK Momo: ${this.TKMOMO}`
      });
    } catch (error) {
      this.toastController.presentToast({
        message: `KHÔNG thể số TK Momo`
      });
    }
  }
}, _DongGopPage.ctorParameters = () => [{
  type: _service_toast_service_service__WEBPACK_IMPORTED_MODULE_2__.ToastService
}], _DongGopPage);
DongGopPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-dong-gop',
  template: _dong_gop_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_dong_gop_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], DongGopPage);


/***/ }),

/***/ 7616:
/*!**************************************************!*\
  !*** ./src/app/service/toast-service.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ToastService: () => (/* binding */ ToastService)
/* harmony export */ });
/* harmony import */ var G_HOAI_code_frontend_exceltoanki_soure_code_v2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 5392);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 1124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 8848);

var _ToastService;



let ToastService = (_ToastService = class ToastService {
  constructor(toastController) {
    this.toastController = toastController;
  }
  presentToast(args) {
    var _this = this;
    return (0,G_HOAI_code_frontend_exceltoanki_soure_code_v2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this.toast) _this.toast.dismiss();
      args.duration = args.duration ? args.duration : 1000;
      args.cssClass = args.cssClass ? args.cssClass : "toast-service";
      args.color = args.color ? args.color : "secondary";
      args.keyboardClose = true;
      args.buttons = args.buttons ? args.buttons : [{
        side: 'end',
        role: 'close',
        icon: 'close'
      }];
      _this.toast = yield _this.toastController.create(args);
      _this.toast.present();
    })();
  }
  helper(args) {
    var _this2 = this;
    return (0,G_HOAI_code_frontend_exceltoanki_soure_code_v2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const toast = yield _this2.toastController.create({
        header: (args === null || args === void 0 ? void 0 : args.header) || 'Giải thích',
        message: (args === null || args === void 0 ? void 0 : args.msg) || '',
        position: 'top',
        color: "danger",
        cssClass: "toast-helper",
        buttons: [{
          side: 'start',
          icon: 'help-circle-outline'
        }, {
          text: 'Thêm',
          role: 'openlink',
          handler: () => {
            window.open(args.link, "_blank");
          }
        }, {
          text: 'OK',
          role: 'cancel'
        }]
      });
      yield toast.present();
    })();
  }
  /*
  Thông báo khi tạo Ankipakage ở trang hồ sơ
   */
  infoCreatingAnki(args) {
    var _this3 = this;
    return (0,G_HOAI_code_frontend_exceltoanki_soure_code_v2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this3.toast) _this3.toast.dismiss();
      args.duration = args.duration ? args.duration : 1000;
      args.cssClass = args.cssClass ? args.cssClass : "toast-service";
      args.color = args.color ? args.color : "secondary";
      args.keyboardClose = true;
      args.buttons = args.buttons ? args.buttons : [{
        side: 'end',
        role: 'close',
        icon: 'close'
      }];
      _this3.toast = yield _this3.toastController.create(args);
      _this3.toast.present();
    })();
  }
}, _ToastService.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.ToastController
}], _ToastService);
ToastService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
  providedIn: 'root'
})], ToastService);


/***/ }),

/***/ 6064:
/*!********************************************************!*\
  !*** ./src/app/dong-gop/dong-gop.page.scss?ngResource ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 9728);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 7804);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.buttoncopytknh {
  position: absolute;
  right: 0px;
  top: -10px;
}

@media (max-width: 600px) {
  ion-content ion-button .hideme {
    display: none;
  }
}

.banquyen a {
  color: rgb(0, 0, 0);
}

@media screen and (prefers-color-scheme: dark) {
  .banquyen a {
    color: rgb(243, 241, 241);
  }
}
ion-text h3:first-child, ion-text h4:first-child, ion-text h5:first-child {
  border-bottom: solid var(--ion-color-primary) 3px;
  border-radius: 10px;
}`, "",{"version":3,"sources":["webpack://./src/app/dong-gop/dong-gop.page.scss"],"names":[],"mappings":"AAAA;EACE,kBAAA;EACA,UAAA;EACA,UAAA;AACF;;AAEE;EAEI;IACE,aAAA;EAAN;AACF;;AAKE;EACE,mBAAA;AAFJ;;AAKA;EAEI;IACE,yBAAA;EAHJ;AACF;AAOE;EACE,iDAAA;EACA,mBAAA;AALJ","sourcesContent":[".buttoncopytknh {\r\n  position: absolute;\r\n  right: 0px;\r\n  top: -10px;\r\n}\r\nion-content {\r\n  @media (max-width: 600px) {\r\n    ion-button {\r\n      .hideme {\r\n        display: none;\r\n      }\r\n    }\r\n  }\r\n}\r\n.banquyen {\r\n  a {\r\n    color: rgb(0, 0, 0);\r\n  }\r\n}\r\n@media screen and (prefers-color-scheme: dark) {\r\n  .banquyen {\r\n    a {\r\n      color: rgb(243, 241, 241);\r\n    }\r\n  }\r\n}\r\nion-text {\r\n  h3:first-child, h4:first-child, h5:first-child {\r\n    border-bottom: solid var(--ion-color-primary) 3px;\r\n    border-radius: 10px;\r\n  }\r\n  \r\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 2732:
/*!********************************************************!*\
  !*** ./src/app/dong-gop/dong-gop.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-title>Đóng góp</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\">\r\n  <p>\r\n    Ứng dụng được tạo bởi Bs. Trần Quốc Hoài,\r\n    <b>hoàn toàn miễn phí và mãi mãi là miễn phí</b>.\r\n  </p>\r\n  <p>\r\n    Ứng dụng lưu dữ liệu trên trình duyệt web của người dùng. Và\r\n    <b>không lưu bất kỳ dữ liệu cá nhân nào</b> của bạn trên bất kỳ server nào.\r\n  </p>\r\n  <p>\r\n    Tính năng <b>server cá nhân</b> sẽ được hướng dẫn để bạn tự tạo và sử dụng,\r\n    server đó sẽ chỉ hoạt động cho riêng bạn, với mục đích đồng bộ dữ liệu giữa\r\n    các thiết bị của bạn. <br />Server cá nhân do chính bạn tạo theo hướng dẫn\r\n    của tôi, và do chính bạn quản lý. Bạn có thể share đường dẫn cho cá nhân\r\n    khác nếu bạn muốn.<br />\r\n  </p>\r\n  <section>\r\n    <ion-text>\r\n      <h3>Tác giả</h3>\r\n      <h5>Bs. Trần Quốc Hoài</h5>\r\n      <p>\r\n        <b>Nhóm Zalo: </b>\r\n        <a href=\"https://zalo.me/g/njgdex630\" target=\"_blank\"\r\n          >https://zalo.me/g/njgdex630</a\r\n        >\r\n      </p>\r\n      <p>\r\n        <b>Youtube: </b>\r\n        <a\r\n          href=\"https://www.youtube.com/channel/UChtMUdkzlLgpklOXSf-ODlg\"\r\n          target=\"_blank\"\r\n          >kênh Youtube của tôi</a\r\n        >\r\n      </p>\r\n      <p>\r\n        <b>Email: </b>\r\n        <a href=\"mailto:bsquochoainew@gmail.com\" target=\"_blank\"\r\n          >bsquochoainew&#64;gmail.com</a\r\n        >\r\n      </p>\r\n      <p>\r\n        <b>Góp ý: </b>\r\n        <a href=\"https://forms.gle/hHTwKxXXsdvMk2bi9\" target=\"_blank\"\r\n          >Gửi góp ý cải thiện phần mềm</a\r\n        >\r\n      </p>\r\n    </ion-text>\r\n  </section>\r\n  <ion-text><h3>Tặng tôi 1 cốc cà phê.</h3></ion-text>\r\n\r\n  <ion-grid fixed>\r\n    <ion-row>\r\n      <ion-col size=\"4\"><b>Tên chủ tài khoản</b></ion-col>\r\n      <ion-col size=\"8\">TRẦN QUỐC HOÀI</ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col size=\"4\"><b>Tài khoản Viettinbank</b></ion-col>\r\n      <ion-col size=\"8\">\r\n        {{TKNH}}\r\n        <ion-button\r\n          (click)=\"copyTKNH()\"\r\n          class=\"buttoncopytknh\"\r\n          fill=\"clear\"\r\n          shape=\"round\"\r\n        >\r\n          <ion-icon slot=\"start\" name=\"copy-outline\"></ion-icon>\r\n          <span class=\"hideme\">Chép TKNH</span>\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col size=\"4\"><b>Tài khoản Momo</b></ion-col>\r\n      <ion-col size=\"8\">\r\n        {{TKMOMO}}\r\n        <ion-button\r\n          (click)=\"copyTKMOMO()\"\r\n          class=\"buttoncopytknh\"\r\n          fill=\"clear\"\r\n          shape=\"round\"\r\n        >\r\n          <ion-icon slot=\"start\" name=\"copy-outline\"></ion-icon>\r\n          <span class=\"hideme\">Chép TK MOMO</span>\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  <ion-text>\r\n    <h3>Danh sách đóng góp Kim cương 💎</h3>\r\n    <p>\r\n      Đây là danh sách 3 thành viên hỗ trợ dự án nhiều nhất và lời nhắn của các\r\n      vị.\r\n    </p>\r\n    <ion-list>\r\n      <ion-item>\r\n        <ion-avatar slot=\"start\">\r\n          <img src=\"/svg/person-circle-sharp.svg\" />\r\n        </ion-avatar>\r\n        <ion-label>\r\n          <h2>Phạm Nhật Huy</h2>\r\n          <p>\r\n            E cảm ơn a.. em mời a ly cafe.. em học được là phải trả phí anh ạ\r\n          </p>\r\n        </ion-label>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-avatar slot=\"start\">\r\n          <img src=\"/svg/person-circle-sharp.svg\" />\r\n        </ion-avatar>\r\n        <ion-label>\r\n          <h2>\r\n            <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\r\n          </h2>\r\n          <h3>\r\n            <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\r\n          </h3>\r\n          <p>\r\n            <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\r\n          </p>\r\n        </ion-label>\r\n      </ion-item>\r\n    </ion-list>\r\n  </ion-text>\r\n  <ion-text>\r\n    <h4>Danh sách đóng góp Ruby 💍</h4>\r\n    <p>\r\n      Đây là danh sách 5 thành viên hỗ trợ dự án tiếp theo. Thứ tự được sắp xếp\r\n      ngẫu nhiên\r\n    </p>\r\n    <ion-list>\r\n      <ion-item>\r\n        <ion-avatar slot=\"start\">\r\n          <img src=\"/svg/person-circle-sharp.svg\" />\r\n        </ion-avatar>\r\n        <ion-label>\r\n          <h2>\r\n            <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\r\n          </h2>\r\n          <p>\r\n            <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\r\n          </p>\r\n        </ion-label>\r\n      </ion-item>\r\n    </ion-list>\r\n  </ion-text>\r\n\r\n  <ion-text>\r\n    <h5>Danh sách đóng góp Vàng 🏆</h5>\r\n    <p>\r\n      Đây là danh sách 20 thành viên hỗ trợ dự án, được chọn\r\n      <b>ngẫu nhiên</b> trong những thành viên đóng góp còn lại.\r\n    </p>\r\n  </ion-text>\r\n  <section class=\"banquyen\">\r\n    <h5>Bản quyền</h5>\r\n    <ion-text>\r\n      <p></p>\r\n      <h5>Excel to anki by drquochoai</h5>\r\n      <p>\r\n        <a target=\"_blank\" href=\"https://opensource.org/licenses/AGPL-3.0\"\r\n          >GNU Affero General Public License v3</a\r\n        >\r\n        <br />Copyright (c) 2024 Ho Chi Minh City\r\n      </p>\r\n    </ion-text>\r\n  </section>\r\n  <section class=\"banquyen\">\r\n    <h5>Bản quyền các mã nguồn khác được sử dụng</h5>\r\n    <ion-item>\r\n      <ion-label>Hiển thị</ion-label>\r\n      <ion-toggle [(ngModel)]=\"openLicense\" color=\"secondary\"></ion-toggle>\r\n    </ion-item>\r\n\r\n    <div *ngIf=\"openLicense\">\r\n      <ion-text>\r\n        <h3 id=\"-genanki-js-\"><a target=\"_blank\" href=\"\">genanki-js</a></h3>\r\n        <p>\r\n          <a target=\"_blank\" href=\"https://opensource.org/licenses/AGPL-3.0\"\r\n            >GNU Affero General Public License v3</a\r\n          >\r\n          <br />Copyright (c) 2021 Mani\r\n        </p>\r\n\r\n        <h3 id=\"-sql-js-https-github-com-sql-js-sql-js-\">\r\n          <a target=\"_blank\" href=\"https://github.com/sql-js/sql.js\">sql.js</a>\r\n        </h3>\r\n        <p>\r\n          <a\r\n            target=\"_blank\"\r\n            href=\"https://github.com/sql-js/sql.js/blob/master/LICENSE\"\r\n            >The MIT License</a\r\n          >\r\n          <br />Copyright (c) 2017 sql.js authors (see AUTHORS)\r\n        </p>\r\n        <h3 id=\"-jszip-https-github-com-stuk-jszip-\">\r\n          <a target=\"_blank\" href=\"https://github.com/Stuk/jszip\">JSZip</a>\r\n        </h3>\r\n        <p>\r\n          JSZip is dual-licensed. You may use it under the MIT license or the\r\n          GPLv3 license. See\r\n          <a\r\n            target=\"_blank\"\r\n            href=\"https://github.com/Stuk/jszip/blob/master/LICENSE.markdown\"\r\n            >JSZip LICENSE.markdown</a\r\n          >.\r\n        </p>\r\n        <h3 id=\"-filesaver-js-https-github-com-eligrey-filesaver-js-\">\r\n          <a target=\"_blank\" href=\"https://github.com/eligrey/FileSaver.js\"\r\n            >FileSaver.js</a\r\n          >\r\n        </h3>\r\n        <p>\r\n          <a\r\n            target=\"_blank\"\r\n            href=\"https://github.com/eligrey/FileSaver.js/blob/master/LICENSE.md\"\r\n            >The MIT License</a\r\n          >\r\n          <br />Copyright © 2016 Eli Grey.\r\n        </p>\r\n        <h3 id=\"-mkanki-https-github-com-nornagon-mkanki-\">\r\n          <a target=\"_blank\" href=\"https://github.com/nornagon/mkanki\"\r\n            >mkanki</a\r\n          >\r\n        </h3>\r\n        <p>\r\n          <a target=\"_blank\" href=\"https://opensource.org/licenses/AGPL-3.0\"\r\n            >GNU Affero General Public License v3</a\r\n          >\r\n          <br />Copyright (c) 2018 Jeremy Apthorp\r\n        </p>\r\n        <h3 id=\"-js-sha256-https-github-com-emn178-js-sha256-\">\r\n          <a target=\"_blank\" href=\"https://github.com/emn178/js-sha256\"\r\n            >js-sha256</a\r\n          >\r\n        </h3>\r\n        <p>\r\n          <a\r\n            target=\"_blank\"\r\n            href=\"https://github.com/emn178/js-sha256/blob/master/LICENSE.txt\"\r\n            >The MIT License</a\r\n          >\r\n          <br />Copyright (c) Chen, Yi-Cyuan 2017\r\n        </p>\r\n        <h3 id=\"-genanki-https-github-com-kerrickstaley-genanki-\">\r\n          <a target=\"_blank\" href=\"https://github.com/kerrickstaley/genanki\"\r\n            >genanki</a\r\n          >\r\n        </h3>\r\n        <p>\r\n          <a\r\n            href=\"https://github.com/kerrickstaley/genanki/blob/master/LICENSE.txt\"\r\n            >The MIT License</a\r\n          >\r\n          <br />Copyright (c) Kerrick Staley 2021\r\n        </p>\r\n      </ion-text>\r\n    </div>\r\n  </section>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_dong-gop_dong-gop_module_ts.c6ba100197349a6c.js.map