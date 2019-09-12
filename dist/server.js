/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./settings.json":
/*!***********************!*\
  !*** ./settings.json ***!
  \***********************/
/*! exports provided: firebase, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"firebase\":{\"apiKey\":\"AIzaSyAKpZBvjSfci152yGOKOJo-cJvMcnV7-bk\",\"authDomain\":\"summit-example.firebaseapp.com\",\"databaseURL\":\"https://summit-example.firebaseio.com\",\"projectId\":\"summit-example\",\"storageBucket\":\"summit-example.appspot.com\"}}");

/***/ }),

/***/ "./src/graphs/application/resolvers.js":
/*!*********************************************!*\
  !*** ./src/graphs/application/resolvers.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/regenerator */ "babel-runtime/regenerator");
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ "babel-runtime/helpers/asyncToGenerator");
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);



var _this = undefined;

/* harmony default export */ __webpack_exports__["default"] = ({
  Query: {
    application: function () {
      var _ref = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(obj, _ref2, ctx) {
        var input = _ref2.input;
        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", {
                  online: true
                });

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, _this);
      }));

      return function application(_x, _x2, _x3) {
        return _ref.apply(this, arguments);
      };
    }()
  }
});

/***/ }),

/***/ "./src/graphs/game/resolvers.js":
/*!**************************************!*\
  !*** ./src/graphs/game/resolvers.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "babel-runtime/helpers/extends");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/core-js/object/keys */ "babel-runtime/core-js/object/keys");
/* harmony import */ var babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/regenerator */ "babel-runtime/regenerator");
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/core-js/promise */ "babel-runtime/core-js/promise");
/* harmony import */ var babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ "babel-runtime/helpers/asyncToGenerator");
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var apollo_server__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! apollo-server */ "apollo-server");
/* harmony import */ var apollo_server__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(apollo_server__WEBPACK_IMPORTED_MODULE_5__);






var _this = undefined;



var addDelay = function () {
  var _ref = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee(ref, callback) {
    var delayRef, delay;
    return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            delayRef = ref.child("delay");
            _context.next = 3;
            return delayRef.once("value").then(function (snap) {
              return snap.val();
            });

          case 3:
            delay = _context.sent;
            return _context.abrupt("return", new babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_3___default.a(function (res, rej) {
              setTimeout(function () {
                return callback().then(res).catch(rej);
              }, delay * 1000);
            }));

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, _this);
  }));

  return function addDelay(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var refError = new apollo_server__WEBPACK_IMPORTED_MODULE_5__["ApolloError"]("no user/email attached", "EMAIL_ERROR");

/* harmony default export */ __webpack_exports__["default"] = ({
  Mutation: {
    addGameAction: function () {
      var _ref2 = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee3(obj, _ref3, _ref4) {
        var input = _ref3.input;
        var asyncRef = _ref4.asyncRef;
        var ref, value, type, timeStamp, docRef;
        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return asyncRef;

              case 2:
                ref = _context3.sent;

                if (ref) {
                  _context3.next = 5;
                  break;
                }

                return _context3.abrupt("return", refError);

              case 5:
                value = input.value, type = input.type, timeStamp = input.timeStamp;
                docRef = ref.child("actions");
                return _context3.abrupt("return", addDelay(ref, babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee2() {
                  var newRef, snap, actions;
                  return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee2$(_context2) {
                    while (1) {
                      switch (_context2.prev = _context2.next) {
                        case 0:
                          _context2.next = 2;
                          return docRef.push({
                            type: type,
                            value: value,
                            timeStamp: timeStamp
                          });

                        case 2:
                          newRef = _context2.sent;
                          _context2.next = 5;
                          return docRef.once("value");

                        case 5:
                          snap = _context2.sent;
                          actions = snap.val();
                          return _context2.abrupt("return", babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(actions).map(function (k) {
                            return babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({ id: k }, actions[k]);
                          }));

                        case 8:
                        case "end":
                          return _context2.stop();
                      }
                    }
                  }, _callee2, _this);
                }))));

              case 8:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, _this);
      }));

      return function addGameAction(_x3, _x4, _x5) {
        return _ref2.apply(this, arguments);
      };
    }()
  }
});

/***/ }),

/***/ "./src/graphs/resolvers.js":
/*!*********************************!*\
  !*** ./src/graphs/resolvers.js ***!
  \*********************************/
/*! exports provided: game, application, viewer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game_resolvers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game/resolvers */ "./src/graphs/game/resolvers.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "game", function() { return _game_resolvers__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _application_resolvers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./application/resolvers */ "./src/graphs/application/resolvers.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "application", function() { return _application_resolvers__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _viewer_resolvers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./viewer/resolvers */ "./src/graphs/viewer/resolvers.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "viewer", function() { return _viewer_resolvers__WEBPACK_IMPORTED_MODULE_2__["default"]; });





/***/ }),

/***/ "./src/graphs/viewer/resolvers.js":
/*!****************************************!*\
  !*** ./src/graphs/viewer/resolvers.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/core-js/promise */ "babel-runtime/core-js/promise");
/* harmony import */ var babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/core-js/object/keys */ "babel-runtime/core-js/object/keys");
/* harmony import */ var babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/regenerator */ "babel-runtime/regenerator");
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "babel-runtime/helpers/extends");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ "babel-runtime/helpers/asyncToGenerator");
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var apollo_server__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! apollo-server */ "apollo-server");
/* harmony import */ var apollo_server__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(apollo_server__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_firebase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/firebase */ "./src/utils/firebase.js");
/* harmony import */ var firebase_admin__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! firebase-admin */ "firebase-admin");
/* harmony import */ var firebase_admin__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(firebase_admin__WEBPACK_IMPORTED_MODULE_7__);






var _this = undefined;





var refError = new apollo_server__WEBPACK_IMPORTED_MODULE_5__["ApolloError"]("no Ref found", "EMAIL_ERROR");

/* harmony default export */ __webpack_exports__["default"] = ({
  Query: {
    viewer: function () {
      var _ref = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee(obj, arg, _ref2) {
        var asyncRef = _ref2.asyncRef,
            deviceId = _ref2.deviceId;
        var ref;
        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return asyncRef;

              case 2:
                ref = _context.sent;

                if (ref) {
                  _context.next = 5;
                  break;
                }

                return _context.abrupt("return", refError);

              case 5:
                return _context.abrupt("return", ref.once("value").then(function (snap) {
                  return babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3___default()({ id: deviceId }, snap.val());
                }));

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, _this);
      }));

      return function viewer(_x, _x2, _x3) {
        return _ref.apply(this, arguments);
      };
    }()
  },
  Viewer: {
    actions: function actions(_ref3) {
      var _actions = _ref3.actions;

      if (!_actions) return [];
      return babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(_actions).map(function (k) {
        return babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3___default()({ id: k }, _actions[k]);
      });
    }
  },
  Mutation: {
    reset: function () {
      var _ref4 = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee2(obj, _ref5, ctx) {
        var deviceId = _ref5.deviceId;
        var ref, result;
        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (deviceId) {
                  _context2.next = 2;
                  break;
                }

                return _context2.abrupt("return", false);

              case 2:
                ref = _utils_firebase__WEBPACK_IMPORTED_MODULE_6__["default"].ref(deviceId);
                _context2.next = 5;
                return ref.set(firebase_admin__WEBPACK_IMPORTED_MODULE_7__["firestore"].FieldValue.delete());

              case 5:
                result = _context2.sent;
                return _context2.abrupt("return", null);

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, _this);
      }));

      return function reset(_x4, _x5, _x6) {
        return _ref4.apply(this, arguments);
      };
    }(),
    setViewer: function () {
      var _ref6 = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee3(obj, _ref7, _ref8) {
        var _ref7$input = _ref7.input,
            delay = _ref7$input.delay,
            name = _ref7$input.name;
        var asyncRef = _ref8.asyncRef,
            deviceId = _ref8.deviceId;
        var ref, delayRef, nameRef;
        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return asyncRef;

              case 2:
                ref = _context3.sent;

                if (ref) {
                  _context3.next = 5;
                  break;
                }

                return _context3.abrupt("return", refError);

              case 5:
                delayRef = ref.child("delay");
                nameRef = ref.child("name");
                _context3.next = 9;
                return babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.all([nameRef.set(name), delayRef.set(delay)]);

              case 9:
                return _context3.abrupt("return", { id: deviceId, name: name, delay: delay });

              case 10:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, _this);
      }));

      return function setViewer(_x7, _x8, _x9) {
        return _ref6.apply(this, arguments);
      };
    }()
  }
});

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./server */ "./src/server.js");


/***/ }),

/***/ "./src/server.js":
/*!***********************!*\
  !*** ./src/server.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/regenerator */ "babel-runtime/regenerator");
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ "babel-runtime/helpers/asyncToGenerator");
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "babel-runtime/helpers/classCallCheck");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "babel-runtime/helpers/createClass");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var graphql_import__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! graphql-import */ "graphql-import");
/* harmony import */ var graphql_import__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(graphql_import__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var apollo_server__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! apollo-server */ "apollo-server");
/* harmony import */ var apollo_server__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(apollo_server__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils_firebase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/firebase */ "./src/utils/firebase.js");
/* harmony import */ var _graphs_resolvers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./graphs/resolvers */ "./src/graphs/resolvers.js");











var typeDefs = Object(graphql_import__WEBPACK_IMPORTED_MODULE_4__["importSchema"])("./src/graphs/schema.graphql");

// not required but can be useful if you run multiple servers.
var PORT = process.env.PORT || 2999;

var server = new apollo_server__WEBPACK_IMPORTED_MODULE_5__["ApolloServer"]({
  typeDefs: typeDefs,
  context: function context(req) {
    return new Context(req);
  },
  resolvers: lodash__WEBPACK_IMPORTED_MODULE_6___default.a.reduce(_graphs_resolvers__WEBPACK_IMPORTED_MODULE_8__, function (prev, next) {
    return lodash__WEBPACK_IMPORTED_MODULE_6___default.a.merge(prev, next);
  }),
  formatError: function formatError(err) {
    if (err.message.startsWith("Context creation failed: ")) {
      return new apollo_server__WEBPACK_IMPORTED_MODULE_5__["AuthenticationError"](err.message.replace("Context creation failed: ", ""));
    }
    return err;
  },
  playground: true
});

// Start accepting connections.
server.listen({ port: PORT }).then(function (_ref) {
  var url = _ref.url;

  console.log("\uD83D\uDE80 Apollo server running on port " + url);
});

var Context = function () {
  function Context(request) {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, Context);

    var headers = request.req ? request.req.headers : request.connection.context;
    this.user = headers && headers.user;
    this.request = request.req;

    this.deviceId = headers && headers.deviceid && headers.deviceid.replace(/[.\#\$]/g, "-");
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(Context, [{
    key: "setRef",
    value: function () {
      var _ref2 = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var isValue;
        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _utils_firebase__WEBPACK_IMPORTED_MODULE_7__["default"].ref().child(this.deviceId).once("value").then(function (snap) {
                  return snap.exists();
                });

              case 2:
                isValue = _context.sent;

                if (isValue) {
                  _context.next = 6;
                  break;
                }

                _context.next = 6;
                return _utils_firebase__WEBPACK_IMPORTED_MODULE_7__["default"].ref().child(this.deviceId).set({ delay: 0 });

              case 6:
                return _context.abrupt("return", _utils_firebase__WEBPACK_IMPORTED_MODULE_7__["default"].ref(this.deviceId));

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function setRef() {
        return _ref2.apply(this, arguments);
      }

      return setRef;
    }()
  }, {
    key: "asyncRef",
    get: function get() {
      if (this.deviceId) return this.setRef();
    }
  }]);

  return Context;
}();

/***/ }),

/***/ "./src/utils/firebase.js":
/*!*******************************!*\
  !*** ./src/utils/firebase.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var firebase_admin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase-admin */ "firebase-admin");
/* harmony import */ var firebase_admin__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_admin__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _settings_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../settings.json */ "./settings.json");
var _settings_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../settings.json */ "./settings.json", 1);
/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/database */ "firebase/database");
/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_database__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase */ "firebase");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_3__);





firebase__WEBPACK_IMPORTED_MODULE_3___default.a.initializeApp(_settings_json__WEBPACK_IMPORTED_MODULE_1__.firebase);

/* harmony default export */ __webpack_exports__["default"] = (firebase__WEBPACK_IMPORTED_MODULE_3___default.a.database());

/***/ }),

/***/ "apollo-server":
/*!********************************!*\
  !*** external "apollo-server" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-server");

/***/ }),

/***/ "babel-runtime/core-js/object/keys":
/*!****************************************************!*\
  !*** external "babel-runtime/core-js/object/keys" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/object/keys");

/***/ }),

/***/ "babel-runtime/core-js/promise":
/*!************************************************!*\
  !*** external "babel-runtime/core-js/promise" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/promise");

/***/ }),

/***/ "babel-runtime/helpers/asyncToGenerator":
/*!*********************************************************!*\
  !*** external "babel-runtime/helpers/asyncToGenerator" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/asyncToGenerator");

/***/ }),

/***/ "babel-runtime/helpers/classCallCheck":
/*!*******************************************************!*\
  !*** external "babel-runtime/helpers/classCallCheck" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/classCallCheck");

/***/ }),

/***/ "babel-runtime/helpers/createClass":
/*!****************************************************!*\
  !*** external "babel-runtime/helpers/createClass" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/createClass");

/***/ }),

/***/ "babel-runtime/helpers/extends":
/*!************************************************!*\
  !*** external "babel-runtime/helpers/extends" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/extends");

/***/ }),

/***/ "babel-runtime/regenerator":
/*!********************************************!*\
  !*** external "babel-runtime/regenerator" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/regenerator");

/***/ }),

/***/ "firebase":
/*!***************************!*\
  !*** external "firebase" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase");

/***/ }),

/***/ "firebase-admin":
/*!*********************************!*\
  !*** external "firebase-admin" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase-admin");

/***/ }),

/***/ "firebase/database":
/*!************************************!*\
  !*** external "firebase/database" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/database");

/***/ }),

/***/ "graphql-import":
/*!*********************************!*\
  !*** external "graphql-import" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql-import");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ })

/******/ });
//# sourceMappingURL=server.js.map