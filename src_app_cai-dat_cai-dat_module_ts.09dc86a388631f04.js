(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_cai-dat_cai-dat_module_ts"],{

/***/ 9884:
/*!***************************************************!*\
  !*** ./src/app/cai-dat/cai-dat-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CaiDatPageRoutingModule: () => (/* binding */ CaiDatPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 1124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 4040);
/* harmony import */ var _cai_dat_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cai-dat.page */ 9484);




const routes = [{
  path: '',
  component: _cai_dat_page__WEBPACK_IMPORTED_MODULE_0__.CaiDatPage
}];
let CaiDatPageRoutingModule = class CaiDatPageRoutingModule {};
CaiDatPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], CaiDatPageRoutingModule);


/***/ }),

/***/ 3444:
/*!*******************************************!*\
  !*** ./src/app/cai-dat/cai-dat.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CaiDatPageModule: () => (/* binding */ CaiDatPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 1124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 2676);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1904);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8848);
/* harmony import */ var _cai_dat_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cai-dat-routing.module */ 9884);
/* harmony import */ var _cai_dat_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cai-dat.page */ 9484);







let CaiDatPageModule = class CaiDatPageModule {};
CaiDatPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _cai_dat_routing_module__WEBPACK_IMPORTED_MODULE_0__.CaiDatPageRoutingModule],
  declarations: [_cai_dat_page__WEBPACK_IMPORTED_MODULE_1__.CaiDatPage]
})], CaiDatPageModule);


/***/ }),

/***/ 9484:
/*!*****************************************!*\
  !*** ./src/app/cai-dat/cai-dat.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CaiDatPage: () => (/* binding */ CaiDatPage)
/* harmony export */ });
/* harmony import */ var G_HOAI_code_frontend_exceltoanki_soure_code_v2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 5392);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 1124);
/* harmony import */ var _cai_dat_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cai-dat.page.html?ngResource */ 9664);
/* harmony import */ var _cai_dat_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cai-dat.page.scss?ngResource */ 4796);
/* harmony import */ var _cai_dat_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_cai_dat_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _service_toast_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/toast-service.service */ 7616);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 8848);
/* harmony import */ var _service_syncDeta_sync_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/syncDeta/sync.service */ 3163);

var _CaiDatPage;







let CaiDatPage = (_CaiDatPage = class CaiDatPage {
  // serverValid: boolean = false
  constructor(toastController, modalController, syncService) {
    this.toastController = toastController;
    this.modalController = modalController;
    this.syncService = syncService;
    this.openLicense = false;
    this.githubtoken = '';
    this.init();
  }
  init() {
    return (0,G_HOAI_code_frontend_exceltoanki_soure_code_v2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {})();
  }
  change_DataSync() {
    this.syncService.saveToStorage();
    // console.log("linkChanged")
  }
}, _CaiDatPage.ctorParameters = () => [{
  type: _service_toast_service_service__WEBPACK_IMPORTED_MODULE_3__.ToastService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController
}, {
  type: _service_syncDeta_sync_service__WEBPACK_IMPORTED_MODULE_4__.SyncService
}], _CaiDatPage);
CaiDatPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-cai-dat',
  template: _cai_dat_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_cai_dat_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], CaiDatPage);


/***/ }),

/***/ 3163:
/*!**************************************************!*\
  !*** ./src/app/service/syncDeta/sync.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SyncService: () => (/* binding */ SyncService)
/* harmony export */ });
/* harmony import */ var G_HOAI_code_frontend_exceltoanki_soure_code_v2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 5392);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 1124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage-angular */ 4528);
/* harmony import */ var _CAIDAT__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../CAIDAT */ 5331);
/* harmony import */ var _toast_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toast-service.service */ 7616);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 1332);
/* harmony import */ var _hoso_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hoso.service */ 4407);

var _SyncService;







let SyncService = (_SyncService = class SyncService {
  constructor(storage, toastController, httpClient, hosoService) {
    this.storage = storage;
    this.toastController = toastController;
    this.httpClient = httpClient;
    this.hosoService = hosoService;
    this.syncData = {
      detaServer: {}
    };
    this.serverValid = false;
    this.serverValidInfo = _CAIDAT__WEBPACK_IMPORTED_MODULE_1__.CAIDAT.sync.infoLoiServer;
    this.syncInProgress = false;
    this._storage = null;
    this.serverSyncHoSo = [];
    this.serverSyncHoSo_Keys = [];
    this.init();
  }
  init() {
    var _this = this;
    return (0,G_HOAI_code_frontend_exceltoanki_soure_code_v2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const storage = yield _this.storage.create();
      _this._storage = storage;
      // Get link and secretkey of local
      yield _this._storage.get(_CAIDAT__WEBPACK_IMPORTED_MODULE_1__.CAIDAT.sync.syncKeyStorage).then(re => {
        if (re) {
          _this.syncData = re;
        } else {
          _this.saveToStorage();
        }
      });
      // check server valid
      _this.isServerValid();
    })();
  }
  saveToStorage() {
    var _this2 = this;
    return (0,G_HOAI_code_frontend_exceltoanki_soure_code_v2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var _this2$_storage;
      if (_this2.syncData.detaServer.link == '') {
        _this2.syncData.detaServer.link = 'https://deta.space';
      }
      yield _this2.toastController.presentToast({
        message: 'Đã lưu cài đặt',
        color: 'danger'
      });
      (_this2$_storage = _this2._storage) === null || _this2$_storage === void 0 || _this2$_storage.set(_CAIDAT__WEBPACK_IMPORTED_MODULE_1__.CAIDAT.sync.syncKeyStorage, _this2.syncData);
      // check valid
      _this2.isServerValid();
    })();
  }
  // This code assumes the existence of a function to post data to the server and a model for the server response.
  // You will need to replace `postToServer` with your actual HTTP POST function,
  // and `ServerResponse` with the actual response type you expect from the server.
  isServerValid() {
    var _this3 = this;
    return (0,G_HOAI_code_frontend_exceltoanki_soure_code_v2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const response = yield _this3.postToServer(_this3.syncData.detaServer.link + 'api/test', _this3.syncData.detaServer);
        // Replace 'ServerResponse' with the actual response type and 'message' with the actual success field
        // console.log(response)
        if (response.m === true) {
          _this3.serverValid = true;
          _this3.serverValidInfo = _CAIDAT__WEBPACK_IMPORTED_MODULE_1__.CAIDAT.sync.infoKetNoiServer;
          return true;
        }
        _this3.serverValid = false;
        _this3.serverValidInfo = _CAIDAT__WEBPACK_IMPORTED_MODULE_1__.CAIDAT.sync.infoLoiServer;
        return false;
      } catch (error) {
        console.error('Lỗi dữ liệu với server:', error);
        _this3.serverValid = false;
        _this3.serverValidInfo = _CAIDAT__WEBPACK_IMPORTED_MODULE_1__.CAIDAT.sync.infoLoiServer;
        return false;
      }
    })();
  }
  postToServer(url, payload) {
    var _this4 = this;
    return (0,G_HOAI_code_frontend_exceltoanki_soure_code_v2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // Implement the logic to post data to the server.
      // This is a placeholder example using the Angular HttpClient.
      // You'll need to replace this with your actual HTTP client code.
      try {
        const response = yield _this4.httpClient.post(url, payload).toPromise();
        return response;
      } catch (error) {
        // console.error('Lỗi dữ liệu với server:', error);
        throw error;
      }
    })();
  }
  startSync() {
    var _this5 = this;
    return (0,G_HOAI_code_frontend_exceltoanki_soure_code_v2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this5.syncInProgress = true;
      /*
      1. Check server valid
       */
      if (!_this5.serverValid) {
        _this5.serverValidInfo = _CAIDAT__WEBPACK_IMPORTED_MODULE_1__.CAIDAT.sync.infoLoiServer;
        return false;
      }
      /* 2. Get hoso this.hosoService.danhsachhoso và hồ sơ online
       */
      // hồ sơ online
      yield _this5.getAllPackages('open');
      /*
      TODO: Local có Hoso + mà Server - không có
      TODO: Local Hoso + và Server đều có +
      3. check if have detaKey
      if not have -> send to server
      if have -> check valid day */
      for (const hoso of _this5.hosoService.danhsachhoso) {
        /* if hoso not have key -> send to server
          if have -> check time hoso.sync.lastSync
          TODO: Local có Hoso mà Server không có
        */
        // console.log(hoso.key)
        /*  1. If hoso.key is an empty string ''
            2. If hoso.key is undefined
            3. If the value of hoso.key is not included in the array this.serverSyncHoSo_Keys
            -> Insert to Server
            */
        if (hoso.key == '' || hoso.key == undefined || !_this5.serverSyncHoSo_Keys.includes(hoso.key)) {
          // send to server and @Update local
          let newHoSo = yield _this5.insertHosoToServer(hoso);
          // get respond and save to local
          // console.log(newHoSo)
          // await this.hosoService.updateHoSo(newHoSo, CAIDAT.hoso.saveFromSyncServer)
        } else {
          /* TODO: Local Hoso và Server đều có */
          console.info('hoso hiện tại Có key và server cũng có key');
          // hoso hiện tại Có key và server cũng có key
          // kiểm tra 2 ngày của hoso và this.serverSyncHoSo. Nếu hoso lớn hơn thì upload. Nếu server lớn hơn thì download
          const hosoFromServer = _this5.serverSyncHoSo.filter(item => item.key === hoso.key);
          // console.log(selectedItems)
          if (hosoFromServer.length > 0) {
            //@ts-ignore
            if (hosoFromServer[0].sync.lastSync < hoso.sync.lastSync) {
              /* Nếu trên server nhỏ hơn thì upload
                1. Đây là trường hợp đổi máy:
                  ĐT sửa và upload rồi
                    qua máy tính: chưa có - tải về;
                    có rồi ->
                 */
              // let newHoSo = await this.updateHosoToServer(hoso);
              // get respond and save to local
              // await this.hosoService.updateHoSo(newHoSo, CAIDAT.hoso.saveFromSyncServer)
              // @ts-ignore
              let respd = yield _this5.postToServer(_this5.syncData.detaServer.link + 'api/hoso/put', hoso);
              // @ts-ignore
              console.log(respd, hosoFromServer[0].sync.lastSync);
            }
            //@ts-ignore
            else if (hosoFromServer[0].sync.lastSync > hoso.sync.lastSync) {
              /* Nếu server lớn hơn thì download */
              // this.hosoService.
            }
          }
        }
      }
      /* TODO: Local Hoso - không có và Server có + */
      // Test: Xóa trong LocalStorage, sync về
      let hosoFromServerCoMaLocalKhong = _this5.serverSyncHoSo.filter(serverHoso => !_this5.hosoService.danhsachhoso.some(localHoso => localHoso.key === serverHoso.key));
      /* Loop và download */
      for (const hoso of hosoFromServerCoMaLocalKhong) {
        yield _this5.hosoService.addNewHoSo(hoso);
      }
      _this5.syncInProgress = false;
    })();
  }
  /**
   * Trả về danh sách hồ sơ lấy về từ server
   * @type {string} default is open
   * @return {Promise<void>}
   */
  getAllPackages(type = 'open') {
    var _this6 = this;
    return (0,G_HOAI_code_frontend_exceltoanki_soure_code_v2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this6.httpClient.get(_this6.syncData.detaServer.link + 'api/list-all/' + type).subscribe(res => {
        // @ts-ignore
        _this6.serverSyncHoSo = res.items;
        console.log('getAllPackages()' + _this6.serverSyncHoSo);
        _this6.serverSyncHoSo_Keys = _this6.serverSyncHoSo.map(hoso => hoso.key).filter(key => key !== undefined);
        /* {
              "items": [
                  {
                      "key": "erqjywj0j8jv",
                      "sync": {
                          "type": "open"
                      }
                  },...
              ],
              "count": 3
          } */
      });
    })();
  }
  insertHosoToServer(hoso) {
    var _this7 = this;
    return (0,G_HOAI_code_frontend_exceltoanki_soure_code_v2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return new Promise((resolve, reject) => {
        _this7.httpClient.post(_this7.syncData.detaServer.link + 'api/hoso/insert', hoso).subscribe({
          next: function () {
            var _ref = (0,G_HOAI_code_frontend_exceltoanki_soure_code_v2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (newHoSo) {
              yield _this7.hosoService.addNewHoSo(newHoSo, _CAIDAT__WEBPACK_IMPORTED_MODULE_1__.CAIDAT.hoso.saveFromSyncServer);
              resolve(newHoSo);
            });
            return function next(_x) {
              return _ref.apply(this, arguments);
            };
          }(),
          error: err => reject(err)
        });
      });
    })();
  }
}, _SyncService.ctorParameters = () => [{
  type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_4__.Storage
}, {
  type: _toast_service_service__WEBPACK_IMPORTED_MODULE_2__.ToastService
}, {
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient
}, {
  type: _hoso_service__WEBPACK_IMPORTED_MODULE_3__.HosoService
}], _SyncService);
SyncService = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Injectable)({
  providedIn: 'root'
})], SyncService);


/***/ }),

/***/ 4796:
/*!******************************************************!*\
  !*** ./src/app/cai-dat/cai-dat.page.scss?ngResource ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 9728);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 7804);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `section {
  margin-top: 1em;
  margin-bottom: 2.5em;
}

section:not(.full-width),
.full-width > header {
  padding: 0 10px;
}

header {
  font-size: 1em;
  font-weight: 600;
  letter-spacing: 0.05em;
  margin-bottom: 1.25em;
  text-transform: uppercase;
  border-bottom: 2px solid var(--ion-color-primary);
}

a {
  text-decoration: none;
}

.secretKeysDiv {
  position: relative;
}
.secretKeysDiv ion-button {
  position: absolute;
  right: 0px;
  top: 20%;
  z-index: 1;
  font-size: 10px;
}`, "",{"version":3,"sources":["webpack://./src/app/cai-dat/cai-dat.page.scss"],"names":[],"mappings":"AAAA;EACE,eAAA;EACA,oBAAA;AACF;;AAEA;;EAEE,eAAA;AACF;;AACA;EACE,cAAA;EACE,gBAAA;EACA,sBAAA;EACA,qBAAA;EACA,yBAAA;EACA,iDAAA;AAEJ;;AAAA;EACE,qBAAA;AAGF;;AADA;EACE,kBAAA;AAIF;AAHE;EACE,kBAAA;EACA,UAAA;EACA,QAAA;EACA,UAAA;EACA,eAAA;AAKJ","sourcesContent":["section {\r\n  margin-top: 1em;\r\n  margin-bottom: 2.5em;\r\n}\r\n\r\nsection:not(.full-width),\r\n.full-width > header {\r\n  padding: 0 10px;\r\n}\r\nheader {\r\n  font-size: 1em;\r\n    font-weight: 600;\r\n    letter-spacing: 0.05em;\r\n    margin-bottom: 1.25em;\r\n    text-transform: uppercase;\r\n    border-bottom: 2px solid var(--ion-color-primary);\r\n}\r\na{\r\n  text-decoration: none;\r\n}\r\n.secretKeysDiv{\r\n  position: relative;\r\n  ion-button{\r\n    position: absolute;\r\n    right: 0px;\r\n    top: 20%;\r\n    z-index: 1;\r\n    font-size: 10px;\r\n  }\r\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 9664:
/*!******************************************************!*\
  !*** ./src/app/cai-dat/cai-dat.page.html?ngResource ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-title>Cài đặt</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div>\r\n    <ion-list>\r\n      <ion-item>\r\n        <ion-input\r\n          type=\"text\"\r\n          label=\"Link of Deta.Space\"\r\n          [(ngModel)]=\"syncService.syncData.detaServer.link\"\r\n          (ionChange)=\"change_DataSync()\"\r\n          placeholder=\"Link của app excel to anki trên Deta.space\"\r\n        ></ion-input>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-input\r\n          type=\"password\"\r\n          label=\"Secret key\"\r\n          [(ngModel)]=\"syncService.syncData.detaServer.secretKey\"\r\n          (ionChange)=\"change_DataSync()\"\r\n          placeholder=\"Secret key\"\r\n        ></ion-input>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-button\r\n          color=\"{{ syncService.serverValid ? 'primary' : 'danger' }}\"\r\n          disabled\r\n        >\r\n          <ion-icon\r\n            slot=\"start\"\r\n            name=\"{{ syncService.serverValid ? 'cloud-done' : 'cloud-offline' }}\"\r\n          ></ion-icon>\r\n        </ion-button>\r\n\r\n        <ion-button\r\n          color=\"primary\"\r\n          [disabled]=\"!syncService.serverValid || syncService.syncInProgress\"\r\n          (click)=\"syncService.startSync()\"\r\n        >\r\n          <ion-icon name=\"cloud-upload-outline\" slot=\"end\"></ion-icon>\r\n          sync\r\n        </ion-button>\r\n\r\n        <ion-button\r\n          color=\"primary\"\r\n          [disabled]=\"!syncService.serverValid || syncService.syncInProgress\"\r\n        >\r\n          <ion-icon name=\"cloud-download-outline\" slot=\"end\"></ion-icon>\r\n          Download\r\n        </ion-button>\r\n\r\n      </ion-item>\r\n      <ion-note color=\"medium\" class=\"ion-margin-horizontal\"> {{syncService.serverValidInfo}}</ion-note>\r\n    </ion-list>\r\n  </div>\r\n  <div>\r\n    <h3>Đang phát triển:</h3>\r\n    <ol>\r\n      <li>\r\n        Tính năng Đăng nhập tài khoản và đồng bộ trên các thiết bị: viết server\r\n        đăng nhập, viết đồng bộ. <b>Đang phát triển, hiện chưa sử dụng đc.</b>\r\n      </li>\r\n      <li>✔ Tính năng xuất bằng file excel từ máy tính</li>\r\n      <li>Tính năng Cài đặt ngay trên sheet</li>\r\n      <li>Cài đặt: các giá trị mặc định</li>\r\n    </ol>\r\n  </div>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_cai-dat_cai-dat_module_ts.09dc86a388631f04.js.map