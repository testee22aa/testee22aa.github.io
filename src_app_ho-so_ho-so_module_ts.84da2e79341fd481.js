(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_ho-so_ho-so_module_ts"],{

/***/ 6895:
/*!*************************************************************!*\
  !*** ./src/app/components/menu-tags/menu-tags.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MenuTagsComponent: () => (/* binding */ MenuTagsComponent)
/* harmony export */ });
/* harmony import */ var G_HOAI_code_frontend_exceltoanki_soure_code_v2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _menu_tags_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu-tags.component.html?ngResource */ 5698);
/* harmony import */ var _menu_tags_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu-tags.component.scss?ngResource */ 8836);
/* harmony import */ var _menu_tags_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_menu_tags_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _service_menuTags_menu_tags_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/menuTags/menu-tags.service */ 3393);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 4210);
/* harmony import */ var _service_toast_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/toast-service.service */ 9886);
/* harmony import */ var _service_CAIDAT_HELPER__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/CAIDAT_HELPER */ 6185);

var _class;








let MenuTagsComponent = (_class = class MenuTagsComponent {
  constructor(menuTagsService, alertController, toastController) {
    this.menuTagsService = menuTagsService;
    this.alertController = alertController;
    this.toastController = toastController;
    this.dangTaoTags = false;
    this.tagsinput = "";
    this.tagsList = [];
    this.filterByTag = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
  }
  ngOnInit() {
    this.tagsList = this.menuTagsService.tagsList;
    this.filterBigList = this.menuTagsService.filterBigList;
  }
  addTags() {
    var _this = this;
    return (0,G_HOAI_code_frontend_exceltoanki_soure_code_v2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this.tagsinput != "") {
        yield _this.menuTagsService.addTags(_this.tagsinput);
        _this.tagsinput = "";
      }
    })();
  }
  deleteTag(tag) {
    this.presentAlert(`Bạn thực sự muốn xóa tag <b>${tag}</b>?
    <br>- <b>Giữ trong hồ sơ</b>: khi thêm lại <b>${tag}</b>, hồ sơ sẽ tự có tag <b>${tag}</b>.
    <br>- <b>Xóa trong các hồ sơ</b>: tất cả <b>${tag}</b> sẽ bị xóa khỏi hệ thống. (Hồ sơ không mất, chỉ mất tag)`, tag);
  }
  deleteGiuHoSo(tag) {
    this.menuTagsService.deleteGiuHoSo(tag);
  }
  deleteXoaTagHoSo(tag) {
    this.menuTagsService.deleteXoaTagHoSo(tag);
  }
  deleteTagsCombine(tag, target) {
    var _this2 = this;
    return (0,G_HOAI_code_frontend_exceltoanki_soure_code_v2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this2.alertController.create({
        header: 'Xóa tags:',
        message: `Xóa <b>${tag}</b>?`,
        buttons: [{
          text: 'Hủy',
          role: 'cancel'
        }, {
          text: 'Xóa',
          handler: () => {
            if (target.localName == "ion-icon") {
              // console.log(this.filterBigList)
              let ind = _this2.filterBigList.indexOf(tag);
              _this2.filterBigList.splice(ind, 1);
              _this2.menuTagsService.deleteCombineTags(_this2.filterBigList);
            }
          }
        }]
      });
      yield alert.present();
    })();
  }
  helper(tag) {
    //@ts-ignore
    this.toastController.helper(_service_CAIDAT_HELPER__WEBPACK_IMPORTED_MODULE_5__._HELPER[tag]);
  }
  filterTagClick(tag, target) {
    if (target.localName != "ion-icon") {
      this.filterByTag.emit(tag);
    }
  }
  renameTagCheck(tag) {
    var _this3 = this;
    return (0,G_HOAI_code_frontend_exceltoanki_soure_code_v2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log(tag);
      const alert = yield _this3.alertController.create({
        header: 'Đổi tên tag!',
        inputs: [{
          name: 'newname',
          type: 'text',
          placeholder: 'Tên mới'
        }],
        buttons: [{
          text: 'Hủy',
          role: 'cancel'
        }, {
          text: 'Ok',
          handler: alertData => {
            _this3.renameTag(tag, alertData['newname']);
          }
        }]
      });
      alert.present();
    })();
  }
  renameTag(old, newname) {
    this.tagsList.delete(old);
    this.tagsList.add(newname);
    this.filterBigList = this.filterBigList.map((val, ind) => {
      console.log(val);
      let value = "";
      val.split(",").forEach((val1, ind1) => {
        if (val1 == old) {
          console.log(val1);
          value = value + (value == "" ? "" : ",") + newname;
        } else value = value + (value == "" ? "" : ",") + val1;
      });
      return value;
    });
    this.menuTagsService.updateTagsList();
    this.menuTagsService.deleteCombineTags(this.filterBigList);
  }
  presentAlert(msg, tag) {
    var _this4 = this;
    return (0,G_HOAI_code_frontend_exceltoanki_soure_code_v2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this4.alertController.create({
        header: 'Xóa tag',
        message: msg,
        buttons: [{
          text: 'Hủy',
          role: 'cancel'
        }, {
          text: 'Xóa nhưng giữ trong hồ sơ',
          handler: () => {
            _this4.deleteGiuHoSo(tag);
          }
        }, {
          text: 'Xóa trong hồ sơ',
          cssClass: 'danger',
          handler: () => {
            _this4.deleteXoaTagHoSo(tag);
          }
        }]
      });
      yield alert.present();
    })();
  }
}, _class.ctorParameters = () => [{
  type: _service_menuTags_menu_tags_service__WEBPACK_IMPORTED_MODULE_3__.MenuTagsService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController
}, {
  type: _service_toast_service_service__WEBPACK_IMPORTED_MODULE_4__.ToastService
}], _class.propDecorators = {
  filterByTag: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Output
  }]
}, _class);
MenuTagsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-menu-tags',
  template: _menu_tags_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_menu_tags_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], MenuTagsComponent);


/***/ }),

/***/ 2796:
/*!**********************************************************!*\
  !*** ./src/app/components/menu-tags/menu-tags.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MenuTagsComponentModule: () => (/* binding */ MenuTagsComponentModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 4210);
/* harmony import */ var _menu_tags_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu-tags.component */ 6895);






let MenuTagsComponentModule = class MenuTagsComponentModule {};
MenuTagsComponentModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule],
  declarations: [_menu_tags_component__WEBPACK_IMPORTED_MODULE_0__.MenuTagsComponent],
  exports: [_menu_tags_component__WEBPACK_IMPORTED_MODULE_0__.MenuTagsComponent]
})], MenuTagsComponentModule);


/***/ }),

/***/ 2000:
/*!***********************************************!*\
  !*** ./src/app/ho-so/ho-so-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HoSoPageRoutingModule: () => (/* binding */ HoSoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _ho_so_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ho-so.page */ 8272);




const routes = [{
  path: '',
  component: _ho_so_page__WEBPACK_IMPORTED_MODULE_0__.HoSoPage
}];
let HoSoPageRoutingModule = class HoSoPageRoutingModule {};
HoSoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], HoSoPageRoutingModule);


/***/ }),

/***/ 8041:
/*!***************************************!*\
  !*** ./src/app/ho-so/ho-so.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HoSoPageModule: () => (/* binding */ HoSoPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 4210);
/* harmony import */ var _ho_so_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ho-so-routing.module */ 2000);
/* harmony import */ var _ho_so_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ho-so.page */ 8272);
/* harmony import */ var _pipe_search_filter_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pipe/search-filter.module */ 5825);
/* harmony import */ var _components_menu_tags_menu_tags_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/menu-tags/menu-tags.module */ 2796);










let HoSoPageModule = class HoSoPageModule {};
HoSoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule, _ho_so_routing_module__WEBPACK_IMPORTED_MODULE_0__.HoSoPageRoutingModule, _pipe_search_filter_module__WEBPACK_IMPORTED_MODULE_2__.SearchFilterPipeModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule, _components_menu_tags_menu_tags_module__WEBPACK_IMPORTED_MODULE_3__.MenuTagsComponentModule],
  declarations: [_ho_so_page__WEBPACK_IMPORTED_MODULE_1__.HoSoPage]
})], HoSoPageModule);


/***/ }),

/***/ 8272:
/*!*************************************!*\
  !*** ./src/app/ho-so/ho-so.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HoSoPage: () => (/* binding */ HoSoPage)
/* harmony export */ });
/* harmony import */ var G_HOAI_code_frontend_exceltoanki_soure_code_v2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _ho_so_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ho-so.page.html?ngResource */ 7117);
/* harmony import */ var _ho_so_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ho-so.page.scss?ngResource */ 2791);
/* harmony import */ var _ho_so_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ho_so_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _service_hoso_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/hoso.service */ 9243);
/* harmony import */ var _service_get_excel_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/get-excel-data.service */ 9446);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 4210);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _service_menuTags_menu_tags_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/menuTags/menu-tags.service */ 3393);
/* harmony import */ var _service_CAIDAT__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../service/CAIDAT */ 9995);
/* harmony import */ var _service_toast_service_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../service/toast-service.service */ 9886);

var _class;












let HoSoPage = (_class = class HoSoPage {
  constructor(hosoService, router, getexcelService, toastController, alertController, menu, menuTagsService) {
    this.hosoService = hosoService;
    this.router = router;
    this.getexcelService = getexcelService;
    this.toastController = toastController;
    this.alertController = alertController;
    this.menu = menu;
    this.menuTagsService = menuTagsService;
    this.danhsachhoso = [];
    this.filterList = [];
    this.searchControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl();
  }
  ngOnInit() {
    this.danhsachhoso = this.hosoService.danhsachhoso;
    this.searchControl.valueChanges
    // .pipe(debounceTime(100))
    .subscribe(search => {
      this.setFilteredDSHoSo(search);
    });
  }
  ionViewDidEnter() {
    this.shareCheckImport();
    this.shareServerCheckImport();
  }
  shareCheckImport() {
    return (0,G_HOAI_code_frontend_exceltoanki_soure_code_v2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {})();
  } // if (window.urlParams && window.urlParams.hasOwnProperty(CAIDAT.share.import)) {
  //   // console.log(window.urlParams[CAIDAT.share.import])
  //   // let hosostatus = await this.gistService.shareImport(window.urlParams[CAIDAT.share.import])
  //   if (hosostatus.status) {
  //     hosostatus.hoso['shared']['idEnc'] = window.urlParams[CAIDAT.share.import]
  //     this.copyHoso(hosostatus.hoso, "", CAIDAT.share.newhosofromgist)
  //     window.urlParams = undefined
  //   }
  // }

  shareServerCheckImport() {
    return (0,G_HOAI_code_frontend_exceltoanki_soure_code_v2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {})();
  } // if (window.urlParams && window.urlParams.hasOwnProperty(CAIDAT.shareServer.import)) {
  //   // console.log(window.urlParams[CAIDAT.shareServer.import])
  //   let hosostatus = await this.gistService.serverShareImport(window.urlParams[CAIDAT.shareServer.import])
  //   if (hosostatus.status) {
  //     hosostatus.hosos.map((hoso, i) => {
  //       hoso['shared']['idEnc'] = window.urlParams[CAIDAT.shareServer.import]
  //       hoso['shared']['bundelUrl'] = this.fblinks.getLinkFromId(hoso['shared']['idEnc'])
  //       this.copyHoso(hoso, "", CAIDAT.share.newhosofromgist)
  //     })
  //     window.urlParams = undefined
  //   }
  // }

  shareUpdateDownloadHoSo(hoso) {
    return (0,G_HOAI_code_frontend_exceltoanki_soure_code_v2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {})();
  } // let hosostatus = await this.gistService.shareImport(hoso.shared.idEnc, hoso)
  // if (hosostatus.status) {
  //   // console.log(hosostatus.hoso)
  //   // this.copyHoso(hosostatus.hoso , "", CAIDAT.share.newhosoSource)
  //   this.hosoService.addNewHoSo(hosostatus.hoso)
  // }

  ionViewDidLoad() {
    // this.setFilteredDSHoSo("")
  }
  goToHoSoDetail(target, hoso) {
    // target: lấy icon-card header hoặc content thôi, không lấy click vào các nút
    // console.log(target["localName"])
    if (target["localName"].startsWith("ion-card") || target["localName"] == "section") {
      let nvget = {
        state: {
          hoso: hoso
        },
        skipLocationChange: true
      };
      // console.log(target)
      // console.log(hoso)
      this.router.navigate(['/ho-so-chi-tiet'], nvget);
      // this.router.navigateByUrl('/ho-so-chi-tiet', nvget)
    }
    // if (!hoso.shared?.fromShared) {
    // } else {
    //   this.presentToast("Bạn chỉ có thể Copy Hồ sơ Shared, và chỉnh sửa sau đó", "danger")
    // }
  }
  /**
   * 1. Gửi hồ sơ qua get excel data service
   *  -> load online hoặc từ file về
   *        -> Class xử lý dự liệu (hoặc khi)
   *   -> trả qua Class Xuất Anki
   * @param hoso hồ sơ từ button gửi qua
   */
  chayTaoAnki(hoso) {
    var _this = this;
    return (0,G_HOAI_code_frontend_exceltoanki_soure_code_v2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      /* 1. Nếu có mục linkFromLocalFile trong hoso
      hoặc link Publish to web: là trống
      */
      if (hoso.linkFromLocalFile || hoso.ggsheetlinkpublishtoweb == '') {
        /* 1.1 Hiện ra bảng để chọn xuất từ link hay từ file
        1.1.1 Nếu xuất từ link: thì chạy bình thường
        1.1.2 Nếu xuất từ file: hiện ra bảng browser
               Thôi -> chỉ có thể tạo anki từ trang chi tiết
        */
      }
      /* 2. Nếu tạo từ link google sheet */else {
        hoso.creatingAnki = true;
        let x = yield _this.getexcelService.getGoogleSheet(hoso);
        if (x == "createok") {
          _this.hosoService.updateHoSo(hoso, _service_CAIDAT__WEBPACK_IMPORTED_MODULE_6__.CAIDAT.hoso.saveStatsAfterRunAnki);
        }
      }
    })();
  }
  copyHoso(hoso, prefix = "Copy of ", source) {
    var _this2 = this;
    return (0,G_HOAI_code_frontend_exceltoanki_soure_code_v2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let newHoSo = Object.assign({}, hoso);
      // Nếu không phải import hồ sơ từ link (copy hồ sơ) -> chỉnh tên ...
      if (!source || source != _service_CAIDAT__WEBPACK_IMPORTED_MODULE_6__.CAIDAT.share.newhosofromgist) {
        newHoSo.name = prefix + newHoSo.name;
        newHoSo.createdAt = undefined;
        newHoSo.stats = {
          notes: 0,
          sheets: 0
        };
        newHoSo.shared = undefined;
        newHoSo.creatingAnki = false;
      }
      newHoSo.id = undefined;
      let addthanhcong = yield _this2.hosoService.addNewHoSo(newHoSo, source);
      if (addthanhcong) {
        _this2.toastController.presentToast({
          message: "Đã sao chép hồ sơ thành công.",
          color: "success"
        });
      } else {
        _this2.toastController.presentToast({
          message: `Đã có hồ sơ copy của hồ sơ ${newHoSo.name} rồi.`,
          color: "danger"
        });
      }
    })();
  }
  mogooglesheet(hoso) {
    window.open(hoso.ggsheeteditlink, '_blank');
  }
  xoaHoSo(hoso) {
    var _this3 = this;
    return (0,G_HOAI_code_frontend_exceltoanki_soure_code_v2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this3.alertController.create({
        header: 'Xóa hồ sơ',
        cssClass: "xoahoso",
        message: `Bạn thật sự muốn xóa hồ sơ này? <br/>
      Một khi đã xóa sẽ không thể khôi phục lại.`,
        buttons: [{
          text: 'Hủy',
          role: 'cancel'
        }, {
          text: 'Xóa',
          role: 'delete',
          cssClass: 'ion-color ion-color-danger'
        }]
      });
      yield alert.present();
      const {
        role
      } = yield alert.onDidDismiss();
      if (role == "delete") {
        _this3.hosoService.deleteHoSo(hoso.id);
        _this3.toastController.presentToast({
          message: "Xóa hồ sơ thành công",
          color: "success"
        });
      }
    })();
  }
  taohosomacdinh() {
    this.copyHoso(this.hosoService.hosomacdinh, "");
  }
  setFilteredDSHoSo(searchTerm) {
    this.danhsachhoso = this.hosoService.filterHoSo(searchTerm);
  }
  /** From emit of service */
  filterByTag(tag) {
    tag.split(",").forEach(tag => {
      if (!this.filterList.includes(tag)) {
        this.filterList.push(tag);
        this.danhsachhoso = this.hosoService.filterHoSoByTag(this.filterList);
      }
    });
    this.menu.close("menuFilter");
  }
  removeThisTag(tag) {
    const index = this.filterList.indexOf(tag);
    if (index > -1) {
      this.filterList.splice(index, 1);
      this.danhsachhoso = this.hosoService.filterHoSoByTag(this.filterList);
    }
  }
  removeAllTags() {
    this.filterList = [];
    this.danhsachhoso = this.hosoService.filterHoSo("");
  }
  saveFilterList() {
    this.menuTagsService.filterSaveToStorage(this.filterList);
  }
}, _class.ctorParameters = () => [{
  type: _service_hoso_service__WEBPACK_IMPORTED_MODULE_3__.HosoService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router
}, {
  type: _service_get_excel_data_service__WEBPACK_IMPORTED_MODULE_4__.GetExcelDataService
}, {
  type: _service_toast_service_service__WEBPACK_IMPORTED_MODULE_7__.ToastService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.AlertController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.MenuController
}, {
  type: _service_menuTags_menu_tags_service__WEBPACK_IMPORTED_MODULE_5__.MenuTagsService
}], _class);
HoSoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
  selector: 'app-ho-so',
  template: _ho_so_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_ho_so_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], HoSoPage);


/***/ }),

/***/ 5825:
/*!**********************************************!*\
  !*** ./src/app/pipe/search-filter.module.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SearchFilterPipeModule: () => (/* binding */ SearchFilterPipeModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _search_filter_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search-filter.pipe */ 6203);



let SearchFilterPipeModule = class SearchFilterPipeModule {};
SearchFilterPipeModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  declarations: [_search_filter_pipe__WEBPACK_IMPORTED_MODULE_0__.SearchFilterPipe],
  exports: [_search_filter_pipe__WEBPACK_IMPORTED_MODULE_0__.SearchFilterPipe]
})], SearchFilterPipeModule);


/***/ }),

/***/ 6203:
/*!********************************************!*\
  !*** ./src/app/pipe/search-filter.pipe.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SearchFilterPipe: () => (/* binding */ SearchFilterPipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);


let SearchFilterPipe = class SearchFilterPipe {
  transform(value, args) {
    if (!value) return null;
    if (!args) return value;
    args = args.toLowerCase();
    return value.filter(function (data) {
      return JSON.stringify({
        n: data.name,
        d: data.description
      }).toLowerCase().includes(args);
    });
  }
};
SearchFilterPipe = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({
  name: 'searchFilter'
})], SearchFilterPipe);


/***/ }),

/***/ 8836:
/*!**************************************************************************!*\
  !*** ./src/app/components/menu-tags/menu-tags.component.scss?ngResource ***!
  \**************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 2487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 1386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.taotags {
  margin-bottom: 1rem;
}

.menutags ion-chip {
  padding: 3px 6px;
  font-size: 10px;
  height: 20px;
  margin: 5px 3px;
}
.menutags ion-chip ion-icon {
  height: 10px;
  margin: 0px;
}
.menutags ion-chip ion-label {
  line-height: 14px;
}`, "",{"version":3,"sources":["webpack://./src/app/components/menu-tags/menu-tags.component.scss"],"names":[],"mappings":"AAAA;EACI,mBAAA;AACJ;;AAEI;EACI,gBAAA;EACA,eAAA;EACA,YAAA;EACA,eAAA;AACR;AAAQ;EACE,YAAA;EACA,WAAA;AAEV;AAAQ;EACE,iBAAA;AAEV","sourcesContent":[".taotags{\r\n    margin-bottom: 1rem;\r\n}\r\n.menutags{\r\n    ion-chip{\r\n        padding: 3px 6px;\r\n        font-size: 10px;\r\n        height: 20px;\r\n        margin: 5px 3px;\r\n        ion-icon{\r\n          height: 10px;\r\n          margin: 0px;\r\n        }\r\n        ion-label {\r\n          line-height: 14px;\r\n        }\r\n      }\r\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 2791:
/*!**************************************************!*\
  !*** ./src/app/ho-so/ho-so.page.scss?ngResource ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 2487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 1386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.hoai {
  color: rgb(14, 3, 165);
}
.hoai:focus {
  color: red;
}
.hoai input:focus {
  color: red;
}

.hoai:focus {
  --color: red;
}

ion-col section:hover ion-card {
  background-color: rgba(231, 236, 255, 0.38);
}
ion-col section:hover .sheetstats ion-badge {
  transform: scale(0.9);
  transition: transform 0.8s linear; /* vendorless fallback */
  -o-transition: transform 0.8s linear; /* opera */
  -ms-transition: transform 0.8s linear; /* IE 10 */
  -moz-transition: transform 0.8s linear; /* Firefox */
  -webkit-transition: transform 0.8s linear; /*safari and chrome */
}

.sheetstats {
  position: absolute;
  top: 10px;
  right: 10px;
}
.sheetstats ion-badge {
  transform: scale(0.7);
  transition: transform 0.4s linear; /* vendorless fallback */
  -o-transition: transform 0.4s linear; /* opera */
  -ms-transition: transform 0.4s linear; /* IE 10 */
  -moz-transition: transform 0.4s linear; /* Firefox */
  -webkit-transition: transform 0.4s linear; /*safari and chrome */
}

@media (max-width: 960px) {
  ion-grid ion-button {
    font-size: x-small;
  }
  ion-grid .hide960 {
    display: none;
  }
  ion-grid ion-spinner {
    transform: scale(0.5);
  }
}
@media (max-width: 400px) {
  ion-grid ion-button {
    font-size: 8px;
  }
  ion-grid ion-button span {
    display: none;
  }
}

.xoahoso .alert-wrapper {
  max-width: 60% !important;
  width: 90%;
}

.spinner-container {
  width: 100%;
  text-align: center;
  padding: 10px;
}

.menu-enabled ion-searchbar {
  display: none;
}

.filterdiv ion-icon {
  margin-top: 1px;
  cursor: pointer;
}

.ribbon {
  font-size: 12px !important;
  width: 100%;
  background: var(--ion-color-success);
  color: #fff;
  text-align: center;
  padding: 1em 2em; /* Adjust to suit */
  margin: 2em auto 3em; /* Based on 24px vertical rhythm. 48px bottom margin - normally 24 but the ribbon 'graphics' take up 24px themselves so we double it. */
  position: absolute;
  z-index: 1;
  top: -4%;
  right: -44%;
  transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
  overflow: hidden;
}

.hosobuttons,
.hosocard {
  z-index: 2;
  position: relative;
}

.isSharing {
  position: absolute;
  left: 2px;
  top: 2px;
  color: var(--ion-color-primary);
  padding: 2px;
}

@media screen and (prefers-color-scheme: dark) {
  .cardhoso section:hover ion-card {
    background-color: rgba(39, 84, 255, 0.1);
  }
}`, "",{"version":3,"sources":["webpack://./src/app/ho-so/ho-so.page.scss"],"names":[],"mappings":"AAAA;EACE,sBAAA;AACF;AAAE;EACE,UAAA;AAEJ;AACI;EACE,UAAA;AACN;;AAGA;EACE,YAAA;AAAF;;AAII;EACE,2CAAA;AADN;AAIM;EACE,qBAAA;EACA,iCAAA,EAAA,wBAAA;EACA,oCAAA,EAAA,UAAA;EACA,qCAAA,EAAA,UAAA;EACA,sCAAA,EAAA,YAAA;EACA,yCAAA,EAAA,qBAAA;AAFR;;AAOA;EACE,kBAAA;EACA,SAAA;EACA,WAAA;AAJF;AAKE;EACE,qBAAA;EACA,iCAAA,EAAA,wBAAA;EACA,oCAAA,EAAA,UAAA;EACA,qCAAA,EAAA,UAAA;EACA,sCAAA,EAAA,YAAA;EACA,yCAAA,EAAA,qBAAA;AAHJ;;AAOE;EACE;IACE,kBAAA;EAJJ;EAME;IACE,aAAA;EAJJ;EAME;IACE,qBAAA;EAJJ;AACF;AAOE;EACE;IACE,cAAA;EALJ;EAMI;IACE,aAAA;EAJN;AACF;;AASE;EACE,yBAAA;EACA,UAAA;AANJ;;AAUA;EACE,WAAA;EACA,kBAAA;EACA,aAAA;AAPF;;AAcE;EACE,aAAA;AAXJ;;AAeE;EACE,eAAA;EACA,eAAA;AAZJ;;AAgBA;EACE,0BAAA;EAEA,WAAA;EAEA,oCAAA;EACA,WAAA;EACA,kBAAA;EACA,gBAAA,EAAA,mBAAA;EACA,oBAAA,EAAA,uIAAA;EACA,kBAAA;EACA,UAAA;EACA,QAAA;EACA,WAAA;EACA,wBAAA;EACA,4BAAA;EACA,gCAAA;EACA,gBAAA;AAfF;;AAiBA;;EAEE,UAAA;EACA,kBAAA;AAdF;;AAgBA;EACE,kBAAA;EACA,SAAA;EACA,QAAA;EACA,+BAAA;EACA,YAAA;AAbF;;AAeA;EAGM;IACE,wCAAA;EAdN;AACF","sourcesContent":[".hoai {\r\n  color: rgb(14, 3, 165);\r\n  &:focus {\r\n    color: red;\r\n  }\r\n  input {\r\n    &:focus {\r\n      color: red;\r\n    }\r\n  }\r\n}\r\n.hoai:focus {\r\n  --color: red;\r\n}\r\nion-col {\r\n  section:hover {\r\n    ion-card {\r\n      background-color: rgba(231, 236, 255, 0.38);\r\n    }\r\n    .sheetstats {\r\n      ion-badge {\r\n        transform: scale(0.9);\r\n        transition: transform 0.8s linear; /* vendorless fallback */\r\n        -o-transition: transform 0.8s linear; /* opera */\r\n        -ms-transition: transform 0.8s linear; /* IE 10 */\r\n        -moz-transition: transform 0.8s linear; /* Firefox */\r\n        -webkit-transition: transform 0.8s linear; /*safari and chrome */\r\n      }\r\n    }\r\n  }\r\n}\r\n.sheetstats {\r\n  position: absolute;\r\n  top: 10px;\r\n  right: 10px;\r\n  ion-badge {\r\n    transform: scale(0.7);\r\n    transition: transform 0.4s linear; /* vendorless fallback */\r\n    -o-transition: transform 0.4s linear; /* opera */\r\n    -ms-transition: transform 0.4s linear; /* IE 10 */\r\n    -moz-transition: transform 0.4s linear; /* Firefox */\r\n    -webkit-transition: transform 0.4s linear; /*safari and chrome */\r\n  }\r\n}\r\nion-grid {\r\n  @media (max-width: 960px) {\r\n    ion-button {\r\n      font-size: x-small;\r\n    }\r\n    .hide960 {\r\n      display: none;\r\n    }\r\n    ion-spinner {\r\n      transform: scale(0.5);\r\n    }\r\n  }\r\n\r\n  @media (max-width: 400px) {\r\n    ion-button {\r\n      font-size: 8px;\r\n      span {\r\n        display: none;\r\n      }\r\n    }\r\n  }\r\n}\r\n.xoahoso {\r\n  .alert-wrapper {\r\n    max-width: 60% !important;\r\n    width: 90%;\r\n  }\r\n}\r\n\r\n.spinner-container {\r\n  width: 100%;\r\n  text-align: center;\r\n  padding: 10px;\r\n}\r\n// ion-searchbar{\r\n//   position: fixed;\r\n//   top: 100px;\r\n// }\r\n.menu-enabled {\r\n  ion-searchbar {\r\n    display: none;\r\n  }\r\n}\r\n.filterdiv {\r\n  ion-icon {\r\n    margin-top: 1px;\r\n    cursor: pointer;\r\n  }\r\n}\r\n\r\n.ribbon {\r\n  font-size: 12px !important;\r\n\r\n  width: 100%;\r\n\r\n  background: var(--ion-color-success);\r\n  color: #fff;\r\n  text-align: center;\r\n  padding: 1em 2em; /* Adjust to suit */\r\n  margin: 2em auto 3em; /* Based on 24px vertical rhythm. 48px bottom margin - normally 24 but the ribbon 'graphics' take up 24px themselves so we double it. */\r\n  position: absolute;\r\n  z-index: 1;\r\n  top: -4%;\r\n  right: -44%;\r\n  transform: rotate(45deg);\r\n  -ms-transform: rotate(45deg);\r\n  -webkit-transform: rotate(45deg);\r\n  overflow: hidden;\r\n}\r\n.hosobuttons,\r\n.hosocard {\r\n  z-index: 2;\r\n  position: relative;\r\n}\r\n.isSharing {\r\n  position: absolute;\r\n  left: 2px;\r\n  top: 2px;\r\n  color: var(--ion-color-primary);\r\n  padding: 2px;\r\n}\r\n@media screen and (prefers-color-scheme: dark) {\r\n  .cardhoso {\r\n    section:hover {\r\n      ion-card {\r\n        background-color: rgb(39 84 255 / 10%)\r\n      }\r\n    }\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 5698:
/*!**************************************************************************!*\
  !*** ./src/app/components/menu-tags/menu-tags.component.html?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-menu side=\"start\" menuId=\"menuFilter\" contentId=\"main\">\r\n  <ion-header>\r\n    <ion-toolbar color=\"primary\">\r\n      <ion-title>Tags </ion-title>\r\n      <ion-buttons slot=\"primary\" color=\"secondary\">\r\n        <ion-button shape=\"round\" (click)=\"dangTaoTags = true\">\r\n          <span class=\"hide960\">Tạo tags</span>\r\n\r\n          <ion-icon slot=\"end\" name=\"add\"></ion-icon>\r\n        </ion-button>\r\n      </ion-buttons>\r\n\r\n      <ion-icon\r\n        name=\"help-circle-outline\"\r\n        class=\"icon-helper\"\r\n        slot=\"end\"\r\n        (click)=\"helper('tags')\"\r\n      >\r\n      </ion-icon>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  <ion-content class=\"ion-padding\">\r\n    <div class=\"taotags\" *ngIf=\"dangTaoTags\">\r\n      <ion-item>\r\n        <ion-label position=\"floating\">Tên tags:</ion-label>\r\n        <ion-input clearInput=\"true\" [(ngModel)]=\"tagsinput\"></ion-input>\r\n      </ion-item>\r\n      <ion-button size=\"small\" shape=\"round\" (click)=\"addTags()\">\r\n        Thêm\r\n        <ion-icon slot=\"start\" name=\"add\"></ion-icon>\r\n      </ion-button>\r\n      <ion-button size=\"small\" shape=\"round\" (click)=\"dangTaoTags = false\">\r\n        Đóng\r\n        <ion-icon slot=\"start\" name=\"close-circle-outline\"></ion-icon>\r\n      </ion-button>\r\n    </div>\r\n    <div class=\"menutags\">\r\n      <ion-chip\r\n        *ngFor=\"let tag of tagsList\"\r\n        (click)=\"filterTagClick(tag, $event.target)\"\r\n      >\r\n        <ion-icon\r\n          name=\"pricetag-outline\"\r\n          color=\"primary\"\r\n          (click)=\"renameTagCheck(tag)\"\r\n        ></ion-icon>\r\n        <ion-label>{{ tag }}</ion-label>\r\n        <ion-icon name=\"close\" (click)=\"deleteTag(tag)\"></ion-icon>\r\n      </ion-chip>\r\n    </div>\r\n    <div class=\"taotags\" *ngIf=\"filterBigList.length > 0\">\r\n      <ion-chip\r\n        *ngFor=\"let tag of filterBigList\"\r\n        size=\"small\"\r\n        color=\"success\"\r\n        shape=\"round\"\r\n        (click)=\"filterTagClick(tag, $event.target)\"\r\n      >\r\n        {{ tag }}\r\n        <ion-icon slot=\"start\" name=\"add\"></ion-icon>\r\n        <ion-icon\r\n          name=\"close\"\r\n          (click)=\"deleteTagsCombine(tag, $event.target)\"\r\n        ></ion-icon>\r\n      </ion-chip>\r\n    </div>\r\n  </ion-content>\r\n  <ion-footer>\r\n    <ion-toolbar>\r\n      <ion-title>Excel to anki by drquochoai</ion-title>\r\n    </ion-toolbar>\r\n  </ion-footer>\r\n</ion-menu>\r\n<ion-router-outlet id=\"main\"></ion-router-outlet>\r\n";

/***/ }),

/***/ 7117:
/*!**************************************************!*\
  !*** ./src/app/ho-so/ho-so.page.html?ngResource ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-title>Hồ sơ</ion-title>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button autoHide=\"false\"></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-buttons slot=\"primary\" color=\"secondary\">\r\n      <div *ngIf=\"filterList.length>0\" class=\"filterdiv\">\r\n        <ion-badge color=\"tertiary\" *ngFor=\"let tag of filterList\">\r\n          {{tag}}\r\n          <ion-icon\r\n            name=\"close-circle-outline\"\r\n            (click)=\"removeThisTag(tag)\"\r\n          ></ion-icon>\r\n        </ion-badge>\r\n        <ion-badge color=\"danger\">\r\n          <ion-icon\r\n            *ngIf=\"filterList.length>1\"\r\n            name=\"close-circle-outline\"\r\n            (click)=\"removeAllTags()\"\r\n          ></ion-icon>\r\n        </ion-badge>\r\n        <ion-badge color=\"success\">\r\n          <ion-icon\r\n            *ngIf=\"filterList.length>1\"\r\n            name=\"save-outline\"\r\n            (click)=\"saveFilterList()\"\r\n          ></ion-icon>\r\n        </ion-badge>\r\n      </div>\r\n      <ion-button shape=\"round\" class=\"taohoso\" (click)=\"taohosomacdinh()\">\r\n        <span class=\"hide960\">Tạo hồ sơ mặc định</span>\r\n        <ion-icon slot=\"end\" name=\"add\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<app-menu-tags (filterByTag)=\"filterByTag($event)\"></app-menu-tags>\r\n<ion-searchbar\r\n  placeholder=\"Tìm kiếm\"\r\n  [debounce]=\"250\"\r\n  end\r\n  showCancelButton=\"focus\"\r\n  [formControl]=\"searchControl\"\r\n></ion-searchbar>\r\n\r\n<ion-content>\r\n  <!-- <div *ngIf=\"searching\" class=\"spinner-container\">\r\n    <ion-spinner></ion-spinner>\r\n  </div> -->\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col size-md=\"6\" size-xs=\"12\" *ngFor=\"let hoso of danhsachhoso\" class=\"cardhoso\">\r\n        <section>\r\n          <ion-card\r\n            button\r\n            (click)=\"goToHoSoDetail($event.target, hoso)\"\r\n            mode=\"md\"\r\n          >\r\n            <h1 class=\"ribbon\" *ngIf=\"hoso.shared?.fromShared\">\r\n              <strong class=\"ribbon-content\">TỪ CHIA SẺ</strong>\r\n            </h1>\r\n            <ion-icon name=\"radio-outline\" class=\"isSharing\" *ngIf=\"hoso.shared?.lastUpdated\"></ion-icon>\r\n            <ion-card-header class=\"hosocard\">\r\n              <ion-card-title>{{hoso.name}}</ion-card-title>\r\n              <ion-card-subtitle>{{hoso.description}} </ion-card-subtitle>\r\n              <div\r\n                class=\"sheetstats\"\r\n                *ngIf=\"hoso.stats && hoso.stats.sheets! > 0\"\r\n              >\r\n                  <ion-badge color=\"primary\">{{hoso.stats.sheets}}s</ion-badge>\r\n                  <ion-badge color=\"danger\">{{hoso.stats.notes}}n</ion-badge>\r\n              </div>\r\n            </ion-card-header>\r\n            <section class=\"ion-padding-bottom ion-padding-start hosobuttons\">\r\n              <ion-button\r\n                size=\"small\"\r\n                (click)=\"chayTaoAnki(hoso)\"\r\n                [disabled]=\"hoso.creatingAnki\"\r\n                *ngIf=\"!hoso.isFromLocalFile\"\r\n              >\r\n                <ion-spinner\r\n                  name=\"crescent\"\r\n                  *ngIf=\"hoso.creatingAnki\"\r\n                ></ion-spinner>\r\n                <ion-icon\r\n                  *ngIf=\"!hoso.creatingAnki\"\r\n                  slot=\"start\"\r\n                  name=\"caret-forward-circle-outline\"\r\n                ></ion-icon>\r\n                Tạo anki\r\n              </ion-button>\r\n              <ion-button size=\"small\" color=\"primary\" (click)=\"copyHoso(hoso)\">\r\n                <ion-icon slot=\"start\" name=\"duplicate-outline\"></ion-icon>\r\n                <span> Sao chép </span>\r\n              </ion-button>\r\n              <ion-button size=\"small\" color=\"primary\" *ngIf=\"hoso.shared?.fromShared\" (click)=\"shareUpdateDownloadHoSo(hoso)\">\r\n                <ion-icon slot=\"start\" name=\"cloud-download-outline\"></ion-icon>\r\n                <span class=\"hide960\"> Update </span>\r\n              </ion-button>\r\n              <ion-button\r\n                size=\"small\"\r\n                color=\"success\"\r\n                (click)=\"mogooglesheet(hoso)\"\r\n                *ngIf=\"hoso.ggsheeteditlink && !hoso.isFromLocalFile\"\r\n              >\r\n                <ion-icon slot=\"start\" name=\"logo-google\"></ion-icon>\r\n                <span> Gg Sheet </span>\r\n              </ion-button>\r\n              <ion-button size=\"small\" color=\"danger\" (click)=\"xoaHoSo(hoso)\">\r\n                <ion-icon name=\"trash-outline\" slot=\"start\"></ion-icon>\r\n                <span class=\"hide960\">Xóa</span>\r\n              </ion-button>\r\n            </section>\r\n          </ion-card>\r\n        </section>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_ho-so_ho-so_module_ts.84da2e79341fd481.js.map