(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/split/MyCarousel"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Home/partials/MyCarousel.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Home/partials/MyCarousel.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "MyCarousel",
  data: function data() {
    return {
      slide: 0,
      sliding: null,
      items: [{
        url: "/api/file/show-file/bad-boys-3-l.jpg"
      }, {
        url: "/api/file/show-file/fast-and-furious-l.jpeg"
      }, {
        url: "/api/file/show-file/jurassic-world-l1.jpg"
      }]
    };
  },
  methods: {
    onSlideStart: function onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd: function onSlideEnd(slide) {
      this.sliding = false;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Home/partials/MyCarousel.vue?vue&type=template&id=0dc7dd42&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Home/partials/MyCarousel.vue?vue&type=template&id=0dc7dd42&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "b-carousel",
    {
      staticStyle: { "text-shadow": "1px 1px 2px #333" },
      attrs: {
        id: "carousel-1",
        interval: 2000,
        fade: "",
        indicators: "",
        background: "#00",
        "img-width": "1024",
        "img-height": "280"
      },
      on: { "sliding-start": _vm.onSlideStart, "sliding-end": _vm.onSlideEnd },
      model: {
        value: _vm.slide,
        callback: function($$v) {
          _vm.slide = $$v
        },
        expression: "slide"
      }
    },
    _vm._l(_vm.items, function(item, index) {
      return _c("b-carousel-slide", {
        attrs: {
          caption: "Tu próxima historia, ahora",
          text: "DISFRUTA DONDE QUIERAS. CANCELA CUANDO QUIERAS.",
          "img-src": item.url
        }
      })
    }),
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/Home/partials/MyCarousel.vue":
/*!*********************************************************!*\
  !*** ./resources/js/pages/Home/partials/MyCarousel.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MyCarousel_vue_vue_type_template_id_0dc7dd42_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MyCarousel.vue?vue&type=template&id=0dc7dd42&scoped=true& */ "./resources/js/pages/Home/partials/MyCarousel.vue?vue&type=template&id=0dc7dd42&scoped=true&");
/* harmony import */ var _MyCarousel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MyCarousel.vue?vue&type=script&lang=js& */ "./resources/js/pages/Home/partials/MyCarousel.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MyCarousel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MyCarousel_vue_vue_type_template_id_0dc7dd42_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MyCarousel_vue_vue_type_template_id_0dc7dd42_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "0dc7dd42",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Home/partials/MyCarousel.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Home/partials/MyCarousel.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/pages/Home/partials/MyCarousel.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MyCarousel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./MyCarousel.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Home/partials/MyCarousel.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MyCarousel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Home/partials/MyCarousel.vue?vue&type=template&id=0dc7dd42&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/pages/Home/partials/MyCarousel.vue?vue&type=template&id=0dc7dd42&scoped=true& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MyCarousel_vue_vue_type_template_id_0dc7dd42_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./MyCarousel.vue?vue&type=template&id=0dc7dd42&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Home/partials/MyCarousel.vue?vue&type=template&id=0dc7dd42&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MyCarousel_vue_vue_type_template_id_0dc7dd42_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MyCarousel_vue_vue_type_template_id_0dc7dd42_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);