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
    summitUpload: function () {
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

      return function summitUpload(_x, _x2, _x3) {
        return _ref.apply(this, arguments);
      };
    }()
  }
});

/***/ }),

/***/ "./src/graphs/delay/resolvers.js":
/*!***************************************!*\
  !*** ./src/graphs/delay/resolvers.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/firebase */ "./src/utils/firebase.js");


/* harmony default export */ __webpack_exports__["default"] = ({
  Query: {
    delay: function delay(obj) {
      var docRef = _utils_firebase__WEBPACK_IMPORTED_MODULE_0__["default"].ref("delay");
      return docRef.once("value").then(function (snap) {
        return snap.val();
      });
    }
  },
  Mutation: {
    setDelay: function setDelay(obj, _ref) {
      var delay = _ref.delay;

      var docRef = _utils_firebase__WEBPACK_IMPORTED_MODULE_0__["default"].ref("delay");
      docRef.set(delay);
      return delay;
    }
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
/* harmony import */ var babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/core-js/promise */ "babel-runtime/core-js/promise");
/* harmony import */ var babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/regenerator */ "babel-runtime/regenerator");
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ "babel-runtime/helpers/asyncToGenerator");
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/firebase */ "./src/utils/firebase.js");






var _this = undefined;



/* harmony default export */ __webpack_exports__["default"] = ({
  Query: {
    application: function () {
      var _ref = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee(obj, _ref2, ctx) {
        var input = _ref2.input;
        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee$(_context) {
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
    }(),
    game: function () {
      var _ref3 = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee2(obj, _ref4) {
        var id = _ref4.id;
        var delayRef, delay;
        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                delayRef = _utils_firebase__WEBPACK_IMPORTED_MODULE_5__["default"].ref("delay");
                _context2.next = 3;
                return delayRef.once("value").then(function (snap) {
                  return snap.val();
                });

              case 3:
                delay = _context2.sent;

                console.log("*--delay", delay);
                return _context2.abrupt("return", new babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_2___default.a(function (res, rej) {
                  var ref = _utils_firebase__WEBPACK_IMPORTED_MODULE_5__["default"].ref("games").child(id);
                  ref.once("value").then(function (snap) {
                    var snapVal = snap.val();
                    var keys = babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(snapVal).filter(function (k) {
                      return k !== "name";
                    });
                    res({ name: snapVal.name, actionIds: keys, gameId: id });
                  });
                }));

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, _this);
      }));

      return function game(_x4, _x5) {
        return _ref3.apply(this, arguments);
      };
    }(),
    games: function games(obj) {
      var ref = _utils_firebase__WEBPACK_IMPORTED_MODULE_5__["default"].ref("games");
      return ref.once("value").then(function (snap) {
        var snapVal = snap.val();
        return babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(snapVal).map(function (key) {
          return babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
            id: key
          }, snapVal[key]);
        });
      });
    }
  },
  Game: {
    actions: function actions(obj) {
      if (!obj.actionIds) return null;
      var ref = _utils_firebase__WEBPACK_IMPORTED_MODULE_5__["default"].ref("games").child(obj.gameId);
      return ref.once("value").then(function (snap) {
        var snapVal = snap.val();
        var gameArr = babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(snapVal).map(function (key) {
          return babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
            id: key
          }, snapVal[key]);
        });

        return gameArr.filter(function (action) {
          return obj.actionIds.includes(action.id);
        });
      });
    }
  },
  Mutation: {
    addGameAction: function addGameAction(obj, _ref5) {
      var input = _ref5.input;
      var value = input.value,
          type = input.type,
          game = input.game;

      var docRef = _utils_firebase__WEBPACK_IMPORTED_MODULE_5__["default"].ref("games");
      if (game) {
        docRef.child(game).push({
          type: type,
          value: value
        });
      } else {
        var gameRef = docRef.push();
        gameRef.push({
          type: type,
          value: value
        });
      }
    },
    addGame: function addGame(obj, _ref6) {
      var input = _ref6.input;

      var docRef = _utils_firebase__WEBPACK_IMPORTED_MODULE_5__["default"].ref("games");
      var newItem = docRef.push({
        name: input.name
      });

      return {
        name: input.name,
        id: newItem.key
      };
    }
  }
});

/***/ }),

/***/ "./src/graphs/resolvers.js":
/*!*********************************!*\
  !*** ./src/graphs/resolvers.js ***!
  \*********************************/
/*! exports provided: game, application, delay */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game_resolvers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game/resolvers */ "./src/graphs/game/resolvers.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "game", function() { return _game_resolvers__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _application_resolvers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./application/resolvers */ "./src/graphs/application/resolvers.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "application", function() { return _application_resolvers__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _delay_resolvers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./delay/resolvers */ "./src/graphs/delay/resolvers.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "delay", function() { return _delay_resolvers__WEBPACK_IMPORTED_MODULE_2__["default"]; });





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
/* harmony import */ var graphql_import__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-import */ "graphql-import");
/* harmony import */ var graphql_import__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_import__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var apollo_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-server */ "apollo-server");
/* harmony import */ var apollo_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(apollo_server__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _graphs_resolvers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./graphs/resolvers */ "./src/graphs/resolvers.js");






var typeDefs = Object(graphql_import__WEBPACK_IMPORTED_MODULE_0__["importSchema"])("./src/graphs/schema.graphql");

// not required but can be useful if you run multiple servers.
var PORT = 2999;

var server = new apollo_server__WEBPACK_IMPORTED_MODULE_1__["ApolloServer"]({
  typeDefs: typeDefs,
  resolvers: lodash__WEBPACK_IMPORTED_MODULE_2___default.a.reduce(_graphs_resolvers__WEBPACK_IMPORTED_MODULE_3__, function (prev, next) {
    return lodash__WEBPACK_IMPORTED_MODULE_2___default.a.merge(prev, next);
  })
});

// Start accepting connections.
server.listen({ port: PORT }).then(function (_ref) {
  var url = _ref.url;

  console.log("\uD83D\uDE80 Apollo server running on port " + url);
});

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