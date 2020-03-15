webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Container */ "./node_modules/@material-ui/core/esm/Container/index.js");
/* harmony import */ var _components_payment_method_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/payment-method-form */ "./components/payment-method-form/index.jsx");
/* harmony import */ var _components_clean_header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/clean-header */ "./components/clean-header/index.jsx");
/* harmony import */ var _hooks_locale__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks/locale */ "./hooks/locale.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var __N_SSP = true;
function Home(_ref) {
  var countries = _ref.countries,
      careers = _ref.careers;

  var _useLocale = Object(_hooks_locale__WEBPACK_IMPORTED_MODULE_5__["default"])(),
      paymentMethodForm = _useLocale.paymentMethodForm;

  return __jsx("div", {
    className: "container"
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, __jsx("title", null, "Ac\xE1mica")), __jsx(_components_clean_header__WEBPACK_IMPORTED_MODULE_4__["default"], null), __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_2__["default"], {
    maxWidth: "sm"
  }, __jsx("h1", null, paymentMethodForm.title), __jsx("hr", null), __jsx(_components_payment_method_form__WEBPACK_IMPORTED_MODULE_3__["default"], {
    countries: countries,
    careers: careers
  })));
}

/***/ })

})
//# sourceMappingURL=index.js.137c5e608ae0b11b579c.hot-update.js.map