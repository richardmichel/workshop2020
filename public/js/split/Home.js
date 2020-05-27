(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/split/Home"],{

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ui/MyVideo.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ui/MyVideo.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    url: {
      required: true
    },
    poster: {
      required: true
    }
  },
  name: "MyVideo",
  data: function data() {
    return {
      playerOptions: {
        height: '500',
        autoplay: true,
        muted: false,
        language: 'es',
        playbackRates: [0.7, 1.0, 1.5, 2.0],
        sources: [{
          type: "video/mp4",
          src: this.url
        }],
        poster: this.poster
      }
    };
  },
  mounted: function mounted() {
    console.log('this is current player instance object', this.player);
  },
  computed: {
    player: function player() {
      return this.$refs.videoPlayer.player;
    }
  },
  methods: {
    // listen event
    onPlayerPlay: function onPlayerPlay(player) {// console.log('player play!', player)
    },
    onPlayerPause: function onPlayerPause(player) {// console.log('player pause!', player)
    },
    // ...player event
    // or listen state event
    playerStateChanged: function playerStateChanged(playerCurrentState) {// console.log('player current update state', playerCurrentState)
    },
    // player is ready
    playerReadied: function playerReadied(player) {
      console.log('the player is readied', player); // you can use it to do something...
      // player.[methods]
    },
    onPlayerLoadeddata: function onPlayerLoadeddata() {},
    onPlayerCanplay: function onPlayerCanplay() {},
    onPlayerPlaying: function onPlayerPlaying() {},
    onPlayerEnded: function onPlayerEnded() {},
    onPlayerWaiting: function onPlayerWaiting() {},
    onPlayerTimeupdate: function onPlayerTimeupdate() {},
    onPlayerCanplaythrough: function onPlayerCanplaythrough() {}
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Home/Home.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Home/Home.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ui_MyVideo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/ui/MyVideo */ "./resources/js/components/ui/MyVideo.vue");
/* harmony import */ var _services_ServiceFactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/services/ServiceFactory */ "./resources/js/services/ServiceFactory.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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


var MovieService = _services_ServiceFactory__WEBPACK_IMPORTED_MODULE_2__["ServiceFactory"].get('movie');
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Home",
  components: {
    MyVideo: _components_ui_MyVideo__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      movie: {
        url: null,
        poster: null,
        title: null
      },
      movies: [{
        title: "Bad Boys-3",
        url: '/api/file/show-file/bad-boys-3.mp4',
        poster: '/api/file/show-file/bad-boys-3.jpg'
      }, {
        title: "Rápido y Furioso",
        url: '/api/file/show-file/fast-and-furious.mp4',
        poster: '/api/file/show-file/fast-and-furious.jpg'
      }, {
        title: "Rápido y Furioso",
        url: '/api/file/show-file/jurassic-world-2.mp4',
        poster: '/api/file/show-file/jurassic-world-2.jpg'
      }, {
        title: "Rápido y Furioso",
        url: '/api/file/show-file/La-casa-de-papel.mp4',
        poster: '/api/file/show-file/La-casa-de-papel.jpg'
      }, {
        title: "Rápido y Furioso",
        url: '/api/file/show-file/rescate.mp4',
        poster: '/api/file/show-file/rescate.jpg'
      }, {
        title: "Sonic",
        url: '/api/file/show-file/sonic.mp4',
        poster: '/api/file/show-file/sonic.jpeg'
      }]
    };
  },
  methods: {
    setVideo: function setVideo(item) {
      this.movie = item;
    },
    init: function init() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var response, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return MovieService.get();

              case 3:
                response = _context.sent;

                if (response && response.status == 200) {
                  data = response.data;
                  console.log("data:", data);
                }

                _this.errorF(response);

                _context.next = 11;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](0);

                _this.errorF(_context.t0);

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 8]]);
      }))();
    },
    errorF: function errorF(error) {
      console.log("service ".concat(error));
    }
  },
  created: function created() {
    this.init();
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ui/MyVideo.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ui/MyVideo.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.video-js{\n\twidth: 100%;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Home/Home.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Home/Home.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.body-class {\n\tpadding: 0rem;\n}\n.card-img {\n\theight: 200px !important;\n\tborder-radius: 0px !important;\n}\n.box .col {\n\n\tpadding-top: .75rem;\n\tpadding-bottom: .75rem;\n\tmin-height: 100px;\n\tmin-width: 180px;\n}\n.box .col:hover {\n\ttransition: transform .3s;\n\t-ms-transform: scale(1.4);\n\t-webkit-transform: scale(1.4);\n\ttransform: scale(1.4);\n\tz-index: 2;\n}\n.my-img {\n\tmin-height: 100px;\n\tmin-width: 180px;\n}\n.my-play-button{\n\tposition: absolute;\n\tleft: 45%;\n\ttop: 30%;\n\tbackground: #0000008c !important;\n\tborder: none;\n\tcolor: #fff;\n}\n.my-play-button:hover{\n\tcursor: pointer !important;\n\tbackground: rgba(0, 0, 0, 0.68) !important;\n}\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ui/MyVideo.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ui/MyVideo.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--5-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--5-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./MyVideo.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ui/MyVideo.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Home/Home.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Home/Home.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--5-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--5-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Home/Home.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ui/MyVideo.vue?vue&type=template&id=4578c81f&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ui/MyVideo.vue?vue&type=template&id=4578c81f& ***!
  \*************************************************************************************************************************************************************************************************************/
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
  return _c("video-player", {
    ref: "videoPlayer",
    staticClass: "video-player-box",
    attrs: {
      options: _vm.playerOptions,
      playsinline: true,
      customEventName: "customstatechangedeventname"
    },
    on: {
      play: function($event) {
        return _vm.onPlayerPlay($event)
      },
      pause: function($event) {
        return _vm.onPlayerPause($event)
      },
      ended: function($event) {
        return _vm.onPlayerEnded($event)
      },
      waiting: function($event) {
        return _vm.onPlayerWaiting($event)
      },
      playing: function($event) {
        return _vm.onPlayerPlaying($event)
      },
      loadeddata: function($event) {
        return _vm.onPlayerLoadeddata($event)
      },
      timeupdate: function($event) {
        return _vm.onPlayerTimeupdate($event)
      },
      canplay: function($event) {
        return _vm.onPlayerCanplay($event)
      },
      canplaythrough: function($event) {
        return _vm.onPlayerCanplaythrough($event)
      },
      statechanged: function($event) {
        return _vm.playerStateChanged($event)
      },
      ready: _vm.playerReadied
    }
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Home/Home.vue?vue&type=template&id=097fa176&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Home/Home.vue?vue&type=template&id=097fa176& ***!
  \*******************************************************************************************************************************************************************************************************/
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
    "div",
    [
      _c(
        "div",
        [
          _c("h4", [_vm._v("Películas Recientes")]),
          _vm._v(" "),
          _c(
            "b-row",
            {
              staticClass: "box",
              attrs: {
                cols: "1",
                "cols-sm": "2",
                "cols-md": "4",
                "cols-lg": "6"
              }
            },
            _vm._l(_vm.movies, function(item, index) {
              return _c(
                "b-col",
                { key: index },
                [
                  _c(
                    "b-button",
                    {
                      directives: [
                        {
                          name: "b-modal",
                          rawName: "v-b-modal.modal-1",
                          modifiers: { "modal-1": true }
                        }
                      ],
                      staticClass: "my-play-button",
                      on: {
                        click: function($event) {
                          return _vm.setVideo(item)
                        }
                      }
                    },
                    [_c("i", { staticClass: "fas fa-play fa-lg " })]
                  ),
                  _vm._v(" "),
                  _c("b-img", {
                    staticClass: "my-img",
                    attrs: {
                      src: item.poster,
                      "fluid-grow": "",
                      alt: "Fluid image"
                    }
                  })
                ],
                1
              )
            }),
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        [
          _c("h4", [_vm._v("Películas Populares")]),
          _vm._v(" "),
          _c(
            "b-row",
            {
              staticClass: "box",
              attrs: {
                cols: "1",
                "cols-sm": "2",
                "cols-md": "4",
                "cols-lg": "6"
              }
            },
            _vm._l(_vm.movies, function(item, index) {
              return _c(
                "b-col",
                { key: index },
                [
                  _c(
                    "b-button",
                    {
                      directives: [
                        {
                          name: "b-modal",
                          rawName: "v-b-modal.modal-1",
                          modifiers: { "modal-1": true }
                        }
                      ],
                      staticClass: "my-play-button",
                      on: {
                        click: function($event) {
                          return _vm.setVideo(item)
                        }
                      }
                    },
                    [_c("i", { staticClass: "fas fa-play fa-lg " })]
                  ),
                  _vm._v(" "),
                  _c("b-img", {
                    staticClass: "my-img",
                    attrs: {
                      src: item.poster,
                      "fluid-grow": "",
                      alt: "Fluid image"
                    }
                  })
                ],
                1
              )
            }),
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          attrs: {
            id: "modal-1",
            size: "xl",
            "hide-footer": "",
            "hide-header": "",
            "body-class": "body-class",
            title: _vm.movie.title
          }
        },
        [
          _vm.movie.url
            ? _c("my-video", {
                attrs: { url: _vm.movie.url, poster: _vm.movie.poster }
              })
            : _vm._e()
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/ui/MyVideo.vue":
/*!************************************************!*\
  !*** ./resources/js/components/ui/MyVideo.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MyVideo_vue_vue_type_template_id_4578c81f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MyVideo.vue?vue&type=template&id=4578c81f& */ "./resources/js/components/ui/MyVideo.vue?vue&type=template&id=4578c81f&");
/* harmony import */ var _MyVideo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MyVideo.vue?vue&type=script&lang=js& */ "./resources/js/components/ui/MyVideo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _MyVideo_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MyVideo.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/ui/MyVideo.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _MyVideo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MyVideo_vue_vue_type_template_id_4578c81f___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MyVideo_vue_vue_type_template_id_4578c81f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ui/MyVideo.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ui/MyVideo.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/ui/MyVideo.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MyVideo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./MyVideo.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ui/MyVideo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MyVideo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ui/MyVideo.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/ui/MyVideo.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MyVideo_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--5-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--5-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./MyVideo.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ui/MyVideo.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MyVideo_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MyVideo_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MyVideo_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MyVideo_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MyVideo_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/ui/MyVideo.vue?vue&type=template&id=4578c81f&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/ui/MyVideo.vue?vue&type=template&id=4578c81f& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MyVideo_vue_vue_type_template_id_4578c81f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./MyVideo.vue?vue&type=template&id=4578c81f& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ui/MyVideo.vue?vue&type=template&id=4578c81f&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MyVideo_vue_vue_type_template_id_4578c81f___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MyVideo_vue_vue_type_template_id_4578c81f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/config/settings.js":
/*!*****************************************!*\
  !*** ./resources/js/config/settings.js ***!
  \*****************************************/
/*! exports provided: STATUS, BASE_URL, API_URL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATUS", function() { return STATUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BASE_URL", function() { return BASE_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_URL", function() { return API_URL; });
var STATUS = 'local';
var BASE_URL = {
  'local': 'http://10.0.0.7:8001/',
  'dev': 'https://',
  'production': 'https://'
};
var API_URL = BASE_URL[STATUS] + 'api/';

/***/ }),

/***/ "./resources/js/pages/Home/Home.vue":
/*!******************************************!*\
  !*** ./resources/js/pages/Home/Home.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Home_vue_vue_type_template_id_097fa176___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home.vue?vue&type=template&id=097fa176& */ "./resources/js/pages/Home/Home.vue?vue&type=template&id=097fa176&");
/* harmony import */ var _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home.vue?vue&type=script&lang=js& */ "./resources/js/pages/Home/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Home_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Home.vue?vue&type=style&index=0&lang=css& */ "./resources/js/pages/Home/Home.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Home_vue_vue_type_template_id_097fa176___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Home_vue_vue_type_template_id_097fa176___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Home/Home.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Home/Home.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/pages/Home/Home.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Home/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Home/Home.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************!*\
  !*** ./resources/js/pages/Home/Home.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--5-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--5-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Home/Home.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/pages/Home/Home.vue?vue&type=template&id=097fa176&":
/*!*************************************************************************!*\
  !*** ./resources/js/pages/Home/Home.vue?vue&type=template&id=097fa176& ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_097fa176___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=template&id=097fa176& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Home/Home.vue?vue&type=template&id=097fa176&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_097fa176___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_097fa176___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/services/ServiceFactory.js":
/*!*************************************************!*\
  !*** ./resources/js/services/ServiceFactory.js ***!
  \*************************************************/
/*! exports provided: ServiceFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceFactory", function() { return ServiceFactory; });
/* harmony import */ var _services_movieService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/services/movieService */ "./resources/js/services/movieService.js");

var services = {
  movie: _services_movieService__WEBPACK_IMPORTED_MODULE_0__["default"]
};
var ServiceFactory = {
  get: function get(name) {
    return services[name];
  }
};

/***/ }),

/***/ "./resources/js/services/http.js":
/*!***************************************!*\
  !*** ./resources/js/services/http.js ***!
  \***************************************/
/*! exports provided: httpResource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "httpResource", function() { return httpResource; });
/* harmony import */ var _services_partials_utilsHttp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/services/partials/utilsHttp */ "./resources/js/services/partials/utilsHttp.js");
/* harmony import */ var _config_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/config/settings */ "./resources/js/config/settings.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
//axios

var requestF = _services_partials_utilsHttp__WEBPACK_IMPORTED_MODULE_0__["requestF"],
    requestError = _services_partials_utilsHttp__WEBPACK_IMPORTED_MODULE_0__["requestError"],
    responseF = _services_partials_utilsHttp__WEBPACK_IMPORTED_MODULE_0__["responseF"],
    responseError = _services_partials_utilsHttp__WEBPACK_IMPORTED_MODULE_0__["responseError"];



var headersDefault = function headersDefault(_) {
  return {
    'X-Requested-With': 'XMLHttpRequest',
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  };
}; // For common config


axios__WEBPACK_IMPORTED_MODULE_2___default.a.defaults.headers.post["Content-Type"] = "application/json";
axios__WEBPACK_IMPORTED_MODULE_2___default.a.defaults.headers.common = headersDefault();
axios__WEBPACK_IMPORTED_MODULE_2___default.a.interceptors.request.use(requestF, requestError);
axios__WEBPACK_IMPORTED_MODULE_2___default.a.interceptors.response.use(responseF, responseError); // create a new axios instance

var httpResource = axios__WEBPACK_IMPORTED_MODULE_2___default.a.create({
  baseURL: "".concat(_config_settings__WEBPACK_IMPORTED_MODULE_1__["API_URL"], "v1/")
});
httpResource.defaults.headers.post["Content-Type"] = "application/json";
httpResource.defaults.headers.common = headersDefault();
httpResource.interceptors.request.use(requestF, requestError);
httpResource.interceptors.response.use(responseF, responseError);


/***/ }),

/***/ "./resources/js/services/movieService.js":
/*!***********************************************!*\
  !*** ./resources/js/services/movieService.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/services/http */ "./resources/js/services/http.js");

var resource = "movies";
/* harmony default export */ __webpack_exports__["default"] = ({
  get: function get() {
    return _services_http__WEBPACK_IMPORTED_MODULE_0__["httpResource"].post("".concat(resource));
  }
});

/***/ }),

/***/ "./resources/js/services/partials/utilsHttp.js":
/*!*****************************************************!*\
  !*** ./resources/js/services/partials/utilsHttp.js ***!
  \*****************************************************/
/*! exports provided: requestF, requestError, responseF, responseError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requestF", function() { return requestF; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requestError", function() { return requestError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "responseF", function() { return responseF; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "responseError", function() { return responseError; });
var requestF = function requestF(config) {
  return config;
};
var requestError = function requestError(error) {
  return error;
};
var responseF = function responseF(response) {
  return response;
};
var responseError = function responseError(error) {
  return error;
};

/***/ })

}]);