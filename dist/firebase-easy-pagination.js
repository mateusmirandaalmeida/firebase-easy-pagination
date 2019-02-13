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
/******/ 	__webpack_require__.p = "dist";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./demo.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./demo.ts":
/*!*****************!*\
  !*** ./demo.ts ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src */ "./src/index.ts");

var Controller = /** @class */ (function () {
    function Controller() {
        this.pagination = new _src__WEBPACK_IMPORTED_MODULE_0__["FirebaseEasyPagination"]('users');
    }
    Controller.prototype.search = function () {
        this.pagination
            .search()
            .where('field', 'confition', 'value')
            .onExecute(function () {
        });
    };
    Controller.prototype.next = function () {
        this.pagination.next();
    };
    Controller.prototype.prev = function () {
        this.pagination.prev();
    };
    return Controller;
}());
/*

<mbg-list list="$ctrl.pagination.values"></mbg-list>

*/
// em que pagina eu to?
// como fazer order by ?
// posso paginar com filtro?
// quantas paginas tem?


/***/ }),

/***/ "./src/firebase-ease-pagination.ts":
/*!*****************************************!*\
  !*** ./src/firebase-ease-pagination.ts ***!
  \*****************************************/
/*! exports provided: FirebaseEasyPagination */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirebaseEasyPagination", function() { return FirebaseEasyPagination; });
/* harmony import */ var _firebase_ease_search__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./firebase-ease-search */ "./src/firebase-ease-search.ts");

var FirebaseEasyPagination = /** @class */ (function () {
    function FirebaseEasyPagination(ref, options) {
        this.ref = ref;
        this.options = options;
    }
    FirebaseEasyPagination.prototype.search = function () {
        return new _firebase_ease_search__WEBPACK_IMPORTED_MODULE_0__["FirebaseEasySearch"](this.ref, this.options);
    };
    FirebaseEasyPagination.prototype.next = function () { };
    FirebaseEasyPagination.prototype.prev = function () { };
    return FirebaseEasyPagination;
}());



/***/ }),

/***/ "./src/firebase-ease-search.ts":
/*!*************************************!*\
  !*** ./src/firebase-ease-search.ts ***!
  \*************************************/
/*! exports provided: FirebaseEasySearch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirebaseEasySearch", function() { return FirebaseEasySearch; });
var FirebaseEasySearch = /** @class */ (function () {
    function FirebaseEasySearch(ref, options) {
        this.ref = ref;
        this.options = options;
        this.conditions = [];
    }
    FirebaseEasySearch.prototype.where = function (field, condition, value) {
        this.conditions.push({ field: field, condition: condition, value: value });
        return this;
    };
    FirebaseEasySearch.prototype.onExecute = function (callback) {
    };
    return FirebaseEasySearch;
}());



/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! exports provided: FirebaseEasyPagination, FirebaseEasySearch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _firebase_ease_pagination__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./firebase-ease-pagination */ "./src/firebase-ease-pagination.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FirebaseEasyPagination", function() { return _firebase_ease_pagination__WEBPACK_IMPORTED_MODULE_0__["FirebaseEasyPagination"]; });

/* harmony import */ var _firebase_ease_search__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./firebase-ease-search */ "./src/firebase-ease-search.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FirebaseEasySearch", function() { return _firebase_ease_search__WEBPACK_IMPORTED_MODULE_1__["FirebaseEasySearch"]; });

/**
 * Export all modules from current directory
 */




/***/ })

/******/ });
//# sourceMappingURL=firebase-easy-pagination.js.map