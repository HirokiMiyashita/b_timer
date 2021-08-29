"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/component/Calculations/Data";
exports.ids = ["pages/component/Calculations/Data"];
exports.modules = {

/***/ "./pages/component/Calculations/Data.tsx":
/*!***********************************************!*\
  !*** ./pages/component/Calculations/Data.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _jsxFileName = \"/Users/miyashitahiroshinozomi/b_timer/pages/component/Calculations/Data.tsx\";\n\n\n\nconst Data = () => {\n  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n  const sumNum = Number(router.query.count);\n  const num = sumNum;\n  var timeD = Math.floor(num / (24 * 60 * 60));\n  var timeH = Math.floor(num % (24 * 60 * 60) / (60 * 60));\n  var timeM = Math.floor(num % (24 * 60 * 60) % (60 * 60) / 60);\n  var timeS = num % (24 * 60 * 60) % (60 * 60) % 60;\n  var timeDMS = timeD + '日' + timeH + '時間' + timeM + '分' + timeS + '秒';\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dl\", {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dt\", {\n        children: \"\\u5408\\u8A08\\u5B66\\u7FD2\\u6642\\u9593\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 5\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dd\", {\n        children: timeDMS\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 5\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 4\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 17,\n    columnNumber: 3\n  }, undefined);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Data);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnQvQ2FsY3VsYXRpb25zL0RhdGEudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsTUFBTUUsSUFBZSxHQUFHLE1BQU07QUFDN0IsUUFBTUMsTUFBTSxHQUFHRixzREFBUyxFQUF4QjtBQUVBLFFBQU1HLE1BQU0sR0FBR0MsTUFBTSxDQUFDRixNQUFNLENBQUNHLEtBQVAsQ0FBYUMsS0FBZCxDQUFyQjtBQUNBLFFBQU1DLEdBQUcsR0FBR0osTUFBWjtBQUVBLE1BQUlLLEtBQUssR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdILEdBQUcsSUFBSSxLQUFLLEVBQUwsR0FBVSxFQUFkLENBQWQsQ0FBWjtBQUNBLE1BQUlJLEtBQUssR0FBR0YsSUFBSSxDQUFDQyxLQUFMLENBQVlILEdBQUcsSUFBSSxLQUFLLEVBQUwsR0FBVSxFQUFkLENBQUosSUFBMEIsS0FBSyxFQUEvQixDQUFYLENBQVo7QUFDQSxNQUFJSyxLQUFLLEdBQUdILElBQUksQ0FBQ0MsS0FBTCxDQUFhSCxHQUFHLElBQUksS0FBSyxFQUFMLEdBQVUsRUFBZCxDQUFKLElBQTBCLEtBQUssRUFBL0IsQ0FBRCxHQUF1QyxFQUFsRCxDQUFaO0FBQ0EsTUFBSU0sS0FBSyxHQUFLTixHQUFHLElBQUksS0FBSyxFQUFMLEdBQVUsRUFBZCxDQUFKLElBQTBCLEtBQUssRUFBL0IsQ0FBRCxHQUF1QyxFQUFuRDtBQUNBLE1BQUlPLE9BQU8sR0FBR04sS0FBSyxHQUFHLEdBQVIsR0FBY0csS0FBZCxHQUFzQixJQUF0QixHQUE2QkMsS0FBN0IsR0FBcUMsR0FBckMsR0FBMkNDLEtBQTNDLEdBQW1ELEdBQWpFO0FBRUEsc0JBQ0M7QUFBQSwyQkFDQztBQUFBLDhCQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURELGVBRUM7QUFBQSxrQkFBS0M7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERDtBQVFBLENBcEJEOztBQXNCQSxpRUFBZWIsSUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL2Jfd2F0ZXIvLi9wYWdlcy9jb21wb25lbnQvQ2FsY3VsYXRpb25zL0RhdGEudHN4P2VhOGIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcblxuY29uc3QgRGF0YTogUmVhY3QuVkZDID0gKCkgPT4ge1xuXHRjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuXHRjb25zdCBzdW1OdW0gPSBOdW1iZXIocm91dGVyLnF1ZXJ5LmNvdW50KTtcblx0Y29uc3QgbnVtID0gc3VtTnVtO1xuXG5cdHZhciB0aW1lRCA9IE1hdGguZmxvb3IobnVtIC8gKDI0ICogNjAgKiA2MCkpO1xuXHR2YXIgdGltZUggPSBNYXRoLmZsb29yKChudW0gJSAoMjQgKiA2MCAqIDYwKSkgLyAoNjAgKiA2MCkpO1xuXHR2YXIgdGltZU0gPSBNYXRoLmZsb29yKCgobnVtICUgKDI0ICogNjAgKiA2MCkpICUgKDYwICogNjApKSAvIDYwKTtcblx0dmFyIHRpbWVTID0gKChudW0gJSAoMjQgKiA2MCAqIDYwKSkgJSAoNjAgKiA2MCkpICUgNjA7XG5cdHZhciB0aW1lRE1TID0gdGltZUQgKyAn5pelJyArIHRpbWVIICsgJ+aZgumWkycgKyB0aW1lTSArICfliIYnICsgdGltZVMgKyAn56eSJztcblxuXHRyZXR1cm4gKFxuXHRcdDxkaXY+XG5cdFx0XHQ8ZGw+XG5cdFx0XHRcdDxkdD7lkIjoqIjlrabnv5LmmYLplpM8L2R0PlxuXHRcdFx0XHQ8ZGQ+e3RpbWVETVN9PC9kZD5cblx0XHRcdDwvZGw+XG5cdFx0PC9kaXY+XG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBEYXRhO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlUm91dGVyIiwiRGF0YSIsInJvdXRlciIsInN1bU51bSIsIk51bWJlciIsInF1ZXJ5IiwiY291bnQiLCJudW0iLCJ0aW1lRCIsIk1hdGgiLCJmbG9vciIsInRpbWVIIiwidGltZU0iLCJ0aW1lUyIsInRpbWVETVMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/component/Calculations/Data.tsx\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/component/Calculations/Data.tsx"));
module.exports = __webpack_exports__;

})();