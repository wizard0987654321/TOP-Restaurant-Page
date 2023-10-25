/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadAbout)\n/* harmony export */ });\nfunction loadAbout() {\n    const div = document.getElementById(\"content\");\n    const aboutdiv = document.createElement(\"div\");\n    aboutdiv.classList.add(\"aboutpage\");\n\n    aboutdiv.innerHTML = `\n        <div class=\"aboutdiv\">\n            <div class=\"infodiv\">\n                <h5>Los Pollos Hermanos (Spanish pronunciation: [los po.ʝos eɾ.ma.nos]; broken Spanish for The Chicken Brothers) is a fast food restaurant chain specializing in chicken</h5>\n                <a href=\"https://breakingbad.fandom.com/wiki/Los_Pollos_Hermanos\"><p>Read More</p></a>\n            </div>\n            <img src=\"gustavo.png\" alt=\"founderpic\" class=\"aboutpic\">\n        </div>`\n\n    div.appendChild(aboutdiv);\n};\n\n//# sourceURL=webpack://top-restaurant-page/./src/about.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadHome)\n/* harmony export */ });\nfunction loadHome() {\n    const div = document.getElementById(\"content\");\n    const homediv = document.createElement(\"div\");\n    homediv.classList.add(\"homepage\");\n\n    homediv.innerHTML = `\n                        <h1>Welcome to Los Pollos Hermanos</h1>\n                        <h3>Best Fast Food Restaurant Chain specializing in Chicken</h3>`\n\n    div.appendChild(homediv);\n};\n\n\n\n//# sourceURL=webpack://top-restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about.js */ \"./src/about.js\");\n\n\n\n\ndocument.addEventListener('DOMContentLoaded', function() {\n    \n    (0,_home_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n    const div = document.getElementById(\"content\");\n\n    function clearContent () {\n        div.innerHTML = `<nav class=\"navbar\">\n        <div class=\"navdiv\">\n            <ul>\n                <li><a href=\"#\" id=\"home\">Home</a></li>\n                <li><a href=\"#\" id=\"menu\">Menu</a></li>\n                <li><a href=\"#\" id=\"about\">About</a></li>\n            </ul>\n        </div>\n    </nav>`;\n    }\n\n    div.addEventListener(\"click\", function(e) {\n        if (e.target.id === \"home\") {\n            clearContent();\n            (0,_home_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n        } else if (e.target.id === \"menu\") {\n            clearContent();\n            (0,_menu_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n        } else if (e.target.id === \"about\") {\n            clearContent();\n            (0,_about_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n        }\n    });\n    });\n\nconsole.log('traki');\n\n\n//# sourceURL=webpack://top-restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadMenu)\n/* harmony export */ });\nfunction loadMenu() {\n    const div = document.getElementById(\"content\");\n    const menudiv = document.createElement(\"div\");\n    menudiv.classList.add(\"menupage\");\n\n    menudiv.innerHTML = `\n    <div class=\"meal\">\n        <h4>Pollos Breakfast</h4>\n        <img src=\"pollosbreakfast.jpg\" class=\"mealpic\">\n    </div>\n    <div class=\"meal\">\n        <h4>Chicken Burrito</h4>\n        <img src=\"chickenburrito.jpg\" class=\"mealpic\">\n    </div>\n    <div class=\"meal\">\n        <h4>Taco Salad (chicken)</h4>\n        <img src=\"tacosalad.jpg\" class=\"mealpic\">\n    </div>\n    <div class=\"meal\">\n        <h4>Chicken Wrap</h4>\n        <img src=\"chickenwrap.jpg\" class=\"mealpic\">\n    </div>`\n\n    div.appendChild(menudiv);\n};\n\n\n\n//# sourceURL=webpack://top-restaurant-page/./src/menu.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;