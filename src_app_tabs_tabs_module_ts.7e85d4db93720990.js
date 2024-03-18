(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tabs_tabs_module_ts"],{

/***/ 6045:
/*!*********************************************!*\
  !*** ./src/app/tabs/tabs-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TabsPageRoutingModule: () => (/* binding */ TabsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs.page */ 3840);




const routes = [{
  path: 't',
  component: _tabs_page__WEBPACK_IMPORTED_MODULE_0__.TabsPage,
  children: [{
    path: '',
    redirectTo: '/t/ho-so',
    pathMatch: 'full'
  }, {
    path: 'ho-so',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_service_hoso_service_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_ho-so_ho-so_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../ho-so/ho-so.module */ 8041)).then(m => m.HoSoPageModule)
  }, {
    path: 'cai-dat',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_service_hoso_service_ts"), __webpack_require__.e("src_app_cai-dat_cai-dat_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../cai-dat/cai-dat.module */ 2644)).then(m => m.CaiDatPageModule)
  }, {
    path: 'dong-gop',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_dong-gop_dong-gop_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../dong-gop/dong-gop.module */ 2374)).then(m => m.DongGopPageModule)
  }]
}, {
  path: '',
  redirectTo: '/t/ho-so',
  pathMatch: 'full'
}];
let TabsPageRoutingModule = class TabsPageRoutingModule {};
TabsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)]
})], TabsPageRoutingModule);


/***/ }),

/***/ 5040:
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TabsPageModule: () => (/* binding */ TabsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 4210);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs-routing.module */ 6045);
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.page */ 3840);







let TabsPageModule = class TabsPageModule {};
TabsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _tabs_routing_module__WEBPACK_IMPORTED_MODULE_0__.TabsPageRoutingModule],
  declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_1__.TabsPage]
})], TabsPageModule);


/***/ }),

/***/ 3840:
/*!***********************************!*\
  !*** ./src/app/tabs/tabs.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TabsPage: () => (/* binding */ TabsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _tabs_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs.page.html?ngResource */ 5230);
/* harmony import */ var _tabs_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.page.scss?ngResource */ 2146);
/* harmony import */ var _tabs_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tabs_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;




let TabsPage = (_class = class TabsPage {
  constructor() {}
  ionViewWillEnter() {
    try {
      var _document$getElementB;
      (_document$getElementB = document.getElementById("loadingdiv")) === null || _document$getElementB === void 0 || _document$getElementB.remove();
    } catch (error) {}
  }
}, _class.ctorParameters = () => [], _class);
TabsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-tabs',
  template: _tabs_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_tabs_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], TabsPage);


/***/ }),

/***/ 2146:
/*!************************************************!*\
  !*** ./src/app/tabs/tabs.page.scss?ngResource ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 2487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 1386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ``, "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 5230:
/*!************************************************!*\
  !*** ./src/app/tabs/tabs.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-tabs>\r\n\r\n  <ion-tab-bar slot=\"bottom\" color=\"primary\">\r\n    <ion-tab-button tab=\"xuat-file\" *ngIf=\"false\">\r\n      <ion-icon name=\"thunderstorm\"></ion-icon>\r\n      <ion-label>Xuất file</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab=\"ho-so\">\r\n      <ion-icon name=\"bookmarks\"></ion-icon>\r\n      <ion-label>Hồ sơ</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab=\"cai-dat\">\r\n      <ion-icon name=\"cog\"></ion-icon>\r\n      <ion-label>Cài đặt</ion-label>\r\n    </ion-tab-button>\r\n    <ion-tab-button tab=\"dong-gop\">\r\n      <ion-icon name=\"diamond-outline\"></ion-icon>\r\n      <ion-label>Đóng góp</ion-label>\r\n    </ion-tab-button>\r\n  </ion-tab-bar>\r\n\r\n</ion-tabs>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_tabs_tabs_module_ts.7e85d4db93720990.js.map