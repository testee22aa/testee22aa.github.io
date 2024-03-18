(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_ho-so-chi-tiet_ho-so-chi-tiet_module_ts"],{

/***/ 6908:
/*!*****************************************************************!*\
  !*** ./src/app/ho-so-chi-tiet/ho-so-chi-tiet-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HoSoChiTietPageRoutingModule: () => (/* binding */ HoSoChiTietPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _ho_so_chi_tiet_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ho-so-chi-tiet.page */ 64);




const routes = [{
  path: '',
  component: _ho_so_chi_tiet_page__WEBPACK_IMPORTED_MODULE_0__.HoSoChiTietPage
}];
let HoSoChiTietPageRoutingModule = class HoSoChiTietPageRoutingModule {};
HoSoChiTietPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], HoSoChiTietPageRoutingModule);


/***/ }),

/***/ 8004:
/*!*********************************************************!*\
  !*** ./src/app/ho-so-chi-tiet/ho-so-chi-tiet.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HoSoChiTietPageModule: () => (/* binding */ HoSoChiTietPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 4210);
/* harmony import */ var _ho_so_chi_tiet_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ho-so-chi-tiet-routing.module */ 6908);
/* harmony import */ var _ho_so_chi_tiet_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ho-so-chi-tiet.page */ 64);







let HoSoChiTietPageModule = class HoSoChiTietPageModule {};
HoSoChiTietPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _ho_so_chi_tiet_routing_module__WEBPACK_IMPORTED_MODULE_0__.HoSoChiTietPageRoutingModule],
  declarations: [_ho_so_chi_tiet_page__WEBPACK_IMPORTED_MODULE_1__.HoSoChiTietPage]
})], HoSoChiTietPageModule);


/***/ }),

/***/ 64:
/*!*******************************************************!*\
  !*** ./src/app/ho-so-chi-tiet/ho-so-chi-tiet.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HoSoChiTietPage: () => (/* binding */ HoSoChiTietPage)
/* harmony export */ });
/* harmony import */ var G_HOAI_code_frontend_exceltoanki_soure_code_v2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _ho_so_chi_tiet_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ho-so-chi-tiet.page.html?ngResource */ 9885);
/* harmony import */ var _ho_so_chi_tiet_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ho-so-chi-tiet.page.scss?ngResource */ 6053);
/* harmony import */ var _ho_so_chi_tiet_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ho_so_chi_tiet_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 4210);
/* harmony import */ var _service_CAIDAT__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/CAIDAT */ 9995);
/* harmony import */ var _service_CAIDAT_HELPER__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/CAIDAT_HELPER */ 6185);
/* harmony import */ var _service_get_excel_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/get-excel-data.service */ 9446);
/* harmony import */ var _service_hoso_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../service/hoso.service */ 9243);
/* harmony import */ var _service_menuTags_menu_tags_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../service/menuTags/menu-tags.service */ 3393);
/* harmony import */ var _service_toast_service_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../service/toast-service.service */ 9886);

var _class;












let HoSoChiTietPage = (_class = class HoSoChiTietPage {
  constructor(router, hososervice, getexcelservice, tagsservice, alertController, toastController) {
    this.router = router;
    this.hososervice = hososervice;
    this.getexcelservice = getexcelservice;
    this.tagsservice = tagsservice;
    this.alertController = alertController;
    this.toastController = toastController;
    this.loadinggetcolumns = false;
    this.tagsList = new Set();
    this.isSharing = false;
    this.caidatgoc = _service_CAIDAT__WEBPACK_IMPORTED_MODULE_3__.CAIDAT;
    this.loadedLocalFile = false;
    this.loadedLocalFileArrayBuffer = new ArrayBuffer(0);
    this.homepage = window.location.origin;
    this.loadinggetcolumns$ = this.getexcelservice.loadinggetcolumns$.subscribe(re => {
      this.loadinggetcolumns = re;
    });
    this.tagsList = this.tagsservice.tagsList;
    // console.log(this.hososervice  )
  }

  mogooglesheet(link) {
    window.open(link, '_blank');
  }
  loadLinkFromLocalFile() {
    document.getElementById("file-input-loadLinkFromLocalFile").click();
  }
  loadLinkFromLocalFile_execute(_event) {
    let file = _event.target.files[0];
    console.log(_event);
    if (file.name.substr(file.name.length - 5) == ".xlsx") {
      console.log(file);
      this.hoso.linkFromLocalFile = file.name;
      file.arrayBuffer().then(re => {
        this.loadedLocalFileArrayBuffer = re;
        this.loadedLocalFile = true;
        this.getexcelservice.getFileArrayBuffer(this.hoso, re);
        // Reset lại input. Bug: (change) không đổi khi chọn lại cùng tên file
        _event.srcElement.value = null;
      });
    } else {
      this.toastController.presentToast({
        message: "Xin chọn tệp Excel (đuôi <b>*.xlsx</b>)",
        color: 'danger',
        duration: 2000
      });
    }
  }
  saveChinhSua(hoso, source) {
    var _this = this;
    return (0,G_HOAI_code_frontend_exceltoanki_soure_code_v2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this.hososervice.updateHoSo(_this.hoso, source);
      if ([_service_CAIDAT__WEBPACK_IMPORTED_MODULE_3__.CAIDAT.hoso.savebutton, _service_CAIDAT__WEBPACK_IMPORTED_MODULE_3__.CAIDAT.hoso.saveFromEditor].indexOf(source) !== -1) {
        _this.toastController.presentToast({
          message: "Đã lưu hồ sơ.",
          color: "secondary",
          duration: 400
        });
      } else if (source == _service_CAIDAT__WEBPACK_IMPORTED_MODULE_3__.CAIDAT.hoso.saveAfterLoadColumns) {
        _this.toastController.presentToast({
          message: 'Đã tải dữ liệu cột (Sheet 1, hàng đầu tiên).',
          duration: 1200,
          color: "secondary"
        });
      }
    })();
  }
  updateColumnsWithExcel() {
    var _this2 = this;
    return (0,G_HOAI_code_frontend_exceltoanki_soure_code_v2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this2.hoso.isFromLocalFile) {
        // let x = await this.getexcelservice.getFileArrayBuffer(this.hoso)
      } else {
        let x = yield _this2.getexcelservice.getExcelColumns(_this2.hoso);
        // console.log(x)
        _this2.saveChinhSua(_this2.hoso, _service_CAIDAT__WEBPACK_IMPORTED_MODULE_3__.CAIDAT.hoso.saveAfterLoadColumns);
        // Trả về hồ sơ Đã edit cột
      }
    })();
  }

  createAnkiForFile() {
    this.getexcelservice.createAnkiFile(this.loadedLocalFileArrayBuffer, this.hoso);
  }
  openEditor() {
    let nvget = {
      state: {
        hoso: this.hoso
      },
      skipLocationChange: true
    };
    // console.log(target)
    // console.log(hoso)
    // this.router.navigate(['/ho-so-chi-tiet'], nvget)
    this.router.navigate(['/ho-so-editor'], nvget);
  }
  tagClick(tag) {
    if (this.hoso.tags) {
      if (this.hoso.tags.has(tag)) {
        var _this$hoso$tags;
        (_this$hoso$tags = this.hoso.tags) === null || _this$hoso$tags === void 0 || _this$hoso$tags.delete(tag);
      } else {
        this.hoso.tags.add(tag);
      }
    } else {
      this.hoso.tags = new Set().add(tag);
    }
    this.saveChinhSua(this.hoso, _service_CAIDAT__WEBPACK_IMPORTED_MODULE_3__.CAIDAT.hoso.saveTagsChanged);
  }
  tagClearAll() {
    this.hoso.tags = new Set();
    this.saveChinhSua(this.hoso, _service_CAIDAT__WEBPACK_IMPORTED_MODULE_3__.CAIDAT.hoso.saveTagsChanged);
  }
  ngOnInit() {
    if (this.router.getCurrentNavigation().extras.state) {
      // console.log(this.router.getCurrentNavigation().extras.state)
      this.hoso = this.router.getCurrentNavigation().extras.state['hoso'];
      // console.log(this.hoso)
      // this.hoso.shared={fromShared: true}
      this.updateColumnsWithExcel();
    } else {
      // Nếu không pass state thì chuyển nó về trang hồ sơ
      this.router.navigate(['/t/ho-so']);
    }
  }
  ionViewWillLeave() {
    if (this.hoso.id) {
      this.saveChinhSua(this.hoso, _service_CAIDAT__WEBPACK_IMPORTED_MODULE_3__.CAIDAT.hoso.savebutton);
      this.loadinggetcolumns$.unsubscribe();
    }
  }
  shareHoso() {
    return (0,G_HOAI_code_frontend_exceltoanki_soure_code_v2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {})();
  } // this.isSharing = true
  // let resul = await this.gistService.shareHoSoGist(this.hoso)
  // if (resul != false) {
  //   if (this.hoso.shared) {
  //     this.shareCopyLink()
  //     this.saveChinhSua(this.hoso, CAIDAT.hoso.saveOnGist)
  //   } else {
  //     console.log("Lỗi")
  //   }
  // } else {
  //   this.toastController.presentToast({
  //     message: `Bạn cần vào mục Cài đặt và cập nhật Github token để có thể chia sẻ.`,
  //     duration: 1000,
  //     color: "danger"
  //   })
  // }
  // this.isSharing = false
  // // console.log(typeof this.hoso)

  shareHuyConfirm() {
    var _this3 = this;
    return (0,G_HOAI_code_frontend_exceltoanki_soure_code_v2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this3.alertController.create({
        header: 'Hủy share!!!',
        message: 'Khi bạn hủy chia sẻ, những người khác đang nhận chia sẻ của hồ sơ này bị mất cập nhật hoàn toàn, <br>Bạn THẬT SỰ muốn hủy chứ?',
        buttons: [{
          text: 'Không'
        }, {
          text: 'Ok hủy đi',
          handler: () => {
            _this3.shareHuy();
          }
        }]
      });
      yield alert.present();
    })();
  }
  shareCopyLink() {
    var _this4 = this;
    return (0,G_HOAI_code_frontend_exceltoanki_soure_code_v2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var _this4$hoso$shared, _this4$hoso$shared2;
      navigator.clipboard.writeText((_this4$hoso$shared = _this4.hoso.shared) === null || _this4$hoso$shared === void 0 ? void 0 : _this4$hoso$shared.url);
      _this4.toastController.presentToast({
        message: `${(_this4$hoso$shared2 = _this4.hoso.shared) === null || _this4$hoso$shared2 === void 0 ? void 0 : _this4$hoso$shared2.url} copied!`,
        duration: 700,
        color: "warning"
      });
    })();
  }
  shareHuy() {
    return (0,G_HOAI_code_frontend_exceltoanki_soure_code_v2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {})();
  } // // Xóa thông tin share và xóa gist
  // await this.gistService.shareRemove(this.hoso).then(re => {
  // })
  // this.hoso.shared = undefined;
  // this.saveChinhSua(this.hoso, CAIDAT.hoso.saveOnGist)

  helper(type) {
    //@ts-ignore
    this.toastController.helper(_service_CAIDAT_HELPER__WEBPACK_IMPORTED_MODULE_4__._HELPER[type]);
  }
  ionViewDidEnter() {
    /* Create style element */
    let css = document.createElement('style');
    css.type = 'text/css';
    let styles = `
      *::-webkit-scrollbar {
        width: 8px;
    }
    *::-webkit-scrollbar-track {
        background-color: #e4e4e4;
        border-radius: 100px;
    }
    *::-webkit-scrollbar-thumb {
        background-color: #3880ff;
        border-radius: 100px;
    }
    `;
    css.appendChild(document.createTextNode(styles));
    /* Append style to the head element */
    document.getElementsByTagName("ion-textarea")[0].appendChild(css);
    document.getElementsByTagName("ion-row")[0].appendChild(css);
  }
}, _class.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router
}, {
  type: _service_hoso_service__WEBPACK_IMPORTED_MODULE_6__.HosoService
}, {
  type: _service_get_excel_data_service__WEBPACK_IMPORTED_MODULE_5__.GetExcelDataService
}, {
  type: _service_menuTags_menu_tags_service__WEBPACK_IMPORTED_MODULE_7__.MenuTagsService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.AlertController
}, {
  type: _service_toast_service_service__WEBPACK_IMPORTED_MODULE_8__.ToastService
}], _class);
HoSoChiTietPage = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
  selector: 'app-ho-so-chi-tiet',
  template: _ho_so_chi_tiet_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_ho_so_chi_tiet_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], HoSoChiTietPage);


/***/ }),

/***/ 6053:
/*!********************************************************************!*\
  !*** ./src/app/ho-so-chi-tiet/ho-so-chi-tiet.page.scss?ngResource ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 2487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 1386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.link {
  color: #343452;
  font-size: x-small;
}

ion-item-divider {
  background-color: var(--ion-color-primary);
}
ion-item-divider ion-label {
  color: white;
}

#file-input-loadLinkFromLocalFile {
  display: none;
}

.button-clear {
  --background: #0000002b;
}

.tablecolumns {
  font-size: smaller;
}

ion-input .label-text-wrapper {
  font-size: medium;
  text-transform: uppercase !important;
}

ion-grid.table {
  --ion-grid-column-padding: 4px;
  border-collapse: collapse;
  border-style: hidden;
}
ion-grid.table ion-row:first-child {
  background-color: #fff8d4;
  font-weight: bold;
}
ion-grid.table ion-col {
  border: 1px solid black;
  border-bottom: 0;
  border-right: 0;
}
ion-grid.table ion-col:last-child {
  border-right: 1px solid black;
}
ion-grid.table ion-row:last-child {
  border-bottom: 1px solid black;
}
ion-grid.table ion-input {
  background-color: #f9f2ff;
}

.selected {
  --color: red;
}

ion-chip {
  padding: 3px 6px;
  font-size: 10px !important;
  height: 20px;
  margin: 5px 3px;
}
ion-chip ion-icon {
  height: 10px;
  margin: 0px;
}
ion-chip ion-label {
  line-height: 14px;
}

.badgechiase {
  position: relative;
  right: -15px;
}

.linkggscomponent {
  position: relative;
}
.linkggscomponent ion-button {
  position: absolute;
  right: 0px;
  top: 15px;
  z-index: 2;
}
.linkggscomponent ion-button::part(native) {
  padding: 5px;
  font-size: 10px;
}

@media screen and (prefers-color-scheme: dark) {
  ion-grid.table ion-row:first-child {
    background-color: rgba(255, 255, 255, 0.1098039216);
  }
  .link {
    color: white;
  }
}`, "",{"version":3,"sources":["webpack://./src/app/ho-so-chi-tiet/ho-so-chi-tiet.page.scss"],"names":[],"mappings":"AAAA;EACE,cAAA;EACA,kBAAA;AACF;;AAEA;EACE,0CAAA;AACF;AACE;EACE,YAAA;AACJ;;AAEA;EACE,aAAA;AACF;;AACA;EACE,uBAAA;AAEF;;AACA;EACE,kBAAA;AAEF;;AACA;EACI,iBAAA;EACA,oCAAA;AAEJ;;AAEA;EACE,8BAAA;EACA,yBAAA;EACA,oBAAA;AACF;AACE;EACE,yBAAA;EACA,iBAAA;AACJ;AAEE;EACE,uBAAA;EACA,gBAAA;EACA,eAAA;AAAJ;AAGE;EACE,6BAAA;AADJ;AAIE;EACE,8BAAA;AAFJ;AAKE;EACE,yBAAA;AAHJ;;AAOA;EACE,YAAA;AAJF;;AAOA;EACE,gBAAA;EACA,0BAAA;EACA,YAAA;EACA,eAAA;AAJF;AAME;EACE,YAAA;EACA,WAAA;AAJJ;AAOE;EACE,iBAAA;AALJ;;AASA;EACE,kBAAA;EACA,YAAA;AANF;;AASA;EACE,kBAAA;AANF;AAQE;EACE,kBAAA;EACA,UAAA;EACA,SAAA;EACA,UAAA;AANJ;AASE;EACE,YAAA;EACA,eAAA;AAPJ;;AAWA;EAEI;IACE,mDAAA;EATJ;EAaA;IACE,YAAA;EAXF;AACF","sourcesContent":[".link {\r\n  color: #343452;\r\n  font-size: x-small;\r\n}\r\n\r\nion-item-divider {\r\n  background-color: var(--ion-color-primary);\r\n\r\n  ion-label {\r\n    color: white;\r\n  }\r\n}\r\n#file-input-loadLinkFromLocalFile{\r\n  display: none;\r\n}\r\n.button-clear {\r\n  --background: #0000002b;\r\n}\r\n\r\n.tablecolumns {\r\n  font-size: smaller;\r\n}\r\n\r\nion-input .label-text-wrapper{\r\n    font-size: medium;\r\n    text-transform: uppercase !important;\r\n  \r\n}\r\n\r\nion-grid.table {\r\n  --ion-grid-column-padding: 4px;\r\n  border-collapse: collapse;\r\n  border-style: hidden;\r\n\r\n  ion-row:first-child {\r\n    background-color: #fff8d4;\r\n    font-weight: bold;\r\n  }\r\n\r\n  ion-col {\r\n    border: 1px solid black;\r\n    border-bottom: 0;\r\n    border-right: 0;\r\n  }\r\n\r\n  ion-col:last-child {\r\n    border-right: 1px solid black;\r\n  }\r\n\r\n  ion-row:last-child {\r\n    border-bottom: 1px solid black;\r\n  }\r\n\r\n  ion-input {\r\n    background-color: #f9f2ff;\r\n  }\r\n}\r\n\r\n.selected {\r\n  --color: red;\r\n}\r\n\r\nion-chip {\r\n  padding: 3px 6px;\r\n  font-size: 10px !important;\r\n  height: 20px;\r\n  margin: 5px 3px;\r\n\r\n  ion-icon {\r\n    height: 10px;\r\n    margin: 0px;\r\n  }\r\n\r\n  ion-label {\r\n    line-height: 14px;\r\n  }\r\n}\r\n\r\n.badgechiase {\r\n  position: relative;\r\n  right: -15px;\r\n}\r\n\r\n.linkggscomponent {\r\n  position: relative;\r\n\r\n  ion-button {\r\n    position: absolute;\r\n    right: 0px;\r\n    top: 15px;\r\n    z-index: 2;\r\n  }\r\n\r\n  ion-button::part(native) {\r\n    padding: 5px;\r\n    font-size: 10px;\r\n  }\r\n}\r\n\r\n@media screen and (prefers-color-scheme: dark) {\r\n  ion-grid.table {\r\n    ion-row:first-child {\r\n      background-color: #ffffff1c;\r\n    }\r\n  }\r\n\r\n  .link {\r\n    color: white\r\n  }\r\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 9885:
/*!********************************************************************!*\
  !*** ./src/app/ho-so-chi-tiet/ho-so-chi-tiet.page.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button text=\"Trở về\" icon=\"caret-back\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>{{hoso.name}}</ion-title>\r\n    <ion-buttons slot=\"end\" color=\"secondary\">\r\n      <ion-button\r\n        shape=\"round\"\r\n        *ngIf=\"hoso.isFromLocalFile\"\r\n        (click)=\"createAnkiForFile()\"\r\n        [disabled]=\"!loadedLocalFile\"\r\n      >\r\n        <span class=\"hide960\">Tạo Anki</span>\r\n        <ion-icon slot=\"start\" name=\"caret-forward-circle-outline\"></ion-icon>\r\n      </ion-button>\r\n\r\n      <ion-button\r\n        shape=\"round\"\r\n        (click)=\"openEditor()\"\r\n      >\r\n        <span class=\"hide960\">Sửa style</span>\r\n        <ion-icon slot=\"end\" name=\"color-palette-outline\"></ion-icon>\r\n      </ion-button>\r\n\r\n      <ion-button\r\n        shape=\"round\"\r\n        class=\"taohoso\"\r\n        (click)=\"saveChinhSua(hoso, caidatgoc.hoso.savebutton)\"\r\n        [disabled]=\"loadinggetcolumns\"\r\n      >\r\n        <span class=\"hide960\">Lưu</span>\r\n        <ion-spinner name=\"lines-small\" *ngIf=\"loadinggetcolumns\"></ion-spinner>\r\n\r\n        <ion-icon slot=\"end\" name=\"save\" *ngIf=\"!loadinggetcolumns\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\" [fullscreen]=\"true\">\r\n  <ion-grid>\r\n    <!-- Default info: name, des, links -->\r\n    <ion-row>\r\n      <ion-col size-md=\"6\" size-xs=\"12\">\r\n        <ion-item-group>\r\n          <ion-item-divider>\r\n            <ion-label>Thông tin mô tả</ion-label>\r\n          </ion-item-divider>\r\n\r\n          <ion-item>\r\n            <!-- <ion-label position=\"floating\">Tên hồ sơ</ion-label> -->\r\n            <ion-input\r\n              [(ngModel)]=\"hoso.name\"\r\n              aria-label=\"Tên hồ sơ\"\r\n              labelPlacement=\"floating\"\r\n              placeholder=\"Tên hồ sơ\"\r\n            ></ion-input>\r\n          </ion-item>\r\n\r\n          <ion-item>\r\n            <!-- <ion-label position=\"floating\">Mô tả</ion-label> -->\r\n            <ion-textarea\r\n              #description\r\n              [(ngModel)]=\"hoso.description\"\r\n              rows=\"3\"\r\n              label=\"Mô tả\"\r\n              labelPlacement=\"floating\"\r\n            ></ion-textarea>\r\n          </ion-item>\r\n        </ion-item-group>\r\n      </ion-col>\r\n\r\n      <ion-col size-md=\"6\" size-xs=\"12\">\r\n        <ion-item-group>\r\n          <ion-item-divider>\r\n            <ion-label>Nguồn dữ liệu</ion-label>\r\n            <ion-icon\r\n              name=\"help-circle-outline\"\r\n              class=\"icon-helper\"\r\n              slot=\"end\"\r\n              (click)=\"helper('nguonDuLieu')\"\r\n            ></ion-icon>\r\n          </ion-item-divider>\r\n          <div>\r\n            <ion-item>\r\n              <ion-toggle\r\n                justify=\"space-between\"\r\n                [enableOnOffLabels]=\"true\"\r\n                [(ngModel)]=\"hoso.isFromLocalFile\"\r\n              >\r\n                Xuất bằng file/ hay link Google Sheet\r\n              </ion-toggle>\r\n            </ion-item>\r\n            <div\r\n              *ngIf=\"hoso.isFromLocalFile\"\r\n              class=\"linkFromLocalFile linkggscomponent\"\r\n            >\r\n              <input\r\n                type=\"file\"\r\n                accept=\".xlsx\"\r\n                id=\"file-input-loadLinkFromLocalFile\"\r\n                (change)=\"loadLinkFromLocalFile_execute($event)\"\r\n              />\r\n\r\n              <ion-item>\r\n                <!-- <ion-label position=\"floating\" color=\"danger\"\r\n                  >File excel từ máy tính (.xlsx)</ion-label\r\n                > -->\r\n                <!-- <ion-label position=\"floating\">Đường dẫn Google sheet (Publish to web)</ion-label> -->\r\n                <ion-input\r\n                  [(ngModel)]=\"hoso.linkFromLocalFile\"\r\n                  class=\"link\"\r\n                  label=\"File excel từ máy tính (.xlsx)\"\r\n                  labelPlacement=\"floating\"\r\n                  disabled=\"true\"\r\n                ></ion-input>\r\n              </ion-item>\r\n              <ion-button\r\n                color=\"primary\"\r\n                size=\"small\"\r\n                (click)=\"loadLinkFromLocalFile()\"\r\n              >\r\n                <ion-icon slot=\"icon-only\" name=\"eye-outline\"></ion-icon>\r\n              </ion-button>\r\n            </div>\r\n          </div>\r\n          <div *ngIf=\"!hoso.isFromLocalFile\">\r\n            <ion-item-divider>\r\n              <ion-label>Đường dẫn google sheet</ion-label>\r\n              <ion-icon\r\n                name=\"help-circle-outline\"\r\n                class=\"icon-helper\"\r\n                slot=\"end\"\r\n                (click)=\"helper('ggsheet')\"\r\n              ></ion-icon>\r\n            </ion-item-divider>\r\n            <div class=\"linkggscomponent\">\r\n              <ion-item>\r\n                <!-- <ion-label position=\"floating\">Để chỉnh sửa</ion-label> -->\r\n                <ion-input\r\n                  [(ngModel)]=\"hoso.ggsheeteditlink\"\r\n                  class=\"link\"\r\n                  label=\"Để chỉnh sửa\"\r\n                  labelPlacement=\"floating\"\r\n                ></ion-input>\r\n              </ion-item>\r\n\r\n              <ion-button\r\n                color=\"primary\"\r\n                size=\"small\"\r\n                (click)=\"mogooglesheet(hoso.ggsheeteditlink)\"\r\n              >\r\n                <ion-icon slot=\"icon-only\" name=\"open-outline\"></ion-icon>\r\n              </ion-button>\r\n            </div>\r\n\r\n            <div class=\"linkggscomponent\">\r\n              <ion-item>\r\n                <!-- <ion-label position=\"floating\" color=\"danger\"\r\n                >Publish to web</ion-label\r\n              > -->\r\n                <!-- <ion-label position=\"floating\">Đường dẫn Google sheet (Publish to web)</ion-label> -->\r\n                <ion-input\r\n                  [(ngModel)]=\"hoso.ggsheetlinkpublishtoweb\"\r\n                  class=\"link\"\r\n                  label=\"Publish to web\"\r\n                  labelPlacement=\"floating\"\r\n                ></ion-input>\r\n              </ion-item>\r\n              <ion-button\r\n                color=\"primary\"\r\n                size=\"small\"\r\n                (click)=\"mogooglesheet(hoso.ggsheetlinkpublishtoweb)\"\r\n              >\r\n                <ion-icon slot=\"icon-only\" name=\"eye-outline\"></ion-icon>\r\n              </ion-button>\r\n            </div>\r\n          </div>\r\n        </ion-item-group>\r\n      </ion-col>\r\n    </ion-row>\r\n    <!-- TAGS -->\r\n    <ion-row>\r\n      <ion-col size-xs=\"12\">\r\n        <div>\r\n          <ion-item-group>\r\n            <ion-item-divider>\r\n              <ion-label>Tags:</ion-label>\r\n              <ion-button\r\n                (click)=\"tagClearAll()\"\r\n                *ngIf=\"hoso.tags?.size! > 0\"\r\n                slot=\"end\"\r\n              >\r\n                <ion-icon slot=\"end\" name=\"trash-outline\"></ion-icon>\r\n                <span class=\"hide960\">Xóa hết</span>\r\n              </ion-button>\r\n              <ion-icon\r\n                name=\"help-circle-outline\"\r\n                class=\"icon-helper\"\r\n                slot=\"end\"\r\n                (click)=\"helper('tags')\"\r\n              ></ion-icon>\r\n            </ion-item-divider>\r\n          </ion-item-group>\r\n          <ion-chip\r\n            *ngFor=\"let tag of tagsList\"\r\n            [ngClass]=\"{'selected': hoso.tags?.has(tag)}\"\r\n            (click)=\"tagClick(tag)\"\r\n            [color]=\"hoso.tags?.has(tag) ? 'primary' : ''\"\r\n          >\r\n            <ion-icon\r\n              [name]=\"hoso.tags?.has(tag) ? 'checkmark-outline': 'pricetag-outline'\"\r\n            ></ion-icon>\r\n            <ion-label>{{tag}}</ion-label>\r\n          </ion-chip>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n    <!-- Cài đặt Cloze -->\r\n    <ion-row>\r\n      <ion-col size-xs=\"12\">\r\n        <ion-item-group>\r\n          <ion-item-divider>\r\n            <ion-label>Cài đặt cloze</ion-label>\r\n            <ion-icon\r\n              name=\"help-circle-outline\"\r\n              class=\"icon-helper\"\r\n              slot=\"end\"\r\n              (click)=\"helper('cloze')\"\r\n            ></ion-icon>\r\n          </ion-item-divider>\r\n          <ion-item>\r\n            <!-- <ion-label>All cloze cho 1 note (All-in-one Cloze)</ion-label> -->\r\n            <ion-toggle\r\n              [(ngModel)]=\"hoso.clozeAllInOne\"\r\n              aria-label=\"All cloze cho 1 note (All-in-one Cloze)\"\r\n            >\r\n              All cloze cho 1 note (All-in-one Cloze)\r\n            </ion-toggle>\r\n          </ion-item>\r\n        </ion-item-group>\r\n      </ion-col>\r\n    </ion-row>\r\n    <!-- Table các cột và cài đặt cột -->\r\n    <ion-row>\r\n      <ion-col size-xs=\"12\">\r\n        <ion-item-group>\r\n          <ion-item-divider>\r\n            <ion-label>Cài đặt cột</ion-label>\r\n            <ion-icon\r\n              name=\"help-circle-outline\"\r\n              class=\"icon-helper\"\r\n              slot=\"end\"\r\n              (click)=\"helper('columns')\"\r\n            ></ion-icon>\r\n          </ion-item-divider>\r\n          <!-- Nút bấm hiển thị load file -->\r\n          <ion-item *ngIf=\"hoso.isFromLocalFile\">\r\n            <ion-button (click)=\"loadLinkFromLocalFile()\" color=\"danger\">\r\n              <ion-icon slot=\"start\" name=\"add\"></ion-icon>\r\n              Load file từ máy tính\r\n            </ion-button>\r\n          </ion-item>\r\n          <!-- Khi đã load được file excel -->\r\n          <div *ngIf=\"hoso.columns?.length! > 1\">\r\n            <ion-grid class=\"ion-margin table\">\r\n              <!-- Table title -->\r\n              <ion-row>\r\n                <ion-col class=\"ion-text-center\">STT</ion-col>\r\n                <ion-col>Tên</ion-col>\r\n                <ion-col>Copy xuống</ion-col>\r\n                <ion-col>Thay thế</ion-col>\r\n              </ion-row>\r\n              <!-- Cột -->\r\n              <ion-row *ngFor=\"let cot of hoso.columns; index as i\">\r\n                <ion-col class=\"ion-text-center\">{{ i + 1 }}</ion-col>\r\n                <ion-col class=\"bold\"> {{cot.name}} </ion-col>\r\n                <ion-col class=\"ion-text-center\">\r\n                  <ion-checkbox\r\n                    *ngIf=\"i>1\"\r\n                    [(ngModel)]=\"cot.copyxuong\"\r\n                  ></ion-checkbox>\r\n                </ion-col>\r\n                <ion-col class=\"ion-text-center\">\r\n                  <ion-checkbox\r\n                    *ngIf=\"i>1\"\r\n                    [(ngModel)]=\"cot.replace\"\r\n                  ></ion-checkbox>\r\n                </ion-col>\r\n              </ion-row>\r\n            </ion-grid>\r\n            <ion-spinner\r\n              name=\"lines-small\"\r\n              *ngIf=\"loadinggetcolumns\"\r\n            ></ion-spinner>\r\n            <ion-text class=\"tablecolumns\">\r\n              <span *ngFor=\"let item of hoso.columns\">\r\n                <span *ngIf=\"!item.isinfront || !item.isinback\">\r\n                  <b>{{item.name}} </b>\r\n                  <span *ngIf=\"!item.isinfront\"\r\n                    >không có ở mặt <b>trước</b></span\r\n                  >\r\n                  <span *ngIf=\"!item.isinback\"> không có ở mặt <b>sau</b></span>\r\n                  <br />\r\n                </span>\r\n              </span>\r\n            </ion-text>\r\n          </div>\r\n        </ion-item-group>\r\n      </ion-col>\r\n    </ion-row>\r\n    <!-- Các nút phía dưới để mở edit style -->\r\n    <ion-row>\r\n      <ion-col size-xs=\"12\">\r\n        <ion-item-group>\r\n          <ion-item-divider>\r\n            <ion-label>Cài đặt Thay thế, HTML, CSS</ion-label>\r\n          </ion-item-divider>\r\n          <ion-button (click)=\"openEditor()\" color=\"success\">\r\n            <ion-icon slot=\"start\" name=\"repeat-outline\"></ion-icon>\r\n            Mở trình chỉnh sửa style\r\n          </ion-button>\r\n        </ion-item-group>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_ho-so-chi-tiet_ho-so-chi-tiet_module_ts.47a6392835b5f68c.js.map