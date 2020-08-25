webpackHotUpdate_N_E("pages/index",{

/***/ "./components/about.tsx":
/*!******************************!*\
  !*** ./components/about.tsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return About; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/colors */ "./node_modules/@material-ui/core/esm/colors/index.js");
var _jsxFileName = "/mnt/c/Users/rtorr/documents/github/portfolio/components/about.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function (theme) {
  return {
    box: {
      backgroundColor: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_2__["grey"][900],
      color: 'white'
    },
    header: {
      color: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_2__["red"][500]
    }
  };
});
function About() {
  _s();

  var classes = useStyles();
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    p: 2,
    className: classes.box,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 3
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 4
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    container: true,
    spacing: 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 6
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    p: 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    gutterBottom: true,
    align: "center",
    variant: "h2",
    id: "about",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 8
    }
  }, __jsx("span", {
    className: classes.header,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 72
    }
  }, "Abo"), "ut Me"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 8
    }
  }, "Born in the bayous of Brooklyn, NY, I've devoted myself to being a life-long learner."))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 6
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
    variant: "square",
    src: "undraw_code_thinking_1jeh.svg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }
  })))));
}

_s(About, "8g5FPXexvSEOsxdmU7HicukHGqY=", false, function () {
  return [useStyles];
});

_c = About;

var _c;

$RefreshReg$(_c, "About");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hYm91dC50c3giXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwiYm94IiwiYmFja2dyb3VuZENvbG9yIiwiZ3JleSIsImNvbG9yIiwiaGVhZGVyIiwicmVkIiwiQWJvdXQiLCJjbGFzc2VzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFZQTtBQUVBLElBQU1BLFNBQVMsR0FBR0Msb0VBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUN4Q0MsT0FBRyxFQUFFO0FBQ0pDLHFCQUFlLEVBQUVDLDZEQUFJLENBQUMsR0FBRCxDQURqQjtBQUVKQyxXQUFLLEVBQUU7QUFGSCxLQURtQztBQUt4Q0MsVUFBTSxFQUFFO0FBQ1BELFdBQUssRUFBRUUsNERBQUcsQ0FBQyxHQUFEO0FBREg7QUFMZ0MsR0FBWjtBQUFBLENBQUQsQ0FBNUI7QUFVZSxTQUFTQyxLQUFULEdBQWlCO0FBQUE7O0FBQy9CLE1BQU1DLE9BQU8sR0FBR1YsU0FBUyxFQUF6QjtBQUVBLFNBQ0MsTUFBQyxxREFBRDtBQUFLLEtBQUMsRUFBRSxDQUFSO0FBQVcsYUFBUyxFQUFFVSxPQUFPLENBQUNQLEdBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLDJEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLHNEQUFEO0FBQU0sYUFBUyxNQUFmO0FBQWdCLFdBQU8sRUFBRSxDQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQyxzREFBRDtBQUFNLFFBQUksTUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQyxxREFBRDtBQUFLLEtBQUMsRUFBRSxDQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLDREQUFEO0FBQVksZ0JBQVksTUFBeEI7QUFBeUIsU0FBSyxFQUFDLFFBQS9CO0FBQXdDLFdBQU8sRUFBQyxJQUFoRDtBQUFxRCxNQUFFLEVBQUMsT0FBeEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFnRTtBQUFNLGFBQVMsRUFBRU8sT0FBTyxDQUFDSCxNQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQWhFLFVBREQsRUFFQyxNQUFDLDREQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkZBRkQsQ0FERCxDQURELEVBT0MsTUFBQyxzREFBRDtBQUFNLFFBQUksTUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQyx3REFBRDtBQUFRLFdBQU8sRUFBQyxRQUFoQjtBQUF5QixPQUFHLEVBQUMsK0JBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERCxDQVBELENBREQsQ0FERCxDQUREO0FBaUJBOztHQXBCdUJFLEs7VUFDUFQsUzs7O0tBRE9TLEsiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguN2YwYTdkMGQ5ZmEzZWUxZTEyYTUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1xuXHRBdmF0YXIsXG5cdEJveCxcblx0Q2FyZCxcblx0Q2FyZENvbnRlbnQsXG5cdENhcmRIZWFkZXIsXG5cdENvbnRhaW5lcixcblx0R3JpZCxcblx0bWFrZVN0eWxlcyxcblx0UGFwZXIsXG5cdFR5cG9ncmFwaHlcblx0fSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XG5pbXBvcnQgeyBncmV5LCByZWQgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9jb2xvcnMnO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcblx0Ym94OiB7XG5cdFx0YmFja2dyb3VuZENvbG9yOiBncmV5WzkwMF0sXG5cdFx0Y29sb3I6ICd3aGl0ZSdcblx0fSxcblx0aGVhZGVyOiB7XG5cdFx0Y29sb3I6IHJlZFs1MDBdXG5cdH1cbn0pKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWJvdXQoKSB7XG5cdGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcblxuXHRyZXR1cm4gKFxuXHRcdDxCb3ggcD17Mn0gY2xhc3NOYW1lPXtjbGFzc2VzLmJveH0+XG5cdFx0XHQ8Q29udGFpbmVyPlxuXHRcdFx0XHQ8R3JpZCBjb250YWluZXIgc3BhY2luZz17Mn0+XG5cdFx0XHRcdFx0PEdyaWQgaXRlbT5cblx0XHRcdFx0XHRcdDxCb3ggcD17Mn0+XG5cdFx0XHRcdFx0XHRcdDxUeXBvZ3JhcGh5IGd1dHRlckJvdHRvbSBhbGlnbj1cImNlbnRlclwiIHZhcmlhbnQ9XCJoMlwiIGlkPVwiYWJvdXRcIj48c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMuaGVhZGVyfT5BYm88L3NwYW4+dXQgTWU8L1R5cG9ncmFwaHk+XG5cdFx0XHRcdFx0XHRcdDxUeXBvZ3JhcGh5PkJvcm4gaW4gdGhlIGJheW91cyBvZiBCcm9va2x5biwgTlksIEkndmUgZGV2b3RlZCBteXNlbGYgdG8gYmVpbmcgYSBsaWZlLWxvbmcgbGVhcm5lci48L1R5cG9ncmFwaHk+XG5cdFx0XHRcdFx0XHQ8L0JveD5cblx0XHRcdFx0XHQ8L0dyaWQ+XG5cdFx0XHRcdFx0PEdyaWQgaXRlbT5cblx0XHRcdFx0XHRcdDxBdmF0YXIgdmFyaWFudD1cInNxdWFyZVwiIHNyYz1cInVuZHJhd19jb2RlX3RoaW5raW5nXzFqZWguc3ZnXCIgLz5cblx0XHRcdFx0XHQ8L0dyaWQ+XG5cdFx0XHRcdDwvR3JpZD5cblx0XHRcdDwvQ29udGFpbmVyPlxuXHRcdDwvQm94PlxuXHQpO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==