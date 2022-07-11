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

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/calc */ \"./modules/calc.js\");\n\r\n\r\n\r\n(0,_modules_calc__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/calc.js":
/*!*************************!*\
  !*** ./modules/calc.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst calc = () => {\r\n    const calcType = document.getElementById(\"calc-type\");\r\n    const calcArea = document.getElementById(\"calc-input\");\r\n    const calcMaterial = document.getElementById(\"calc-type-material\");\r\n    const total = document.getElementById(\"calc-total\");\r\n    const calcBlock = document.getElementById(\"calc\");\r\n\r\n    console.log(calcBlock);\r\n    console.log(calcType);\r\n    console.log(calcMaterial);\r\n    console.log(calcArea);\r\n    console.log(total);\r\n\r\n    // const textCalcBlock = document.querySelectorAll('.calc-block input');\r\n    // const calcBlock = document.querySelector('.calc-block');\r\n    // const calcType = document.querySelector('.calc-type');\r\n    // const calcSquare = document.querySelector('.calc-square');\r\n    // const calcCount = document.querySelector('.calc-count');\r\n    // let calcDay = document.querySelector('.calc-day');\r\n    // const total = document.getElementById('total');\r\n\r\n    // const countCalc = () => {\r\n    //     const calcTypeValue = +calcType.options[calcType.selectedIndex].value;\r\n    //     const calcSquareValue = calcSquare.value;\r\n\r\n    //     let totalValue = 0;\r\n    //     let calcCountValue = 1;\r\n    //     let calcDayValue = 1;\r\n\r\n    //     if (calcCount.value > 1) {\r\n    //         calcCountValue += +calcCount.value / 10;\r\n    //     }\r\n\r\n    //     if (calcDay.value && calcDay.value < 5) {\r\n    //         calcDayValue = 2;\r\n    //     } else if (calcDay.value && calcDay.value < 10) {\r\n    //         calcDayValue = 1.5;\r\n    //     }\r\n\r\n    //     if (calcTypeValue && calcSquareValue) {\r\n    //         totalValue = price * calcTypeValue * calcSquareValue * calcCountValue * calcDayValue;\r\n\r\n    //     } else {\r\n    //         totalValue = 0;\r\n    //     }\r\n    //     animate({\r\n    //         duration: 500,\r\n    //         timing(timeFraction) {\r\n    //             return timeFraction;\r\n    //         },\r\n    //         draw(progress) {\r\n    //             for (let i = 0; i <= totalValue; i++) {\r\n    //                 total.textContent = Math.floor(i * progress);\r\n    //             }\r\n    //         }\r\n    //     });\r\n    // };\r\n\r\n    // calcBlock.addEventListener('input', (e) => {\r\n    //     if (e.target === calcType ||\r\n    //         e.target === calcSquare ||\r\n    //         e.target === calcCount ||\r\n    //         e.target === calcDay) {\r\n    //         countCalc();\r\n    //     }\r\n\r\n    // });\r\n\r\n    // textCalcBlock.forEach(textBlock => {\r\n    //     textBlock.addEventListener('input', (e) => {\r\n    //         e.target.value = e.target.value.replace(/\\D+/gi, '');\r\n    //     });\r\n\r\n    // });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);\n\n//# sourceURL=webpack:///./modules/calc.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;