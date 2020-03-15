webpackHotUpdate("static/development/pages/index.js",{

/***/ "./schemas/paymentMethod.js":
/*!**********************************!*\
  !*** ./schemas/paymentMethod.js ***!
  \**********************************/
/*! exports provided: PaymentMethodSchema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentMethodSchema", function() { return PaymentMethodSchema; });
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var _hooks_locale__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hooks/locale */ "./hooks/locale.js");



var _useLocale = Object(_hooks_locale__WEBPACK_IMPORTED_MODULE_1__["default"])(),
    form = _useLocale.paymentMethodForm.form;

var PaymentMethodSchema = yup__WEBPACK_IMPORTED_MODULE_0__["object"]().shape({
  name: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().min(2, form.name.error).max(50, form.name.error).required(form.name.error),
  career: yup__WEBPACK_IMPORTED_MODULE_0__["number"]().required('Required'),
  birthdate: yup__WEBPACK_IMPORTED_MODULE_0__["date"]().required('Required'),
  country: yup__WEBPACK_IMPORTED_MODULE_0__["number"]().required('Required'),
  city: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required'),
  phone: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required'),
  email: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().email('Invalid email').required('Required')
});


/***/ })

})
//# sourceMappingURL=index.js.d8ec4db6989e31b3f56e.hot-update.js.map